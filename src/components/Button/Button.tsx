import { forwardRef } from 'react';

import { StyledButton } from './style';
import type { ButtonProps } from './types';

/** Button primitive component. */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ dimension = 'L', appearance = 'solid', children, ...props }, ref) => {
    return (
      <StyledButton ref={ref} {...props}>
        {children}
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';
