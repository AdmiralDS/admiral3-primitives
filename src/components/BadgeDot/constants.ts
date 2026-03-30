export const BADGE_DOT_DIMENSIONS = ['XS', 'S', 'M', 'L', 'XL', 'XXL'] as const;

export const BADGE_DOT_APPEARANCES = ['neutral', 'info', 'error', 'success', 'warning', 'attention'] as const;

export const BADGE_DOT_SIZE_PARAMETERS: Record<(typeof BADGE_DOT_DIMENSIONS)[number], number> = {
  XS: 6,
  S: 8,
  M: 10,
  L: 12,
  XL: 14,
  XXL: 18,
};
