export const BADGE_DIMENSIONS = ['S', 'M'] as const;

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

export const BADGE_SIZE_PARAMETERS: Record<
  (typeof BADGE_DIMENSIONS)[number],
  { size: number; horizontalPadding: number }
> = {
  S: {
    size: 16,
    horizontalPadding: 4,
  },
  M: {
    size: 20,
    horizontalPadding: 6,
  },
};
