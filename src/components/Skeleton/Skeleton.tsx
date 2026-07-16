import { forwardRef } from 'react';

import { StyledSkeleton } from './style';
import type { SkeletonProps } from './types';

/** Скелетон представляет собой упрощенную (схематичную) версию компонента,
 * появляется при начале загрузки страницы и исчезает после ее полной загрузки.
 * Использование скелетона и его анимации дает пользователю понять, что все работает хорошо,
 * просто требуется какое-то время для загрузки контента. */
export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ height = '100%', width = '100%', borderRadius = 0, ...props }, ref) => {
    return <StyledSkeleton ref={ref} $height={height} $width={width} $borderRadius={borderRadius} {...props} />;
  },
);

Skeleton.displayName = 'Skeleton';
