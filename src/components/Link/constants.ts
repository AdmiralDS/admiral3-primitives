import { textStyles } from '@admiral-ds/admiral3-tokens';
import type { CSSObject } from 'styled-components';

export const LINK_APPEARANCES = ['colored', 'neutral'] as const;
export const LINK_DIMENSIONS = ['m', 's', 'xs'] as const;

export const LINK_DIMENSION_PARAMETERS: Record<
  (typeof LINK_DIMENSIONS)[number],
  { iconSize: number; gap: number; typography: CSSObject }
> = {
  m: { iconSize: 24, gap: 8, typography: textStyles.body.body1Long },
  s: { iconSize: 20, gap: 6, typography: textStyles.body.body2Long },
  xs: { iconSize: 16, gap: 6, typography: textStyles.caption.caption1 },
};
