import styled from 'styled-components';

import { BADGE_DOT_DIMENSION_PARAMETERS } from './constants';
import type { BadgeDotAppearance, StyledBadgeDotProps } from './types';
import { cssToken } from '../../theme/cssToken';
import type { CssToken } from '../../theme/cssToken';

export const badgeDotBackgroundColors: Record<BadgeDotAppearance, CssToken> = {
  neutral: cssToken('--admiral-color-base-neutral-base4-rest', (theme) => theme.color.base.neutral.base4.rest),
  info: cssToken('--admiral-color-base-primary-base1-rest', (theme) => theme.color.base.primary.base1.rest),
  error: cssToken('--admiral-color-base-status-error-base1-rest', (theme) => theme.color.base.status.error.base1.rest),
  success: cssToken(
    '--admiral-color-base-status-success-base1-rest',
    (theme) => theme.color.base.status.success.base1.rest,
  ),
  warning: cssToken(
    '--admiral-color-base-status-warning-base1-rest',
    (theme) => theme.color.base.status.warning.base1.rest,
  ),
  attention: cssToken(
    '--admiral-color-base-status-attention-base1-rest',
    (theme) => theme.color.base.status.attention.base1.rest,
  ),
};

export const StyledBadgeDot = styled.div.attrs<
  StyledBadgeDotProps & {
    'data-appearance': string;
    'data-dimension': string;
  }
>((props) => ({
  'data-appearance': props.$colorConfig ? 'custom' : props.$appearance,
  'data-dimension': String(props.$dimension),
}))<StyledBadgeDotProps>`
  position: relative;
  box-sizing: border-box;
  background-color: ${(props) =>
    props.$colorConfig?.backgroundColor ?? badgeDotBackgroundColors[props.$appearance](props)};
  width: ${({ $dimension }) => BADGE_DOT_DIMENSION_PARAMETERS[$dimension]}px;
  height: ${({ $dimension }) => BADGE_DOT_DIMENSION_PARAMETERS[$dimension]}px;
  border-radius: 50%;
`;
