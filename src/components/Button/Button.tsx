import { forwardRef } from 'react';

import { Spinner } from '@admiral-ds/admiral3-primitives';

import { StyledButton, ButtonContent, SpinnerContainer } from './style';
import type { ButtonProps } from './types';

const DEFAULT_APPEARANCE = 'solid';
const DEFAULT_COLOR_MODE = 'colored';

/** Button primitive component. */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      dimension = 'm',
      appearance = DEFAULT_APPEARANCE,
      colorMode: userColorMode = DEFAULT_COLOR_MODE,
      colorConfig,
      displayAsDisabled = false,
      displayAsSquare = false,
      loading = false,
      loadingPosition,
      skeleton = false,
      children,
      ...props
    },
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
      colorMode = DEFAULT_COLOR_MODE;
    }

    const spinnerApperance =
      appearance === 'solid' ? (colorMode === 'colored' ? 'staticWhite' : 'inverted') : colorMode;
    const spinnerDimension = dimension === 'l' ? 'm' : dimension;

    const hasAccessibleName = props['aria-label'] !== undefined || props['aria-labelledby'] !== undefined;
    const ariaLabel = hasAccessibleName || !loading ? undefined : 'Loading...';

    return (
      <StyledButton
        ref={ref}
        $dimension={dimension}
        $appearance={appearance}
        $colorConfig={colorConfig}
        $colorMode={colorMode}
        $loading={loading}
        $loadingPosition={loadingPosition}
        $skeleton={skeleton}
        $displayAsDisabled={displayAsDisabled}
        aria-label={ariaLabel}
        {...props}
      >
        {loading && !loadingPosition && (
          <SpinnerContainer>
            <Spinner appearance={spinnerApperance} dimension={spinnerDimension} />
          </SpinnerContainer>
        )}
        <ButtonContent $dimension={dimension}>
          {loading && loadingPosition === 'start' && (
            <Spinner appearance={spinnerApperance} dimension={spinnerDimension} />
          )}
          {children}
          {loading && loadingPosition === 'end' && (
            <Spinner appearance={spinnerApperance} dimension={spinnerDimension} />
          )}
        </ButtonContent>
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';
