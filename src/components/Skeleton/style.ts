import styled from 'styled-components';

import { skeletonAnimationMixin } from './skeletonAnimation';
import type { StyledSkeletonProps } from './types';

export const StyledSkeleton = styled.div<StyledSkeletonProps>`
  height: ${({ $height }) => (typeof $height === 'string' ? $height : `${$height}px`)};
  width: ${({ $width }) => (typeof $width === 'string' ? $width : `${$width}px`)};
  border-radius: ${({ $borderRadius }) => (typeof $borderRadius === 'string' ? $borderRadius : `${$borderRadius}px`)};
  ${skeletonAnimationMixin}
`;
