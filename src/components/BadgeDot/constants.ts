export const BADGE_DOT_DIMENSIONS = ['xs', 's', 'm', 'l', 'xl', 'xxl'] as const;

export const BADGE_DOT_APPEARANCES = ['neutral', 'info', 'error', 'success', 'warning', 'attention'] as const;

export const BADGE_DOT_DIMENSION_PARAMETERS: Record<(typeof BADGE_DOT_DIMENSIONS)[number], number> = {
  xs: 6,
  s: 8,
  m: 10,
  l: 12,
  xl: 14,
  xxl: 18,
};
