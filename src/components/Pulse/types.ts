import type { css } from 'styled-components';

export type PulseDimension = 'l' | 'm' | 's';
export type PulseStatus = 'info' | 'danger' | 'success' | 'warning';

export interface PulseProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Размер компонента */
  dimension?: PulseDimension;
  /** Статус компонента (цветовое окрашивание).
   * Можно задать кастомный цвет через объект со свойством background */
  status?: PulseStatus | { background?: string };
  /** Позволяет добавлять  миксин созданный с помощью styled css  */
  cssMixin?: ReturnType<typeof css>;
  /** Позволяет отключить мигание компонента*/
  dismiss?: boolean;
}
