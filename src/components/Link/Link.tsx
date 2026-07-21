import { Children, forwardRef, type MouseEvent } from 'react';

import { StyledLink } from './style';
import type { LinkProps } from './types';

/** Компонент используется для навигации. Может применяться отдельно или внутри текста, с иконкой или без. */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ appearance = 'colored', dimension = 'm', disabled = false, children, onClick, tabIndex, ...props }, ref) => {
    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
      if (disabled) {
        event.preventDefault();
        return;
      }

      onClick?.(event);
    };

    return (
      <StyledLink
        {...props}
        ref={ref}
        $appearance={appearance}
        $dimension={dimension}
        $disabled={disabled}
        aria-disabled={disabled || undefined}
        data-appearance={appearance}
        data-dimension={dimension}
        onClick={handleClick}
        tabIndex={disabled ? -1 : tabIndex}
      >
        {Children.toArray(children).map((child, index) =>
          typeof child === 'string' ? <span key={child + index}>{child}</span> : child,
        )}
      </StyledLink>
    );
  },
);

Link.displayName = 'Link';
