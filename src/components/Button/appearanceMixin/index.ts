import { css } from 'styled-components';

import type { ButtonColorMode } from '../types';
import { flatAppearanceMixin } from './flatAppearanceMixin';
import { ghostAppearanceMixin } from './ghostAppearanceMixin';
import { outlineAppearanceMixin } from './outlineAppearanceMixin';
import { solidAppearanceMixin } from './solidAppearanceMixin';

export const buttonAppearanceMixin = css<{ $colorMode: ButtonColorMode }>`
  &[data-appearance~='solid'] {
    ${solidAppearanceMixin}
  }
  &[data-appearance~='outline'] {
    ${outlineAppearanceMixin}
  }
  &[data-appearance~='flat'] {
    ${flatAppearanceMixin}
  }
  &[data-appearance~='ghost'] {
    ${ghostAppearanceMixin}
  }
`;
