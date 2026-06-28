import { createRef } from 'react';

import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { Spinner } from './Spinner';

describe('Spinner', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders children', () => {
    render(<Spinner data-testid="spinner">Content</Spinner>);

    expect(screen.getByTestId('spinner')).toHaveTextContent('Content');
  });

  it('forwards div attributes to the root element', () => {
    render(<Spinner data-testid="spinner" title="Spinner" />);

    expect(screen.getByTestId('spinner')).toHaveAttribute('title', 'Spinner');
  });

  it('forwards ref to the root element', () => {
    const ref = createRef<HTMLDivElement>();

    render(<Spinner ref={ref} data-testid="spinner" />);

    expect(ref.current).toBe(screen.getByTestId('spinner'));
  });
});
