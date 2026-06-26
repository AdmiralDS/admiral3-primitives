import { forwardRef } from 'react';

import { StyledBadge } from './style';
import type { BadgeProps } from './types';

const DEFAULT_APPEARANCE = 'neutral1';

/** Badge дополняет другие компоненты и показывает количественные зачения. */
export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ appearance = DEFAULT_APPEARANCE, dimension = 'm', ...props }, ref) => {
    const isCustomAppearance = typeof appearance === 'object';
    const presetAppearance = isCustomAppearance ? DEFAULT_APPEARANCE : appearance;
    const colorConfig = isCustomAppearance ? appearance : undefined;

    return (
      <StyledBadge
        ref={ref}
        $appearance={presetAppearance}
        $colorConfig={colorConfig}
        $dimension={dimension}
        {...props}
      />
    );
  },
);

Badge.displayName = 'Badge';
