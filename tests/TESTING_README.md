## Общая информация

В проекте используются два контура тестирования:

1. `Vitest`

- используется для unit-тестов компонентов и утилит;
- unit-тесты должны лежать рядом с исходниками компонента.

2. `Playwright`

- используется для e2e и smoke-проверок через internal playground;
- e2e-тесты должны лежать в папке `tests/e2e`.

## Обязательная структура тестов

Для каждого компонента должна существовать своя тестовая область.

Обязательные правила:

1. Unit-тесты компонента должны лежать в папке самого компонента.
2. E2E-тесты компонента должны лежать в отдельной папке внутри `tests/e2e`, названной по имени компонента.
3. Нельзя складывать e2e-спеки разных компонентов в корень `tests/e2e`.
4. Нельзя хранить тесты компонента в папке другого компонента.

Эталонная структура:

```text
src/components/ExampleComponent/ExampleComponent.test.tsx
src/components/ExampleComponent/stories/ExampleComponent.stories.tsx
src/components/ExampleComponent/stories/ExampleComponentPlayground.template.tsx
playground/scenarios/example-component.tsx
tests/e2e/ExampleComponent/example-component.spec.ts
```

## Обязательная структура Storybook stories

Если компонент покрывается через Storybook, stories должны быть организованы по следующему правилу:

1. В папке компонента должна существовать папка `stories`.
2. В папке `stories` должен быть один входной CSF-файл `ComponentName.stories.tsx`.
3. Входной `*.stories.tsx` файл должен оставаться тонким: в нем должен находиться `meta` и экспорт историй.
4. Переиспользуемые `render`, `args`, template-конфиги и вспомогательные части stories должны выноситься в отдельные файлы внутри той же папки `stories`.
5. Дополнительные template-файлы не должны называться `*.stories.tsx`, чтобы Storybook не индексировал их как отдельные entry points.

Эталонный пример:

```text
src/components/ExampleComponent/stories/ExampleComponent.stories.tsx
src/components/ExampleComponent/stories/ExampleComponentPlayground.template.tsx
src/components/ExampleComponent/stories/ExampleComponentDirty.template.tsx
```

`*.template.tsx` могут использоваться по-разному:

- публичные templates могут импортироваться в `*.stories.tsx` и попадать в Storybook;
- внутренние templates могут не импортироваться в `*.stories.tsx` и использоваться только в internal playground для e2e.

Общие вспомогательные сущности для e2e должны храниться в двух файлах:

- `utils.ts` - для общих helper-функций;
- `constants.ts` - для общих констант.

Если для e2e-тестов понадобятся новые общие helper-функции или константы, их нужно добавлять именно в эти файлы, а не дублировать по компонентным папкам.

## Установка браузеров для Playwright

```shell
npx playwright install --with-deps
```

Дополнительная информация есть в официальной документации:
https://playwright.dev/docs/browsers

## Запуск тестов

### Playwright

```shell
npm run test:e2e
```

Запуск в UI-режиме:

```shell
npm run test:e2e-ui
```

### Vitest

Одноразовый прогон:

```shell
npm run test
```

Режим наблюдения:

```shell
npm run test:watch
```

Дополнительно доступна явная команда:

```shell
npm run test:run
```

## Workers

Количество workers для Playwright можно настроить через переменную `PW_WORKERS` в `.env` в корне проекта.

Пример:

```dotenv
PW_WORKERS='3'
```

По умолчанию используется `1`.

## Подход к e2e через internal playground

Для e2e используется отдельный internal playground:

1. Playground собирается через `npm run build:playground`.
2. Готовая сборка поднимается статически через `npm run serve:playground`.
3. Playwright ходит в сценарии playground по query-параметру `scenario`.

Storybook при этом остаётся витриной компонентов, docs-слоем и местом для a11y-проверок, но не рантаймом для e2e.

### Как добавлять сценарии в playground

Структура сценариев в `playground/scenarios` разделена по компонентам.

Текущий паттерн:

```text
playground/scenarios/
  example-component.tsx
  index.ts
```

Правила:

1. Для каждого компонента или группы связанных сценариев нужно заводить отдельный файл в `playground/scenarios`.
2. `playground/scenarios/index.ts` должен оставаться реестром и только собирать общий массив `playgroundScenarios`.
3. В файл сценариев нужно импортировать нужные templates и описывать массив сценариев компонента.
4. `id` сценария должен быть уникальным и стабильным, потому что именно он используется в `?scenario=...` и в Playwright-тестах.
5. `title` сценария используется в левом меню playground.

Пример:

```tsx
export const exampleComponentScenarios: PlaygroundScenario[] = [
  {
    id: 'example-component/default',
    title: 'ExampleComponent Default',
    render: () => <ExampleComponentPlaygroundTemplate {...defaultArgs} />,
  },
];
```

После добавления нового сценария нужно:

1. Подключить файл сценариев в `playground/scenarios/index.ts`.
2. Добавить или обновить e2e-спеку в `tests/e2e/...`, если сценарий должен покрываться Playwright.

## Рекомендации

Каждый тест должен быть независимым:

1. Не зависеть от порядка выполнения.
2. Не делить состояние с другими тестами.
3. Самостоятельно подготавливать нужные данные.
4. Не опираться на побочные эффекты других сценариев.

Каждый тест должен проверять одну конкретную вещь:

1. Если тест падает, должно быть сразу понятно, что сломалось.
2. Не стоит объединять в один сценарий много разных проверок без необходимости.

## Вспомогательные функции

Общие helper-функции для e2e находятся в `tests/e2e/utils.ts`.

Описание назначения и правил использования helper-функций должно поддерживаться в документации прямо рядом с их реализацией, в самом файле `utils.ts`.

## Константы

Общие константы для e2e находятся в `tests/e2e/constants.ts`.

Описание констант должно поддерживаться в документации прямо рядом с их объявлениями, в самом файле `constants.ts`.

Перед добавлением новых констант стоит проверять, что они действительно используются текущими тестами, а не добавляются "на будущее".
