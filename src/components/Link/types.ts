import type { AnchorHTMLAttributes, ReactNode } from 'react';

import type { LINK_APPEARANCES, LINK_DIMENSIONS } from './constants';

export type LinkAppearance = (typeof LINK_APPEARANCES)[number];
export type LinkDimension = (typeof LINK_DIMENSIONS)[number];

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Цветовой вариант Link. Значение по умолчанию 'colored'. */
  appearance?: LinkAppearance;
  /** Размер Link. Значение по умолчанию 'm'. */
  dimension?: LinkDimension;
  /** Отключает переход и интерактивность Link. */
  disabled?: boolean;
  /** Содержимое компонента. */
  children?: ReactNode;
}

export interface StyledLinkProps {
  $appearance: LinkAppearance;
  $dimension: LinkDimension;
  $disabled: boolean;
}
