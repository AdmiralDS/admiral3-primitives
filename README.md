# @admiral-ds/admiral3-primitives

React-примитивы для дизайн-системы Admiral 3.0.

Пакет содержит базовые UI-блоки, экспортируемые через единый публичный entry point.

## Установка

```shell
npm install @admiral-ds/admiral3-primitives
```

Peer dependencies:

- `@admiral-ds/admiral3-icons`
- `@admiral-ds/admiral3-tokens`
- `react`
- `react-dom`
- `styled-components`

Если они ещё не установлены:

```shell
npm install @admiral-ds/admiral3-icons @admiral-ds/admiral3-tokens react react-dom styled-components
```

## Использование

```tsx
import { Badge, BadgeDot } from '@admiral-ds/admiral3-primitives';

export function Demo() {
  return (
    <>
      <Badge appearance="info">5</Badge>
      <BadgeDot appearance="info" dimension="S" aria-label="New item" />
    </>
  );
}
```

Компоненты рассчитаны на подключение CSS custom properties из `@admiral-ds/admiral3-tokens/css`.
`styled-components` используется для описания стилей и как fallback-источник темы.

## Экспорт

Используйте импорт из корня пакета:

```tsx
import { Badge, type BadgeProps } from '@admiral-ds/admiral3-primitives';
```

Публичный API доступен через единый root entry point пакета.

## Разработка

Правила разработки и workflow репозитория описаны отдельно:

- [Соглашения по внесению изменений](CONTRIBUTING.md)
- [Руководство по тестированию](tests/TESTING_README.md)

## Лицензия

См. [LICENSE](LICENSE).
