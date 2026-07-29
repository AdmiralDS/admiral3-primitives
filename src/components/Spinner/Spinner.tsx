import { forwardRef } from 'react';

import { DEFAULT_APPEARANCE } from './constants';
import { SpinnerIcon } from './SpinnerIcon';
import { StyledSpinner } from './style';
import type { SpinnerProps } from './types';

/** Spinner - это компонент для демонстрации процесса загрузки, ожидания.
 * Может применяется как самостоятельный элемент, так и в составе других
 * компонентов, например кнопок. */
export const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ dimension = 'm', appearance = DEFAULT_APPEARANCE, ...props }, ref) => {
    const hasAccessibleName = props['aria-label'] !== undefined || props['aria-labelledby'] !== undefined;
    const ariaLabel = hasAccessibleName ? undefined : 'Загрузка...';
    const isCustomAppearance = typeof appearance === 'object';

    return (
      <StyledSpinner
        ref={ref}
        data-dimension={dimension}
        data-appearance={isCustomAppearance ? 'custom' : appearance}
        role="status"
        aria-live="polite"
        aria-label={ariaLabel}
        {...props}
      >
        <SpinnerIcon appearance={appearance} dimension={dimension} />
      </StyledSpinner>
    );
  },
);

Spinner.displayName = 'Spinner';
