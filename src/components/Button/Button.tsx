import { forwardRef } from 'react';

import { StyledButton } from './style';
import type { ButtonProps } from './types';

/** Button primitive component. */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ dimension = 'm', appearance = 'solid', colorMode = 'colored', children, ...props }, ref) => {
    return (
      <StyledButton ref={ref} $dimension={dimension} {...props}>
        {children}
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';
