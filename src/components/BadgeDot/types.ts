import type { HTMLAttributes } from 'react';

import type { BADGE_DOT_APPEARANCES, BADGE_DOT_DIMENSIONS } from './constants';

/** Цветовой вариант BadgeDot. */
export type BadgeDotAppearance = (typeof BADGE_DOT_APPEARANCES)[number];

/** Пользовательские цвета BadgeDot. */
export interface BadgeDotColorConfig {
  /** Цвет фона BadgeDot. */
  backgroundColor: string;
}

/** Размер BadgeDot. */
export type BadgeDotDimension = (typeof BADGE_DOT_DIMENSIONS)[number];

export interface BadgeDotProps extends HTMLAttributes<HTMLDivElement> {
  /** Цветовой вариант BadgeDot или пользовательские цвета. */
  appearance?: BadgeDotAppearance | BadgeDotColorConfig;
  /** Размер BadgeDot. */
  dimension?: BadgeDotDimension;
}

export interface StyledBadgeDotProps {
  $appearance: BadgeDotAppearance;
  $colorConfig?: BadgeDotColorConfig;
  $dimension: BadgeDotDimension;
}
