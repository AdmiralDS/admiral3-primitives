export const SPINNER_DIMENSIONS = ['xs', 's', 'm', 'l', 'xl'] as const;

export const SPINNER_APPEARANCES = ['colored', 'neutral', 'staticWhite', 'inverted'] as const;

export const SPINNER_DIMENSION_PARAMETERS: Record<(typeof SPINNER_DIMENSIONS)[number], number> = {
  xs: 16,
  s: 20,
  m: 24,
  l: 48,
  xl: 64,
};
