import styled, { css, keyframes, type ExecutionContext } from 'styled-components';

import type { StyledSkeletonProps } from './types';
import { cssToken } from '../../theme/cssToken';

const skeletonAnimation = (p: ExecutionContext & object) => keyframes`
  0% {
    background-color: ${cssToken('--admiral-color-neutral-base-opacity-rest', (theme) => theme.color.neutral.base.opacity.rest)(p)};
    border-color: ${cssToken('--admiral-color-neutral-base-opacity-rest', (theme) => theme.color.neutral.base.opacity.rest)(p)};
  }
  50% {
    background-color: ${cssToken('--admiral-color-neutral-base-opacity-hover', (theme) => theme.color.neutral.base.opacity.hover)(p)};
    border-color: ${cssToken('--admiral-color-neutral-base-opacity-hover', (theme) => theme.color.neutral.base.opacity.hover)(p)};
  }
  100% {
    background-color: ${cssToken('--admiral-color-neutral-base-opacity-rest', (theme) => theme.color.neutral.base.opacity.rest)(p)};
    border-color: ${cssToken('--admiral-color-neutral-base-opacity-rest', (theme) => theme.color.neutral.base.opacity.rest)(p)};
  }
`;
/** Skeleton-анимация для встраивания в стили отдельных компонентов */
export const skeletonAnimationMixin = css`
  animation: ${(p) => skeletonAnimation(p)} 2s ease infinite;
`;

export const StyledSkeleton = styled.div<StyledSkeletonProps>`
  height: ${({ $height }) => (typeof $height === 'string' ? $height : `${$height}px`)};
  width: ${({ $width }) => (typeof $width === 'string' ? $width : `${$width}px`)};
  border-radius: ${({ $borderRadius }) => (typeof $borderRadius === 'string' ? $borderRadius : `${$borderRadius}px`)};
  ${skeletonAnimationMixin}
`;
