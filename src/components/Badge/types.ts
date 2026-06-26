import type { HTMLAttributes } from 'react';

import type { BADGE_APPEARANCES, BADGE_DIMENSIONS } from './constants';

/** Цветовой вариант Badge. */
export type BadgeAppearance = (typeof BADGE_APPEARANCES)[number];

/** Пользовательские цвета Badge. */
export interface BadgeColorConfig {
  /** Цвет фона Badge. */
  backgroundColor: string;
  /** Цвет текста Badge. */
  textColor: string;
}

/** Размер Badge. */
export type BadgeDimension = (typeof BADGE_DIMENSIONS)[number];

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  /** Цветовой вариант Badge или пользовательские цвета. Значение по умолчанию 'neutral1'. */
  appearance?: BadgeAppearance | BadgeColorConfig;
  /** Размер Badge. Значение по умолчанию 'm'. */
  dimension?: BadgeDimension;
}

export interface StyledBadgeProps {
  $appearance: BadgeAppearance;
  $colorConfig?: BadgeColorConfig;
  $dimension: BadgeDimension;
}
