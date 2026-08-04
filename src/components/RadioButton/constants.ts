import { textStyles } from '@admiral-ds/admiral3-tokens';
import type { CSSObject } from 'styled-components';

export const RADIO_BUTTON_DIMENSIONS = ['m', 's', 'xs'] as const;

interface RadioButtonDimensionParameters {
  controlSize: number;
  controlMarginBlock: number;
  gap: number;
  checkedBorderWidth: number;
  typography: CSSObject;
}

export const RADIO_BUTTON_DIMENSION_PARAMETERS: Record<
  (typeof RADIO_BUTTON_DIMENSIONS)[number],
  RadioButtonDimensionParameters
> = {
  m: {
    controlSize: 20,
    controlMarginBlock: 2,
    gap: 10,
    checkedBorderWidth: 5,
    typography: textStyles.body.body1Long,
  },
  s: {
    controlSize: 16,
    controlMarginBlock: 2,
    gap: 8,
    checkedBorderWidth: 4,
    typography: textStyles.body.body2Long,
  },
  xs: {
    controlSize: 14,
    controlMarginBlock: 1,
    gap: 8,
    checkedBorderWidth: 3,
    typography: textStyles.caption.caption1,
  },
};
