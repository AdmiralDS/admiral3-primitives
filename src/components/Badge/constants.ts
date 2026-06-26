export const BADGE_DIMENSIONS = ['s', 'm'] as const;

export const BADGE_APPEARANCES = [
  'neutral1',
  'neutral1Inactive',
  'neutral1Disable',
  'neutral2',
  'neutral2Inactive',
  'neutral2Disable',
  'neutral3',
  'info',
  'warning',
  'success',
  'error',
  'whiteStatic',
] as const;

export const BADGE_DIMENSION_PARAMETERS: Record<
  (typeof BADGE_DIMENSIONS)[number],
  { size: number; horizontalPadding: number }
> = {
  s: {
    size: 16,
    horizontalPadding: 4,
  },
  m: {
    size: 20,
    horizontalPadding: 6,
  },
};
