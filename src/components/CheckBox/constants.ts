import type { CheckBoxDimension } from './types';

export const CHECK_BOX_DIMENSIONS = ['m', 's', 'xs'] as const;

export const CHECK_BOX_DIMENSION_PARAMETERS: Record<
  CheckBoxDimension,
  {
    controlSize: number;
    containerHeight: number;
  }
> = {
  m: {
    controlSize: 20,
    containerHeight: 24,
  },
  s: {
    controlSize: 16,
    containerHeight: 20,
  },
  xs: {
    controlSize: 14,
    containerHeight: 16,
  },
};

export const CHECK_BOX_ROOT_DATA_ATTRIBUTE = 'data-admiral-check-box' as const;
