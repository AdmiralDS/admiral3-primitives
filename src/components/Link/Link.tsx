import { Children, forwardRef, type ElementType, type ForwardedRef, type MouseEvent, type ReactElement } from 'react';

import { StyledLink } from './style';
import type { LinkComponent, LinkProps } from './types';

const LinkRender = <C extends ElementType = 'a'>(
  {
    appearance = 'colored',
    as,
    dimension = 'm',
    disabled = false,
    children,
    href,
    onClick,
    role,
    tabIndex,
    ...props
  }: LinkProps<C>,
  ref: ForwardedRef<HTMLAnchorElement>,
): ReactElement => {
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
      as={disabled ? 'a' : as}
      ref={ref}
      $appearance={appearance}
      $dimension={dimension}
      $disabled={disabled}
      aria-disabled={disabled || undefined}
      data-appearance={appearance}
      data-dimension={dimension}
      onClick={handleClick}
      href={disabled ? undefined : href}
      role={disabled ? 'link' : role}
      tabIndex={disabled ? -1 : tabIndex}
    >
      {Children.toArray(children).map((child, index) =>
        typeof child === 'string' ? <span key={child + index}>{child}</span> : child,
      )}
    </StyledLink>
  );
};

/**
 * Компонент используется для навигации. Может применяться отдельно или внутри текста, с иконкой или без.
 * Link всегда работает с HTML-элементом `<a>`. Компонент, переданный через `as`, также должен рендерить `<a>`
 * и пробрасывать в него ref. Для routing-компонентов, которые рендерят кнопку, используйте Button.
 */
export const Link = forwardRef(LinkRender) as LinkComponent;
Link.displayName = 'Link';
