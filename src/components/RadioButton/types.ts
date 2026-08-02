import type { RADIO_BUTTON_DIMENSIONS } from './constants';

export type RadioButtonDimension = (typeof RADIO_BUTTON_DIMENSIONS)[number];

export interface RadioButtonProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Контролируемое состояние выбора RadioButton. */
  checked?: boolean;
  /** Начальное состояние выбора RadioButton. */
  defaultChecked?: boolean;
  /** Размер RadioButton. Значение по умолчанию 'm'. */
  dimension?: RadioButtonDimension;
  /** Состояние ошибки. */
  error?: boolean;
  /** Отключает RadioButton и запрещает взаимодействие с ним. */
  disabled?: boolean;
  /** Запрещает изменение значения пользователем, сохраняя компонент доступным для фокуса. */
  readOnly?: boolean;
  /** Основная подпись RadioButton. */
  children?: React.ReactNode;
  /** Дополнительный текст под основной подписью. */
  extraText?: React.ReactNode;
}

export interface StyledRadioButtonProps {
  $dimension: RadioButtonDimension;
  $disabled: boolean;
  $readOnly: boolean;
}
