export const SPINNER_ROOT_DATA_ATTRIBUTE = 'data-spinner';

export const SPINNER_DIMENSIONS = ['XS', 'S', 'M', 'L', 'XL'] as const;

export const SPINNER_COLORS = ['colored', 'neutral', 'staticWhite', 'inverted'] as const;

export const SPINNER_SIZE_PARAMETERS: Record<(typeof SPINNER_DIMENSIONS)[number], number> = {
  XS: 16,
  S: 20,
  M: 24,
  L: 48,
  XL: 64,
};
