export const BUTTON_DIMENSIONS = ['l', 'm', 's', 'xs'] as const;

export const BUTTON_APPEARANCES = ['solid', 'outline', 'flat', 'ghost'] as const;

export const BUTTON_COLOR_MODES = ['colored', 'neutral', 'staticWhite'] as const;

export const BUTTON_DIMENSION_PARAMETERS: Record<(typeof BUTTON_DIMENSIONS)[number], number> = {
  l: 48,
  m: 40,
  s: 32,
  xs: 24,
};
