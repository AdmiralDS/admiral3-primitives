import { forwardRef } from 'react';

import { DEFAULT_APPEARANCE } from './constants';
import { StyledSpinnerIcon } from './style';
import type { SpinnerIconProps } from './types';

/**
 * Внутренний декоративный SVG-индикатор загрузки для композиции в компонентах.
 * В отличие от Spinner не создаёт live-region и не задаёт доступное имя.
 */
export const SpinnerIcon = forwardRef<SVGSVGElement, SpinnerIconProps>(
  ({ dimension = 'm', appearance = DEFAULT_APPEARANCE, ...props }, ref) => {
    const isCustomAppearance = typeof appearance === 'object';
    const presetAppearance = isCustomAppearance ? DEFAULT_APPEARANCE : appearance;
    const colorConfig = isCustomAppearance ? appearance : undefined;

    return (
      <StyledSpinnerIcon
        ref={ref}
        $dimension={dimension}
        $appearance={presetAppearance}
        $colorConfig={colorConfig}
        {...props}
        aria-hidden
      />
    );
  },
);

SpinnerIcon.displayName = 'SpinnerIcon';
