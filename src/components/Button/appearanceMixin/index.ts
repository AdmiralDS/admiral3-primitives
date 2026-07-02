import { css } from 'styled-components';

import { flatAppearanceMixin } from './flatAppearanceMixin';
import { ghostAppearanceMixin } from './ghostAppearanceMixin';
import { solidAppearanceMixin } from './solidAppearanceMixin';
import { outlineAppearanceMixin } from '../appearanceMixins';

export const buttonAppearanceMixin = css`
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
