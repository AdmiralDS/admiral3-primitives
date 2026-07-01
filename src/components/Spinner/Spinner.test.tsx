import { createRef } from 'react';

import { themes } from '@admiral-ds/admiral3-tokens';
import { cleanup, render, screen } from '@testing-library/react';
import type { ExecutionContext } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { afterEach, describe, expect, it } from 'vitest';

import { SPINNER_APPEARANCES, SPINNER_DIMENSIONS, SPINNER_DIMENSION_PARAMETERS } from './constants';
import { Spinner } from './Spinner';
import { spinnerBackgroundColors } from './style';
import type { SpinnerDimension } from './types';

const getSpinnerDimensionStyles = (dimension: SpinnerDimension) => {
  const size = SPINNER_DIMENSION_PARAMETERS[dimension];

  return {
    width: `${size}px`,
    height: `${size}px`,
  };
};

const resolveToken = (token: (context: ExecutionContext) => string, theme = themes.light) => {
  return token({ theme } as ExecutionContext);
};

describe('Spinner', () => {
  afterEach(() => {
    cleanup();
  });

  it('forwards div attributes to the root element', () => {
    render(<Spinner data-testid="spinner" aria-label="Loading..." />);

    expect(screen.getByTestId('spinner')).toHaveAttribute('aria-label', 'Loading...');
  });

  it('uses default aria-label when accessible name is not provided', () => {
    render(<Spinner data-testid="spinner" />);

    expect(screen.getByTestId('spinner')).toHaveAttribute('aria-label', 'Loading...');
  });

  it('does not use aria-labelledby value as aria-label', () => {
    render(<Spinner data-testid="spinner" aria-labelledby="spinner-title" />);

    expect(screen.getByTestId('spinner')).toHaveAttribute('aria-labelledby', 'spinner-title');
    expect(screen.getByTestId('spinner')).not.toHaveAttribute('aria-label');
  });

  it('forwards ref to the root element', () => {
    const ref = createRef<HTMLDivElement>();

    render(<Spinner ref={ref} data-testid="spinner" />);

    expect(ref.current).toBe(screen.getByTestId('spinner'));
  });

  it('uses default colored appearance and M dimension', () => {
    const { container } = render(<Spinner data-testid="spinner" />);
    expect(screen.getByTestId('spinner')).toHaveStyle({
      ...getSpinnerDimensionStyles('m'),
    });

    const svgPathElement = container.querySelector('svg > path');
    expect(svgPathElement).not.toBeNull();
    expect(svgPathElement).toHaveStyle({
      fill: resolveToken(spinnerBackgroundColors.colored),
    });
  });

  it.each(SPINNER_DIMENSIONS)('applies %s dimension', (dimension) => {
    render(<Spinner data-testid="spinner" dimension={dimension} />);

    expect(screen.getByTestId('spinner')).toHaveStyle(getSpinnerDimensionStyles(dimension));
  });

  it.each(SPINNER_APPEARANCES)('uses Admiral CSS tokens for %s appearance', (appearance) => {
    const { container } = render(<Spinner appearance={appearance} data-testid="spinner" />);

    const svgPathElement = container.querySelector('svg > path');
    expect(svgPathElement).not.toBeNull();
    expect(svgPathElement).toHaveStyle({
      fill: resolveToken(spinnerBackgroundColors[appearance]),
    });
  });

  it('uses current styled-components theme as CSS token fallback', () => {
    const { container } = render(
      <ThemeProvider theme={themes.dark}>
        <Spinner appearance="neutral" data-testid="spinner" />
      </ThemeProvider>,
    );

    const svgPathElement = container.querySelector('svg > path');
    expect(svgPathElement).not.toBeNull();
    expect(svgPathElement).toHaveStyle({
      fill: resolveToken(spinnerBackgroundColors.neutral, themes.dark),
    });
  });

  it('uses custom color config', () => {
    const { container } = render(
      <Spinner appearance={{ backgroundColor: 'var(--custom-spinner-background)' }} data-testid="spinner" />,
    );
    expect(screen.getByTestId('spinner')).toHaveAttribute('data-appearance', 'custom');

    const svgPathElement = container.querySelector('svg > path');
    expect(svgPathElement).not.toBeNull();
    expect(svgPathElement).toHaveStyle({
      fill: 'var(--custom-spinner-background)',
    });
  });
});
