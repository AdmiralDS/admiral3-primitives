import type { HTMLAttributes } from 'react';

import type { css } from 'styled-components';

import type { SPINNER_DIMENSIONS, SPINNER_APPEARANCES } from './constants';

export type SpinnerDimension = (typeof SPINNER_DIMENSIONS)[number];
export type SpinnerAppearance = (typeof SPINNER_APPEARANCES)[number];

/** Пользовательский цвет Spinner. */
export interface SpinnerColorConfig {
  backgroundColor: string;
}

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  /** Размер Spinner. Значение по умолчанию 'm'. */
  dimension?: SpinnerDimension;
  /** Цветовой вариант Spinner или пользовательские цвета. Значение по умолчанию 'colored'. */
  appearance?: SpinnerAppearance | SpinnerColorConfig;
  /** CSS миксин svg иконки */
  svgCssMixin?: ReturnType<typeof css>;
}

export interface StyledSpinnerProps {
  $dimension: SpinnerDimension;
  $svgCssMixin?: ReturnType<typeof css>;
}

export interface StyledSpinnerIconProps {
  $appearance: SpinnerAppearance;
  $colorConfig?: SpinnerColorConfig;
}
