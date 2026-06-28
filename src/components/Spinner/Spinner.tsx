import { forwardRef } from 'react';

import { StyledSpinner, StyledSpinnerIcon } from './style';
import type { SpinnerProps } from './types';

const DEFAULT_COLOR = 'colored';

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ dimension = 'm', color = DEFAULT_COLOR, svgMixin, ...props }, ref) => {
    const isCustomColor = typeof color === 'object';
    const presetColor = isCustomColor ? DEFAULT_COLOR : color;
    const colorConfig = isCustomColor ? color : undefined;
    return (
      <StyledSpinner
        ref={ref}
        $dimension={dimension}
        $svgMixin={svgMixin}
        role="alert"
        aria-live="assertive"
        {...props}
      >
        <StyledSpinnerIcon aria-hidden $color={presetColor} $colorConfig={colorConfig} />
      </StyledSpinner>
    );
  },
);

Spinner.displayName = 'Spinner';
