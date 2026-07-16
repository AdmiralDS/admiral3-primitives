import { createRef } from 'react';

import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { Skeleton } from './Skeleton';

describe('Skeleton', () => {
  afterEach(() => {
    cleanup();
  });

  it('forwards div attributes to the root element', () => {
    render(<Skeleton data-testid="skeleton" title="Skeleton" />);

    expect(screen.getByTestId('skeleton')).toHaveAttribute('title', 'Skeleton');
  });

  it('forwards ref to the root element', () => {
    const ref = createRef<HTMLDivElement>();

    render(<Skeleton ref={ref} data-testid="skeleton" />);

    expect(ref.current).toBe(screen.getByTestId('skeleton'));
  });

  it('uses default layout dimensions', () => {
    render(<Skeleton data-testid="skeleton" />);

    expect(screen.getByTestId('skeleton')).toHaveStyle({
      height: '100%',
      width: '100%',
      borderRadius: '0px',
    });
  });

  it('applies numeric layout dimensions', () => {
    render(<Skeleton data-testid="skeleton" height={40} width={200} borderRadius={8} />);

    expect(screen.getByTestId('skeleton')).toHaveStyle({
      height: '40px',
      width: '200px',
      borderRadius: '8px',
    });
  });

  it('applies string layout dimensions', () => {
    render(<Skeleton data-testid="skeleton" height="16px" width="320px" borderRadius="50%" />);

    expect(screen.getByTestId('skeleton')).toHaveStyle({
      height: '16px',
      width: '320px',
      borderRadius: '50%',
    });
  });
});
