import { forwardRef } from 'react';

import { StyledBadgeDot } from './style';
import type { BadgeDotProps } from './types';

const DEFAULT_APPEARANCE = 'neutral';

export const BadgeDot = forwardRef<HTMLDivElement, BadgeDotProps>(
  ({ appearance = DEFAULT_APPEARANCE, dimension = 'S', ...props }, ref) => {
    const ariaHidden = props['aria-hidden'] ?? (props['aria-label'] || props['aria-labelledby'] ? undefined : true);
    const isCustomAppearance = typeof appearance === 'object';
    const presetAppearance = isCustomAppearance ? DEFAULT_APPEARANCE : appearance;
    const colorConfig = isCustomAppearance ? appearance : undefined;

    return (
      <StyledBadgeDot
        ref={ref}
        $appearance={presetAppearance}
        $colorConfig={colorConfig}
        $dimension={dimension}
        aria-hidden={ariaHidden}
        {...props}
      />
    );
  },
);

BadgeDot.displayName = 'BadgeDot';
