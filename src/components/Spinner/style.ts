import styled, { keyframes } from 'styled-components';

import { SPINNER_SIZE_PARAMETERS } from './constants';
import Spinner from './Subtract.svg?react';
import type { SpinnerColor, StyledSpinnerProps, StyledSpinnerIconProps } from './types';
import { cssToken } from '../../theme/cssToken';
import type { CssToken } from '../../theme/cssToken';

export const StyledSpinner = styled.div<StyledSpinnerProps>`
  position: relative;
  container-type: inline-size;
  height: ${({ $dimension }) => SPINNER_SIZE_PARAMETERS[$dimension]}px;
  width: ${({ $dimension }) => SPINNER_SIZE_PARAMETERS[$dimension]}px;

  & svg {
    ${(p) => p.$svgMixin || ''}
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const spinnerBackgroundColors: Record<SpinnerColor, CssToken> = {
  neutral: cssToken('--admiral-color-text-neutral-text1-rest', (theme) => theme.color.text.neutral.text1.rest),
  colored: cssToken('--admiral-color-text-primary-text1-rest', (theme) => theme.color.text.primary.text1.rest),
  staticWhite: cssToken(
    '--admiral-color-text-neutral-static-white-1',
    (theme) => theme.color.text.neutral.staticWhite[1],
  ),
  inverted: cssToken('--admiral-color-text-neutral-inverted-rest', (theme) => theme.color.text.neutral.inverted.rest),
};

export const StyledSpinnerIcon = styled(Spinner)<StyledSpinnerIconProps>`
  animation: ${spin} 1s linear infinite;
  /** styled-components поддерживает container query начиная с v6 */
  @container (min-width: 64px) {
    path.spinner-icon:not([data-dimension='xl']) {
      display: none;
    }
  }
  @container (max-width: 48px) and (min-width: 25px) {
    path.spinner-icon:not([data-dimension='l']) {
      display: none;
    }
  }
  @container (max-width: 24px) and (min-width: 21px) {
    path.spinner-icon:not([data-dimension='m']) {
      display: none;
    }
  }
  @container (max-width: 20px) and (min-width: 17px) {
    path.spinner-icon:not([data-dimension='ms']) {
      display: none;
    }
  }
  @container (max-width: 16px) {
    path.spinner-icon:not([data-dimension='s']) {
      display: none;
    }
  }

  path {
    fill: ${(props) => props.$colorConfig?.backgroundColor ?? spinnerBackgroundColors[props.$color](props)};
  }
  width: 100%;
  height: 100%;
`;

/** TODO:
 * 2) tests
 * 3) storybook + playground
 * 4) При изменениях в svg, playground нужно перезапускать
 * 6) подумать над импортом иконок
 */
