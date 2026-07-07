import styled, { type ExecutionContext, css, keyframes } from 'styled-components';

import { buttonAppearanceMixin } from './appearanceMixin/index';
import { BUTTON_GAP, BUTTON_PADDING, BUTTON_ICON_DIMENSIONS, BUTTON_TYPOGRAPHY } from './constants';
import type { ButtonDimension, StyledButtonProps } from './types';
import { cssToken } from '../../theme/cssToken';

// TODO убрать после слияния со Skeleton
const skeletonAnimation = (p: ExecutionContext & object) => keyframes`
  0% {
    background-color: ${cssToken('--admiral-color-base-neutral-opacity-rest', (theme) => theme.color.base.neutral.opacity.rest)(p)};
  }
  50% {
    background-color: ${cssToken('--admiral-color-base-neutral-opacity-hover', (theme) => theme.color.base.neutral.opacity.hover)(p)};
  }
  100% {
    background-color: ${cssToken('--admiral-color-base-neutral-opacity-rest', (theme) => theme.color.base.neutral.opacity.rest)(p)};
  }
`;
const skeletonAnimationMixin = css`
  animation: ${(p) => skeletonAnimation(p)} 2s ease infinite;
`;

export const SpinnerContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const ButtonContent = styled.div<{ $dimension: ButtonDimension }>`
  vertical-align: top;
  display: inline-flex;
  gap: ${({ $dimension }) => BUTTON_GAP[$dimension]}px;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  max-width: 100%;

  > * {
    display: inline-block;
    flex: 0 1 auto;
    white-space: nowrap;
  }
  > ${SpinnerContainer}, svg {
    flex: 0 0 auto;
  }

  height: ${(p) => BUTTON_ICON_DIMENSIONS[p.$dimension]}px;
  & > svg {
    width: ${(p) => BUTTON_ICON_DIMENSIONS[p.$dimension]}px;
    height: ${(p) => BUTTON_ICON_DIMENSIONS[p.$dimension]}px;
  }
`;

// TODO такое ощущение, что styled.attrs применяет Partial<StyledButtonProps>,
// так как ts не подсвечивает ошибку, если не передан обязательный параметр
// Подумать, в чем дело, может data-атрибуты вынести на уровень компонентов?

export const StyledButton = styled.button.attrs<
  StyledButtonProps & {
    'data-appearance': string;
    'data-dimension': string;
  }
>((props) => ({
  'data-appearance': [
    props.$colorConfig ? 'custom' : props.$appearance,
    props.$displayAsDisabled ? 'disabled' : undefined,
  ]
    .filter((val) => val !== undefined)
    .join(' '),
  'data-dimension': String(props.$dimension),
}))<StyledButtonProps>`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  padding: ${({ $dimension }) => BUTTON_PADDING[$dimension]};
  ${({ $dimension }) => BUTTON_TYPOGRAPHY[$dimension]}
  white-space: nowrap;
  vertical-align: middle;
  appearance: none;
  border: none;
  border-radius: ${(p) =>
    p.$skeleton ? 0 : cssToken('--admiral-radius-by-base-4-medium', (theme) => theme.radius.byBase['4'].medium)};

  ${buttonAppearanceMixin}

  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  ${(p) => (p.$loading || p.$skeleton) && 'pointer-events: none'};

  ${({ $skeleton }) => ($skeleton ? skeletonAnimationMixin : '')};

  ${ButtonContent} {
    ${(p) => ((p.$loading && !p.$loadingPosition) || p.$skeleton ? 'visibility: hidden;' : '')}
  }

  &:focus-visible {
    outline-offset: 2px;
    outline: 2px solid
      ${cssToken('--admiral-color-stroke-primary-stroke1-rest', (theme) => theme.color.stroke.primary.stroke1.rest)};
  }
`;
