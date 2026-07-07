import styled, { keyframes } from 'styled-components';

import { SPINNER_DIMENSION_PARAMETERS } from './constants';
import SpinnerIcon from './SpinnerIcon.svg?react';
import type { SpinnerAppearance, StyledSpinnerProps, StyledSpinnerIconProps } from './types';
import { cssToken } from '../../theme/cssToken';
import type { CssToken } from '../../theme/cssToken';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const spinnerBackgroundColors: Record<SpinnerAppearance, CssToken> = {
  neutral: cssToken('--admiral-color-neutral-text-1-rest', (theme) => theme.color.neutral.text._1.rest),
  colored: cssToken('--admiral-color-primary-text-1-rest', (theme) => theme.color.primary.text._1.rest),
  staticWhite: cssToken(
    '--admiral-color-neutral-text-static-white-1',
    (theme) => theme.color.neutral.text.staticWhite._1,
  ),
  inverted: cssToken('--admiral-color-neutral-text-inverted-rest', (theme) => theme.color.neutral.text.inverted.rest),
};

export const StyledSpinnerIcon = styled(SpinnerIcon)<StyledSpinnerIconProps>`
  path {
    fill: ${(props) => props.$colorConfig?.backgroundColor ?? spinnerBackgroundColors[props.$appearance](props)};
  }
  width: 100%;
  height: 100%;
  animation: ${spin} 1s linear infinite;

  /** styled-components поддерживает container query начиная с v6 */
  @container (min-width: 64px) {
    path:not([data-dimension='xl']) {
      display: none;
    }
  }
  @container (max-width: 48px) and (min-width: 25px) {
    path:not([data-dimension='l']) {
      display: none;
    }
  }
  @container (max-width: 24px) and (min-width: 21px) {
    path:not([data-dimension='m']) {
      display: none;
    }
  }
  @container (max-width: 20px) and (min-width: 17px) {
    path:not([data-dimension='s']) {
      display: none;
    }
  }
  @container (max-width: 16px) {
    path:not([data-dimension='xs']) {
      display: none;
    }
  }
`;

export const StyledSpinner = styled.div.attrs<
  StyledSpinnerProps & {
    'data-appearance': string;
    'data-dimension': string;
  }
>((props) => ({
  'data-appearance': props.$colorConfig ? 'custom' : props.$appearance,
  'data-dimension': String(props.$dimension),
}))<StyledSpinnerProps>`
  position: relative;
  container-type: inline-size;
  height: ${({ $dimension }) => SPINNER_DIMENSION_PARAMETERS[$dimension]}px;
  width: ${({ $dimension }) => SPINNER_DIMENSION_PARAMETERS[$dimension]}px;
`;
