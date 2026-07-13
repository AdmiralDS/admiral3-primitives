import { createRef } from 'react';

import { themes } from '@admiral-ds/admiral3-tokens';
import { cleanup, render, screen } from '@testing-library/react';
import type { ExecutionContext } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { afterEach, describe, expect, it } from 'vitest';

import { getToken, solidColors } from './appearanceMixin/colors';
import { Button } from './Button';
import {
  BUTTON_APPEARANCES,
  BUTTON_DIMENSIONS,
  BUTTON_DIMENSION_PARAMETERS,
  BUTTON_PADDING,
  BUTTON_TYPOGRAPHY,
  SQUARE_BUTTON_PADDING,
} from './constants';
import type { ButtonDimension } from './types';

const getButtonDimensionStyles = (dimension: ButtonDimension) => ({
  height: `${BUTTON_DIMENSION_PARAMETERS[dimension]}px`,
  padding: BUTTON_PADDING[dimension],
});

const getSquareButtonDimensionStyles = (dimension: ButtonDimension) => ({
  height: `${BUTTON_DIMENSION_PARAMETERS[dimension]}px`,
  width: `${BUTTON_DIMENSION_PARAMETERS[dimension]}px`,
  padding: SQUARE_BUTTON_PADDING[dimension],
});

const getButtonTypographyStyles = (dimension: ButtonDimension) => ({
  fontSize: BUTTON_TYPOGRAPHY[dimension].fontSize,
  lineHeight: BUTTON_TYPOGRAPHY[dimension].lineHeight,
});

const resolveToken = (token: (context: ExecutionContext) => string, theme = themes.light) => {
  return token({ theme } as ExecutionContext);
};

describe('Button', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders children', () => {
    render(<Button data-testid="button">Content</Button>);

    expect(screen.getByTestId('button')).toHaveTextContent('Content');
  });

  it('forwards button attributes to the root element', () => {
    render(
      <Button data-testid="button" title="Submit">
        Content
      </Button>,
    );

    expect(screen.getByTestId('button')).toHaveAttribute('title', 'Submit');
    expect(screen.getByTestId('button')).toHaveAttribute('type', 'button');
  });

  it('forwards ref to the root element', () => {
    const ref = createRef<HTMLButtonElement>();

    render(
      <Button ref={ref} data-testid="button">
        Content
      </Button>,
    );

    expect(ref.current).toBe(screen.getByTestId('button'));
  });

  it('uses default solid appearance, colored colorMode and M dimension', () => {
    render(<Button data-testid="button">Button</Button>);

    expect(screen.getByTestId('button')).toHaveAttribute('data-appearance', 'solid');
    expect(screen.getByTestId('button')).toHaveAttribute('data-dimension', 'm');
    expect(screen.getByTestId('button')).toHaveStyle({
      ...getButtonDimensionStyles('m'),
      backgroundColor: resolveToken(solidColors.colored.background),
      color: resolveToken(solidColors.colored.color),
    });
  });

  it.each(BUTTON_DIMENSIONS)('applies %s dimension', (dimension) => {
    render(
      <Button data-testid="button" dimension={dimension}>
        Button
      </Button>,
    );

    expect(screen.getByTestId('button')).toHaveAttribute('data-dimension', dimension);
    expect(screen.getByTestId('button')).toHaveStyle(getButtonDimensionStyles(dimension));
  });

  it.each(BUTTON_DIMENSIONS)('applies %s typography', (dimension) => {
    render(
      <Button data-testid="button" dimension={dimension}>
        Button
      </Button>,
    );

    expect(screen.getByTestId('button')).toHaveStyle(getButtonTypographyStyles(dimension));
  });

  it.each(BUTTON_APPEARANCES)('uses Admiral CSS tokens for %s appearance with colored mode', (appearance) => {
    render(
      <Button appearance={appearance} colorMode="colored" data-testid="button">
        Button
      </Button>,
    );

    const colors = getToken(appearance).colored;

    expect(screen.getByTestId('button')).toHaveStyle({
      backgroundColor: resolveToken(colors.background!),
      color: resolveToken(colors.color!),
    });
  });

  it('uses current styled-components theme as CSS token fallback', () => {
    render(
      <ThemeProvider theme={themes.dark}>
        <Button appearance="solid" colorMode="neutral" data-testid="button">
          Button
        </Button>
      </ThemeProvider>,
    );

    expect(screen.getByTestId('button')).toHaveStyle({
      backgroundColor: resolveToken(solidColors.neutral.background, themes.dark),
      color: resolveToken(solidColors.neutral.color, themes.dark),
    });
  });

  it('uses custom color config', () => {
    render(
      <Button
        data-testid="button"
        colorConfig={{
          backgroundColor: {
            rest: 'var(--custom-button-background)',
            hover: 'var(--custom-button-background-hover)',
            press: 'var(--custom-button-background-press)',
          },
          textColor: 'var(--custom-button-text)',
        }}
      >
        Button
      </Button>,
    );

    expect(screen.getByTestId('button')).toHaveAttribute('data-appearance', 'custom');
    expect(screen.getByTestId('button')).toHaveStyle({
      backgroundColor: 'var(--custom-button-background)',
      color: 'var(--custom-button-text)',
    });
  });

  it.each(BUTTON_DIMENSIONS)('applies %s square button dimensions', (dimension) => {
    render(
      <Button data-testid="button" dimension={dimension} displayAsSquare>
        Button
      </Button>,
    );

    expect(screen.getByTestId('button')).toHaveStyle(getSquareButtonDimensionStyles(dimension));
  });

  it('removes box-shadow for outline button in skeleton state', () => {
    render(
      <Button appearance="outline" skeleton data-testid="button">
        Button
      </Button>,
    );

    expect(screen.getByTestId('button')).toHaveStyle({ boxShadow: 'none' });
    expect(screen.getByTestId('button')).toHaveStyle({ pointerEvents: 'none' });
  });

  it('adds disabled appearance marker when displayAsDisabled is true', () => {
    render(
      <Button data-testid="button" displayAsDisabled>
        Button
      </Button>,
    );

    expect(screen.getByTestId('button')).toHaveAttribute('data-appearance', 'solid disabled');
  });

  it('uses default aria-label when loading and accessible name is not provided', () => {
    render(
      <Button data-testid="button" loading>
        Button
      </Button>,
    );

    expect(screen.getByTestId('button')).toHaveAttribute('aria-label', 'Loading...');
  });

  it('does not override aria-label when accessible name is provided', () => {
    render(
      <Button data-testid="button" loading aria-label="Save">
        Button
      </Button>,
    );

    expect(screen.getByTestId('button')).toHaveAttribute('aria-label', 'Save');
  });

  it('does not use aria-labelledby value as aria-label', () => {
    render(
      <Button data-testid="button" loading aria-labelledby="button-title">
        Button
      </Button>,
    );

    expect(screen.getByTestId('button')).toHaveAttribute('aria-labelledby', 'button-title');
    expect(screen.getByTestId('button')).not.toHaveAttribute('aria-label');
  });
});
