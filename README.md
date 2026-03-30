# @admiral-ds/admiral3-primitives

React-примитивы для дизайн-системы Admiral 3.0.

Пакет содержит базовые UI-блоки, экспортируемые через единый публичный entry point.

## Установка

```shell
npm install @admiral-ds/admiral3-primitives
```

Peer dependencies:

- `react`
- `react-dom`
- `styled-components`

Если они ещё не установлены:

```shell
npm install react react-dom styled-components
```

## Использование

```tsx
import { ExampleComponent } from '@admiral-ds/admiral3-primitives';

export function Demo() {
  return <ExampleComponent>Ready</ExampleComponent>;
}
```

## Экспорт

Используйте импорт из корня пакета:

```tsx
import { ExampleComponent } from '@admiral-ds/admiral3-primitives';
```

Внутренние deep imports не являются частью публичного API.

## Разработка

Правила разработки и workflow репозитория описаны отдельно:

- [Соглашения по внесению изменений](CONTRIBUTING.md)
- [Руководство по тестированию](tests/TESTING_README.md)

## Лицензия

См. [LICENSE](LICENSE).
