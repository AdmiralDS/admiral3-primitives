import { forwardRef } from 'react';

import { PulseElement } from './style';
import type { PulseProps } from './types';

export const Pulse = forwardRef<HTMLDivElement, PulseProps>(
  ({ dimension = 'm', status = 'info', cssMixin, dismiss = false, ...props }, ref) => {
    return (
      <PulseElement
        ref={ref}
        $dimension={dimension}
        $status={status}
        $cssMixin={cssMixin}
        $dismiss={dismiss}
        {...props}
      />
    );
  },
);

Pulse.displayName = 'Pulse';
