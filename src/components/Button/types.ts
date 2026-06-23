import type { HTMLAttributes, ReactNode } from 'react';

import type { BUTTON_APPEARANCES, BUTTON_DIMENSIONS, BUTTON_COLORS } from './constants';

/** Цветовой вариант Button. */
export type ButtonAppearance = (typeof BUTTON_APPEARANCES)[number];
/** Размер Button. */
export type ButtonDimension = (typeof BUTTON_DIMENSIONS)[number];
/** Настройка color (режима цветового окрашивания) для Button. */
export type ButtonColor = (typeof BUTTON_COLORS)[number];

/** Пользовательские цвета Button. */
export interface ButtonColorConfig {
  /** Цвет фона Button. */
  backgroundColor: string;
  /** Цвет обводки Button. */
  borderColor: string;
  /** Цвет текста/иконок Button. */
  textColor: string;
}

// type ButtonSolidGhostAppearance = {
//   /** Цветовой вариант Button или пользовательские цвета. Значение по умолчанию 'solid'. */
//   appearance?: Extract<ButtonAppearance, 'solid' | 'ghost'>;
//   /** Режим цветового окрашивания Button. Значение по умолчанию 'colored'. */
//   color?: Omit<ButtonColor, 'whiteStatic'>;
// }

// type ButtonOutlineFlatAppearance = {
//   /** Цветовой вариант Button или пользовательские цвета. Значение по умолчанию 'solid'. */
//   appearance?: Extract<ButtonAppearance, 'outline' | 'flat'>;
//   /** Режим цветового окрашивания Button. Значение по умолчанию 'colored'. */
//   color?: ButtonColor;
// }

// type ButtonAppearanceColorMap = ButtonOutlineFlatAppearance | ButtonSolidGhostAppearance;

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** Цветовой вариант Button или пользовательские цвета. Значение по умолчанию 'solid'. */
  appearance?: ButtonAppearance;
  /** Размер Button. Значение по умолчанию 'L'. */
  dimension?: ButtonDimension;
  /** Режим цветового окрашивания Button. Значение по умолчанию 'colored'. */
  // color?: ButtonColor;
  /** Содержимое компонента. */
  children?: ReactNode;
}

export interface StyledButtonProps {
  $appearance: ButtonAppearance;
  $dimension: ButtonDimension;
  // $displayAsDisabled?: boolean;
  // $displayAsSquare?: boolean;
  // $loading?: boolean;
  // $skeleton?: boolean;
  // $buttonCssMixin?: ReturnType<typeof css>;
}
