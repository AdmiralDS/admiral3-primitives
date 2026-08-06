import { PulseElement } from './style';
import type { PulseProps } from './types';

export const Pulse: React.FC<PulseProps> = ({
  dimension = 'm',
  status = 'info',
  cssMixin,
  dismiss = false,
  ...props
}) => {
  return <PulseElement $dimension={dimension} $status={status} $cssMixin={cssMixin} $dismiss={dismiss} {...props} />;
};

Pulse.displayName = 'Pulse';
