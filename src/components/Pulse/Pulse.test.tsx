import { createRef } from 'react';

import { themes } from '@admiral-ds/admiral3-tokens';
import { cleanup, render, screen } from '@testing-library/react';
import { css, ThemeProvider } from 'styled-components';
import { afterEach, describe, expect, it } from 'vitest';

import { Pulse } from './Pulse';
import type { PulseDimension, PulseStatus } from './types';

const PULSE_DIMENSION_PARAMETERS: Record<PulseDimension, number> = {
  s: 8,
  m: 12,
  l: 16,
};

const PULSE_STATUS_TOKENS: Record<PulseStatus, string> = {
  info: '--admiral-color-primary-base-1-rest',
  danger: '--admiral-color-error-base-1-rest',
  success: '--admiral-color-success-base-1-rest',
  warning: '--admiral-color-warning-base-1-rest',
};

const getStatusColor = (status: PulseStatus, theme = themes.light) => {
  const fallback = {
    info: theme.color.primary.base._1.rest,
    danger: theme.color.error.base._1.rest,
    success: theme.color.success.base._1.rest,
    warning: theme.color.warning.base._1.rest,
  }[status];

  return `var(${PULSE_STATUS_TOKENS[status]},${fallback})`;
};

describe('Pulse', () => {
  afterEach(() => {
    cleanup();
  });

  it('forwards div attributes to the root element', () => {
    render(<Pulse data-testid="pulse" title="Connection status" />);

    expect(screen.getByTestId('pulse')).toHaveAttribute('title', 'Connection status');
  });

  it('forwards ref to the root element', () => {
    const ref = createRef<HTMLDivElement>();

    render(<Pulse ref={ref} data-testid="pulse" />);

    expect(ref.current).toBe(screen.getByTestId('pulse'));
  });

  it('uses default info status and M dimension', () => {
    render(<Pulse data-testid="pulse" />);

    expect(screen.getByTestId('pulse')).toHaveStyle({
      blockSize: '12px',
      inlineSize: '12px',
      borderRadius: '50%',
      '--pulse-color': getStatusColor('info'),
      backgroundColor: 'var(--pulse-color)',
    });
  });

  it.each(Object.entries(PULSE_DIMENSION_PARAMETERS) as [PulseDimension, number][])(
    'applies %s dimension',
    (dimension, size) => {
      render(<Pulse data-testid="pulse" dimension={dimension} />);

      expect(screen.getByTestId('pulse')).toHaveStyle({
        blockSize: `${size}px`,
        inlineSize: `${size}px`,
      });
    },
  );

  it.each(Object.keys(PULSE_STATUS_TOKENS) as PulseStatus[])('uses Admiral CSS token for %s status', (status) => {
    render(<Pulse data-testid="pulse" status={status} />);

    expect(screen.getByTestId('pulse')).toHaveStyle({
      '--pulse-color': getStatusColor(status),
    });
  });

  it('uses current styled-components theme as CSS token fallback', () => {
    render(
      <ThemeProvider theme={themes.dark}>
        <Pulse data-testid="pulse" status="info" />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('pulse')).toHaveStyle({
      '--pulse-color': getStatusColor('info', themes.dark),
    });
  });

  it('uses custom status color', () => {
    render(<Pulse data-testid="pulse" status={{ background: 'var(--custom-pulse-color)' }} />);

    expect(screen.getByTestId('pulse')).toHaveStyle({
      '--pulse-color': 'var(--custom-pulse-color)',
    });
  });

  it('applies custom CSS mixin', () => {
    render(
      <Pulse
        data-testid="pulse"
        cssMixin={css`
          margin: 4px;
        `}
      />,
    );

    expect(screen.getByTestId('pulse')).toHaveStyle({ margin: '4px' });
  });
});
