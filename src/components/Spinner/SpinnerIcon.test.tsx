import { createRef } from 'react';

import { themes } from '@admiral-ds/admiral3-tokens';
import { cleanup, render, screen } from '@testing-library/react';
import type { ExecutionContext } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { afterEach, describe, expect, it } from 'vitest';

import { SPINNER_APPEARANCES, SPINNER_DIMENSIONS, SPINNER_DIMENSION_PARAMETERS } from './constants';
import { SpinnerIcon } from './SpinnerIcon';
import { spinnerColors } from './style';
import type { SpinnerDimension } from './types';

const getSpinnerDimensionStyles = (dimension: SpinnerDimension) => {
  const size = SPINNER_DIMENSION_PARAMETERS[dimension];

  return {
    width: `${size}px`,
    height: `${size}px`,
  };
};

const resolveToken = (token: (context: ExecutionContext) => string, theme = themes.light) =>
  token({ theme } as ExecutionContext);

describe('SpinnerIcon', () => {
  afterEach(() => {
    cleanup();
  });

  it.each(SPINNER_DIMENSIONS)('applies %s dimension', (dimension) => {
    render(<SpinnerIcon data-testid="spinner-icon" dimension={dimension} />);

    const icon = screen.getByTestId('spinner-icon');
    expect(icon).toHaveStyle(getSpinnerDimensionStyles(dimension));
    expect(icon.querySelector(`path[data-dimension='${dimension}']`)).not.toHaveStyle({ display: 'none' });
    expect(icon.querySelector(`path:not([data-dimension='${dimension}'])`)).toHaveStyle({ display: 'none' });
  });

  it.each(SPINNER_APPEARANCES)('uses Admiral CSS tokens for %s appearance', (appearance) => {
    render(<SpinnerIcon data-testid="spinner-icon" appearance={appearance} />);

    expect(screen.getByTestId('spinner-icon')).toHaveStyle({
      color: resolveToken(spinnerColors[appearance]),
    });
  });

  it('uses custom color config', () => {
    render(<SpinnerIcon data-testid="spinner-icon" appearance={{ color: 'var(--custom-spinner-color)' }} />);

    expect(screen.getByTestId('spinner-icon')).toHaveStyle({
      color: 'var(--custom-spinner-color)',
    });
  });

  it('uses current styled-components theme as CSS token fallback', () => {
    render(
      <ThemeProvider theme={themes.dark}>
        <SpinnerIcon data-testid="spinner-icon" appearance="neutral" />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('spinner-icon')).toHaveStyle({
      color: resolveToken(spinnerColors.neutral, themes.dark),
    });
  });

  it('forwards SVG attributes and ref to the icon', () => {
    const ref = createRef<SVGSVGElement>();

    render(<SpinnerIcon ref={ref} data-testid="spinner-icon" focusable="false" />);

    expect(ref.current).toBe(screen.getByTestId('spinner-icon'));
    expect(screen.getByTestId('spinner-icon')).toHaveAttribute('focusable', 'false');
  });

  it('is hidden from the accessibility tree and does not add live-region semantics', () => {
    render(<SpinnerIcon data-testid="spinner-icon" />);

    const icon = screen.getByTestId('spinner-icon');
    expect(icon).toHaveAttribute('aria-hidden', 'true');
    expect(icon).not.toHaveAttribute('role');
    expect(icon).not.toHaveAttribute('aria-live');
  });
});
