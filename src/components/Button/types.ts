import type { BUTTON_APPEARANCES, BUTTON_DIMENSIONS, BUTTON_COLOR_MODES } from './constants';

/** Цветовой вариант Button. */
export type ButtonAppearance = (typeof BUTTON_APPEARANCES)[number];
/** Размер Button. */
export type ButtonDimension = (typeof BUTTON_DIMENSIONS)[number];
/** Режим цветового окрашивания Button. */
export type ButtonColorMode = (typeof BUTTON_COLOR_MODES)[number];

/** Пользовательский цвет фона Button. */
export interface BackgroundColorConfig {
  /** Базовый цвет фона Button. */
  rest: string;
  /** Цвет фона Button в состоянии hover. */
  hover: string;
  /** Цвет фона Button в состоянии press. */
  press: string;
}

/** Пользовательские цвета Button.
 *
 * В состоянии disabled кнопка по умолчанию окрашивается согласно appearance,
 * если не заданы другие цвета через {color}Disabled свойства в colorConfig.
 **/
export interface ButtonColorConfig {
  /** Цвет фона Button. */
  backgroundColor?: BackgroundColorConfig;
  /** Цвет фона Button в disabled состоянии. */
  backgroundColorDisabled?: string;
  /** Цвет текста/иконок Button. */
  textColor?: string;
  /** Цвет текста/иконок Button в disabled состоянии. */
  textColorDisabled?: string;
  /** Цвет обводки Button. */
  borderColor?: string;
  /** Цвет обводки Button в disabled. */
  borderColorDisabled?: string;
}

/** Пользовательские цвета Button.
 *
 * В состоянии disabled кнопка по умолчанию окрашивается согласно appearance,
 * если не заданы другие цвета через {color}Disabled свойства в colorConfig.
 *
 * В режимах colorMode='neutral' или colorMode='staticWhite' кнопка
 * по умолчанию окрашивается согласно appearance, если не заданы другие
 * цвета через {color}Neutral и {color}StaticWhite свойства в colorConfig.
 **/
// export interface ButtonColorConfig {
//   /** Цвет фона Button. */
//   backgroundColor: BackgroundColorConfig;
//   /** Цвет фона Button при colorMode равном neutral. */
//   backgroundColorNeutral?: BackgroundColorConfig;
//   /** Цвет фона Button при colorMode равном staticWhite. */
//   backgroundColorStaticWhite?: BackgroundColorConfig;
//   /** Цвет фона Button в disabled состоянии. */
//   backgroundColorDisabled?: string;
//   /** Цвет фона Button в disabled состоянии при colorMode равном neutral. */
//   backgroundColorDisabledNeutral?: string;
//   /** Цвет фона Button в disabled состоянии при colorMode равном staticWhite. */
//   backgroundColorDisabledStaticWhite?: string;
//   /** Цвет текста/иконок Button. */
//   textColor: string;
//   /** Цвет текста/иконок Button при colorMode равном neutral. */
//   textColorNeutral?: string;
//   /** Цвет текста/иконок Button при colorMode равном staticWhite. */
//   textColorStaticWhite?: string;
//   /** Цвет текста/иконок Button в disabled состоянии. */
//   textColorDisabled?: string;
//   /** Цвет текста/иконок Button в disabled состоянии при colorMode равном neutral. */
//   textColorDisabledNeutral?: string;
//   /** Цвет текста/иконок Button в disabled состоянии при colorMode равном staticWhite. */
//   textColorDisabledStaticWhite?: string;
//   /** Цвет обводки Button. */
//   borderColor?: string;
//   /** Цвет обводки Button при colorMode равном neutral. */
//   borderColorNeutral?: string;
//   /** Цвет обводки Button при colorMode равном staticWhite. */
//   borderColorStaticWhite?: string;
//   /** Цвет обводки Button в disabled состоянии. */
//   borderColorDisable?: string;
//   /** Цвет обводки Button в disabled состоянии при colorMode равном neutral. */
//   borderColorDisabledNeutral?: string;
//   /** Цвет обводки Button в disabled состоянии при colorMode равном staticWhite. */
//   borderColorDisabledStaticWhite?: string;
// }

export interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Размер Button. Значение по умолчанию 'm'. */
  dimension?: ButtonDimension;
  /** Пользовательские цвета Button. */
  colorConfig?: ButtonColorConfig;
  /** Содержимое компонента. */
  children?: React.ReactNode;
}

export interface SolidGhostAppearanceProps extends BaseButtonProps {
  /** Цветовой вариант Button. */
  appearance?: Extract<ButtonAppearance, 'solid' | 'ghost'>;
  /** Режим цветового окрашивания Button. Значение по умолчанию 'colored'. */
  colorMode?: Exclude<ButtonColorMode, 'staticWhite'>;
}

export interface FlatOutlineAppearanceProps extends BaseButtonProps {
  /** Цветовой вариант Button. */
  appearance?: Extract<ButtonAppearance, 'flat' | 'outline'>;
  /** Режим цветового окрашивания Button. Значение по умолчанию 'colored'. */
  colorMode?: ButtonColorMode;
}

export type ButtonProps = SolidGhostAppearanceProps | FlatOutlineAppearanceProps;

export interface StyledButtonProps {
  $appearance: ButtonAppearance;
  $colorMode: ButtonColorMode;
  $dimension: ButtonDimension;
  $colorConfig?: ButtonColorConfig;
  // $displayAsDisabled?: boolean;
  // $displayAsSquare?: boolean;
  // $loading?: boolean;
  // $skeleton?: boolean;
  // $buttonCssMixin?: ReturnType<typeof css>;
}
