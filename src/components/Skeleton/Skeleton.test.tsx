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
});
