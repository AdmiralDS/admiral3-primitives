import { forwardRef } from 'react';

import { StyledSpinner, StyledSpinnerIcon } from './style';
import type { SpinnerProps } from './types';

const DEFAULT_APPEARANCE = 'colored';

/** Spinner - это компонент для демонстрации процесса загрузки, ожидания.
 * Может применяется как самостоятельный элемент, так и в составе других
 * компонентов, например кнопок. */
export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ dimension = 'm', appearance = DEFAULT_APPEARANCE, ...props }, ref) => {
    const ariaLabel = props['aria-label'] || props['aria-labelledby'] || 'Loading...';
    const isCustomAppearance = typeof appearance === 'object';
    const presetAppearance = isCustomAppearance ? DEFAULT_APPEARANCE : appearance;
    const colorConfig = isCustomAppearance ? appearance : undefined;
    return (
      <StyledSpinner
        ref={ref}
        $dimension={dimension}
        $colorConfig={colorConfig}
        $appearance={presetAppearance}
        role="status"
        aria-live="polite"
        aria-label={ariaLabel}
        {...props}
      >
        <StyledSpinnerIcon aria-hidden $appearance={presetAppearance} $colorConfig={colorConfig} />
      </StyledSpinner>
    );
  },
);

Spinner.displayName = 'Spinner';
