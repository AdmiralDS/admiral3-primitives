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

/** Пользовательские цвета Button. */
export interface ButtonColorConfig {
  /** Цвет фона Button. */
  backgroundColor: BackgroundColorConfig;
  /** Цвет текста/иконок Button. */
  textColor: string;
  /** Цвет обводки Button. */
  borderColor?: string;
}

export interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: ButtonAppearance | ButtonColorConfig;
  /** Размер Button. Значение по умолчанию 'm'. */
  dimension?: ButtonDimension;
  /** Пользовательские цвета Button. */
  colorConfig?: ButtonColorConfig;
  /** Содержимое компонента. */
  children?: React.ReactNode;
}

/** Почему тоже самое не работает с Omit вместо Exclude? */
export interface SolidGhostAppearanceProps extends BaseButtonProps {
  /** Цветовой вариант Button. */
  appearance?: 'solid' | 'ghost';
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
  $dimension: ButtonDimension;
  $colorConfig?: ButtonColorConfig;
  // $displayAsDisabled?: boolean;
  // $displayAsSquare?: boolean;
  // $loading?: boolean;
  // $skeleton?: boolean;
  // $buttonCssMixin?: ReturnType<typeof css>;
}
