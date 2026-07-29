import { createRef } from 'react';

import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { Spinner } from './Spinner';

describe('Spinner', () => {
  afterEach(() => {
    cleanup();
  });

  it('forwards HTML attributes to the root element', () => {
    render(<Spinner data-testid="spinner" aria-label="Loading..." />);

    expect(screen.getByTestId('spinner')).toHaveAttribute('aria-label', 'Loading...');
  });

  it('uses default aria-label when accessible name is not provided', () => {
    render(<Spinner data-testid="spinner" />);

    expect(screen.getByTestId('spinner')).toHaveAttribute('aria-label', 'Загрузка...');
  });

  it('keeps status live-region semantics on the public component', () => {
    render(<Spinner data-testid="spinner" />);

    expect(screen.getByTestId('spinner')).toHaveAttribute('role', 'status');
    expect(screen.getByTestId('spinner')).toHaveAttribute('aria-live', 'polite');
  });

  it('does not use aria-labelledby value as aria-label', () => {
    render(<Spinner data-testid="spinner" aria-labelledby="spinner-title" />);

    expect(screen.getByTestId('spinner')).toHaveAttribute('aria-labelledby', 'spinner-title');
    expect(screen.getByTestId('spinner')).not.toHaveAttribute('aria-label');
  });

  it('allows user attributes to override the default live region semantics', () => {
    render(<Spinner data-testid="spinner" role="progressbar" aria-live="assertive" />);

    expect(screen.getByTestId('spinner')).toHaveAttribute('role', 'progressbar');
    expect(screen.getByTestId('spinner')).toHaveAttribute('aria-live', 'assertive');
  });

  it('forwards ref to the root element', () => {
    const ref = createRef<HTMLSpanElement>();

    render(<Spinner ref={ref} data-testid="spinner" />);

    expect(ref.current).toBe(screen.getByTestId('spinner'));
  });

  it('uses default colored appearance and M dimension', () => {
    render(<Spinner data-testid="spinner" />);

    expect(screen.getByTestId('spinner')).toHaveAttribute('data-appearance', 'colored');
    expect(screen.getByTestId('spinner')).toHaveAttribute('data-dimension', 'm');
  });

  it('passes dimension and appearance to the decorative icon', () => {
    render(<Spinner data-testid="spinner" dimension="l" appearance={{ color: 'var(--custom-spinner-color)' }} />);

    expect(screen.getByTestId('spinner')).toHaveAttribute('data-dimension', 'l');
    expect(screen.getByTestId('spinner')).toHaveAttribute('data-appearance', 'custom');

    const icon = screen.getByTestId('spinner').querySelector('svg');
    expect(icon).toHaveAttribute('aria-hidden', 'true');
    expect(icon).toHaveStyle({
      width: '48px',
      height: '48px',
      color: 'var(--custom-spinner-color)',
    });
  });
});
