#!/usr/bin/env node

import { execFileSync } from 'node:child_process';
import { existsSync, statSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..');
const distIndexPath = join(rootDir, 'dist', 'index.js');

/**
 * Стартовый lightweight-лимит для шаблона, а не постоянный максимум на весь срок жизни библиотеки.
 *
 * С добавлением новых компонентов `dist/index.js` будет расти, потому что root entrypoint
 * экспортирует публичный API пакета. Этот лимит нужен, чтобы рано заметить случайное попадание
 * лишнего кода в основной entrypoint. Когда появится несколько реальных компонентов, лимит можно
 * пересмотреть по фактическому baseline сборки.
 */
const defaultMaxIndexSizeBytes = 20 * 1024;

/**
 * Максимальный допустимый размер основного entrypoint после сборки.
 *
 * По умолчанию используется небольшой лимит для раннего обнаружения случайного
 * раздувания пакета. При необходимости CI или локальный запуск могут временно
 * переопределить лимит через PACKAGE_MAX_INDEX_SIZE_BYTES.
 */
const maxIndexSizeBytes = Number.parseInt(
  process.env.PACKAGE_MAX_INDEX_SIZE_BYTES ?? String(defaultMaxIndexSizeBytes),
  10,
);

/** Форматирует байты в KiB для читаемого вывода в консоли. */
const formatBytes = (bytes) => `${(bytes / 1024).toFixed(1)} KiB`;

/** Возвращает путь относительно корня проекта, чтобы сообщения не зависели от локальной машины. */
const formatProjectPath = (filePath) => relative(rootDir, filePath);

/**
 * Набор правил для файлов, которые не должны попадать в npm-пакет.
 *
 * Разрешённые корни дополнительно проверяются в validatePackageFiles, а эти
 * правила отлавливают служебные директории, тестовые артефакты и template-файлы,
 * даже если они случайно окажутся внутри разрешённого publish root.
 */
const forbiddenPackagePathRules = [
  {
    label: 'source files',
    matches: (path) => path === 'src' || path.startsWith('src/'),
  },
  {
    label: 'Storybook build output',
    matches: (path) => path === 'storybook-static' || path.startsWith('storybook-static/'),
  },
  {
    label: 'Playwright report output',
    matches: (path) => path === 'playwright-report' || path.startsWith('playwright-report/'),
  },
  {
    label: 'test result output',
    matches: (path) => path === 'test-results' || path.startsWith('test-results/'),
  },
  {
    label: 'template files',
    matches: (path) => path.includes('/templates/') || path.startsWith('templates/') || path.includes('.template.'),
  },
  {
    label: 'local service files',
    matches: (path) =>
      path.startsWith('.github/') ||
      path.startsWith('.storybook/') ||
      path.startsWith('playground/') ||
      path.startsWith('scripts/') ||
      path.startsWith('tests/'),
  },
];

/**
 * Запускает npm pack в dry-run режиме и возвращает метаданные будущего tarball.
 *
 * Эта проверка использует реальный механизм npm, поэтому список файлов совпадает
 * с тем, что будет опубликовано при npm publish.
 */
const readPackDryRun = () => {
  const output = execFileSync('npm', ['pack', '--dry-run', '--json'], {
    cwd: rootDir,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  const result = JSON.parse(output);
  const packageInfo = result.at(0);

  if (!packageInfo) {
    throw new Error('npm pack --dry-run did not return package metadata.');
  }

  return packageInfo;
};

/**
 * Проверяет состав npm-пакета по списку файлов из npm pack --dry-run.
 *
 * В пакет должны попадать только публичные файлы: README, LICENSE, package.json
 * и собранный dist. Исходники, storybook/playground, тесты, скрипты и временные
 * артефакты должны оставаться вне publish tarball.
 */
const validatePackageFiles = (files) => {
  const errors = [];

  for (const file of files) {
    const path = file.path.replaceAll('\\', '/');

    // Сначала проверяем общий allowlist publish roots.
    if (path !== 'LICENSE' && path !== 'README.md' && path !== 'package.json' && !path.startsWith('dist/')) {
      errors.push(`${path} is outside the allowed publish roots.`);
    }

    // Затем применяем точечные запреты на служебные и тестовые файлы.
    for (const rule of forbiddenPackagePathRules) {
      if (rule.matches(path)) {
        errors.push(`${path} contains ${rule.label}.`);
      }
    }
  }

  return errors;
};

/**
 * Проверяет наличие и размер dist/index.js.
 *
 * Отсутствие файла обычно означает, что пакет не был собран перед проверкой.
 * Превышение лимита помогает заметить неожиданный рост основного bundle entry.
 */
const validateIndexSize = () => {
  if (!existsSync(distIndexPath)) {
    return [`${formatProjectPath(distIndexPath)} is missing. Run npm run build before package validation.`];
  }

  const sizeBytes = statSync(distIndexPath).size;

  if (!Number.isFinite(maxIndexSizeBytes) || maxIndexSizeBytes <= 0) {
    return ['PACKAGE_MAX_INDEX_SIZE_BYTES must be a positive integer when provided.'];
  }

  if (sizeBytes > maxIndexSizeBytes) {
    return [
      `${formatProjectPath(distIndexPath)} is ${formatBytes(sizeBytes)}, which exceeds ${formatBytes(
        maxIndexSizeBytes,
      )}.`,
    ];
  }

  return [];
};

const packageInfo = readPackDryRun();
const packageFiles = packageInfo.files ?? [];

// Собираем ошибки всех проверок, чтобы пользователь получил полный список проблем за один запуск.
const errors = [...validatePackageFiles(packageFiles), ...validateIndexSize()];

if (errors.length > 0) {
  console.error('Package validation failed:');

  for (const error of errors) {
    console.error(`- ${error}`);
  }

  process.exit(1);
}

const indexSize = statSync(distIndexPath).size;

console.log(
  `Package validation passed: ${packageFiles.length} files, ${formatBytes(packageInfo.unpackedSize ?? 0)} unpacked.`,
);
console.log(`dist/index.js size: ${formatBytes(indexSize)} / ${formatBytes(maxIndexSizeBytes)}.`);
