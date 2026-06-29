import { forwardRef } from 'react';

import { StyledSpinner, StyledSpinnerIcon } from './style';
import type { SpinnerProps } from './types';

const DEFAULT_APPEARANCE = 'colored';

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ dimension = 'm', appearance = DEFAULT_APPEARANCE, svgMixin, ...props }, ref) => {
    const isCustomAppearance = typeof appearance === 'object';
    const presetAppearance = isCustomAppearance ? DEFAULT_APPEARANCE : appearance;
    const colorConfig = isCustomAppearance ? appearance : undefined;
    return (
      <StyledSpinner
        ref={ref}
        $dimension={dimension}
        $svgMixin={svgMixin}
        role="alert"
        aria-live="assertive"
        {...props}
      >
        <StyledSpinnerIcon aria-hidden $appearance={presetAppearance} $colorConfig={colorConfig} />
      </StyledSpinner>
    );
  },
);

Spinner.displayName = 'Spinner';
