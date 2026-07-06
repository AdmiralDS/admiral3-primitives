import { forwardRef } from 'react';

import { StyledButton } from './style';
import type { ButtonProps } from './types';

const DEFAULT_COLOR_MODE = 'colored';

/** Button primitive component. */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { dimension = 'm', appearance = 'solid', colorMode: userColorMode = DEFAULT_COLOR_MODE, children, ...props },
    ref,
  ) => {
    /** Runtime защита от невалидных параметров, использование fallback-значения */
    let colorMode: ButtonProps['colorMode'] = userColorMode;
    if ((appearance === 'solid' || appearance === 'ghost') && userColorMode === 'staticWhite') {
      if (process.env.NODE_ENV !== 'production') {
        console.warn(
          `Invalid props combination: appearance="${appearance}" cannot be used with colorMode="${userColorMode}"`,
        );
      }
      colorMode = 'colored';
    }

    return (
      <StyledButton ref={ref} $dimension={dimension} $appearance={appearance} $colorMode={colorMode} {...props}>
        {children}
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';
