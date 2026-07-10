import { forwardRef } from 'react';

import { StyledSkeleton } from './style';
import type { SkeletonProps } from './types';

/** Skeleton primitive component. */
export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ height = '100%', width = '100%', borderRadius = 0, ...props }, ref) => {
    return <StyledSkeleton ref={ref} $height={height} $width={width} $borderRadius={borderRadius} {...props} />;
  },
);

Skeleton.displayName = 'Skeleton';
