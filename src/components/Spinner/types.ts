import type { HTMLAttributes, SVGAttributes } from 'react';

import type { SPINNER_DIMENSIONS, SPINNER_APPEARANCES } from './constants';

export type SpinnerDimension = (typeof SPINNER_DIMENSIONS)[number];
export type SpinnerAppearance = (typeof SPINNER_APPEARANCES)[number];

/** Пользовательский цвет Spinner. */
export interface SpinnerColorConfig {
  color: string;
}

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  /** Размер Spinner. Значение по умолчанию 'm'. */
  dimension?: SpinnerDimension;
  /** Цветовой вариант Spinner или пользовательские цвета. Значение по умолчанию 'colored'. */
  appearance?: SpinnerAppearance | SpinnerColorConfig;
}

/**
 * Внутренний декоративный SVG-индикатор загрузки.
 * Не добавляет live-region и предназначен для композиции в других компонентах.
 */
export interface SpinnerIconProps extends SVGAttributes<SVGSVGElement> {
  /** Размер иконки. Значение по умолчанию 'm'. */
  dimension?: SpinnerDimension;
  /** Цветовой вариант иконки или пользовательский цвет. Значение по умолчанию 'colored'. */
  appearance?: SpinnerAppearance | SpinnerColorConfig;
}

export interface StyledSpinnerProps {
  $appearance: SpinnerAppearance;
  $dimension: SpinnerDimension;
  $colorConfig?: SpinnerColorConfig;
}
