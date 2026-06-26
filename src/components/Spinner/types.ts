import type { HTMLAttributes } from 'react';

import type { css } from 'styled-components';

import type { SPINNER_DIMENSIONS, SPINNER_COLORS } from './constants';

export type SpinnerDimension = (typeof SPINNER_DIMENSIONS)[number];
export type SpinnerColor = (typeof SPINNER_COLORS)[number];

/** Пользовательский цвет Spinner. */
export interface SpinnerColorConfig {
  backgroundColor: string;
}

export interface SpinnerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
  /** Размер Spinner. Значение по умолчанию 'XL'. */
  dimension?: SpinnerDimension;
  /** Цвет Spinner. */
  color?: SpinnerColor | SpinnerColorConfig;
  /** Миксин svg иконки */
  svgMixin?: ReturnType<typeof css>;
}

export interface StyledSpinnerProps {
  $dimension: SpinnerDimension;
  $svgMixin?: ReturnType<typeof css>;
}

export interface StyledSpinnerIconProps {
  $color: SpinnerColor;
  $colorConfig?: SpinnerColorConfig;
}
