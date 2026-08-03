import type { CheckBoxDimension } from './types';

export const CHECK_BOX_DIMENSIONS = ['m', 's', 'xs'] as const;

export const CHECK_BOX_DIMENSION_PARAMETERS: Record<
  CheckBoxDimension,
  {
    controlSize: number;
    containerHeight: number;
    labelGap: number;
  }
> = {
  m: {
    controlSize: 20,
    containerHeight: 24,
    labelGap: 10,
  },
  s: {
    controlSize: 16,
    containerHeight: 20,
    labelGap: 8,
  },
  xs: {
    controlSize: 14,
    containerHeight: 16,
    labelGap: 8,
  },
};

export const CHECK_BOX_ROOT_DATA_ATTRIBUTE = 'data-admiral-check-box' as const;
