import { textStyles } from '@admiral-ds/admiral3-tokens';
import type { CSSObject } from 'styled-components';

export const BUTTON_DIMENSIONS = ['l', 'm', 's', 'xs'] as const;

export const BUTTON_APPEARANCES = ['solid', 'outline', 'flat', 'ghost'] as const;

export const BUTTON_COLOR_MODES = ['colored', 'neutral', 'staticWhite'] as const;

export const BUTTON_ICON_DIMENSIONS: Record<(typeof BUTTON_DIMENSIONS)[number], number> = {
  l: 24,
  m: 24,
  s: 20,
  xs: 16,
};

export const BUTTON_GAP: Record<(typeof BUTTON_DIMENSIONS)[number], number> = {
  l: 8,
  m: 8,
  s: 6,
  xs: 6,
};

export const BUTTON_PADDING: Record<(typeof BUTTON_DIMENSIONS)[number], string> = {
  l: '12px 20px',
  m: '8px 16px',
  s: '6px 12px',
  xs: '4px 8px',
};

export const BUTTON_TYPOGRAPHY: Record<(typeof BUTTON_DIMENSIONS)[number], CSSObject> = {
  l: textStyles.button.button1,
  m: textStyles.button.button1,
  s: textStyles.button.button2,
  xs: textStyles.button.button3,
};
