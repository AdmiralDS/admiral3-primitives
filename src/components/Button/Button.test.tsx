import { createRef } from 'react';

import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { Button } from './Button';
import { BUTTON_ROOT_DATA_ATTRIBUTE } from './constants';

describe('Button', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders children', () => {
    render(<Button data-testid="button">Content</Button>);

    expect(screen.getByTestId('button')).toHaveTextContent('Content');
  });

  it('forwards div attributes to the root element', () => {
    render(<Button data-testid="button" title="Button" />);

    expect(screen.getByTestId('button')).toHaveAttribute('title', 'Button');
    expect(screen.getByTestId('button')).toHaveAttribute(BUTTON_ROOT_DATA_ATTRIBUTE, 'true');
  });

  it('forwards ref to the root element', () => {
    const ref = createRef<HTMLDivElement>();

    render(<Button ref={ref} data-testid="button" />);

    expect(ref.current).toBe(screen.getByTestId('button'));
  });
});
