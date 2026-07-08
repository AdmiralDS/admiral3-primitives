import { forwardRef, Children } from 'react';

import { Spinner } from '#src/components/Spinner';

import { StyledButton, ButtonContent, SpinnerContainer } from './style';
import type { ButtonProps } from './types';

const DEFAULT_APPEARANCE = 'solid';
const DEFAULT_COLOR_MODE = 'colored';

/** Кнопки представлены в четырех размерностях L, M, S и XS.
 * Для дополнительных акцентов и более прозрачных действий могут применяться кнопки
 * с иконками и текстом. Иконка может быть как перед надписью, так и после. В некоторых
 * случаях могут использоваться кнопки только с иконками. Как правило, это иконки,
 * значения которых общепонятны и не вызывают сомнений. */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
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
    let colorMode = userColorMode;
    if ((appearance === 'solid' || appearance === 'ghost') && userColorMode === 'staticWhite') {
      if (process.env.NODE_ENV !== 'production') {
        console.warn(
          `Invalid props combination: appearance="${appearance}" cannot be used with colorMode="${userColorMode}, 
          colorMode="colored" will be used instead.`,
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
        type={type}
        $dimension={dimension}
        $appearance={appearance}
        $colorConfig={colorConfig}
        $colorMode={colorMode}
        $loading={loading}
        $loadingPosition={loadingPosition}
        $skeleton={skeleton}
        $displayAsDisabled={displayAsDisabled}
        $displayAsSquare={displayAsSquare}
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
          {Children.toArray(children).map((child, index) =>
            typeof child === 'string' ? <div key={child + index}>{child}</div> : child,
          )}
          {loading && loadingPosition === 'end' && (
            <Spinner appearance={spinnerApperance} dimension={spinnerDimension} />
          )}
        </ButtonContent>
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';
