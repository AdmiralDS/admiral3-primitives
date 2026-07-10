import type { HTMLAttributes } from 'react';

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /** Высота компонента, по умолчанию 100% */
  height?: string | number;
  /** Ширина компонента, по умолчанию 100% */
  width?: string | number;
  /** Радиус скругления компонента, по умолчанию 0 */
  borderRadius?: string | number;
}

export interface StyledSkeletonProps {
  $height: string | number;
  $width: string | number;
  $borderRadius: string | number;
}
