import { createRef } from 'react';

import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { LINK_DIMENSIONS, LINK_DIMENSION_PARAMETERS } from './constants';
import { Link } from './Link';

describe('Link', () => {
  afterEach(cleanup);

  it('renders an anchor and forwards its attributes', () => {
    render(
      <Link href="/docs" target="_blank">
        Documentation
      </Link>,
    );

    expect(screen.getByRole('link', { name: 'Documentation' })).toHaveAttribute('href', '/docs');
    expect(screen.getByRole('link', { name: 'Documentation' })).toHaveAttribute('target', '_blank');
  });

  it('uses colored appearance and M dimension by default', () => {
    render(
      <Link href="/" data-testid="link">
        Link
      </Link>,
    );

    expect(screen.getByTestId('link')).toHaveAttribute('data-appearance', 'colored');
    expect(screen.getByTestId('link')).toHaveAttribute('data-dimension', 'm');
    expect(screen.getByText('Link').tagName).toBe('SPAN');
  });

  it.each(LINK_DIMENSIONS)('applies %s dimension typography and gap', (dimension) => {
    render(
      <Link dimension={dimension} data-testid="link">
        Link
      </Link>,
    );

    expect(screen.getByTestId('link')).toHaveStyle({
      fontSize: LINK_DIMENSION_PARAMETERS[dimension].typography.fontSize,
      lineHeight: LINK_DIMENSION_PARAMETERS[dimension].typography.lineHeight,
      gap: `${LINK_DIMENSION_PARAMETERS[dimension].gap}px`,
    });
  });

  it('renders icons passed directly through children', () => {
    render(
      <Link>
        <svg data-testid="start-icon" />
        Link
        <svg data-testid="end-icon" />
      </Link>,
    );

    expect(screen.getByTestId('start-icon')).toBeInTheDocument();
    expect(screen.getByTestId('end-icon')).toBeInTheDocument();
  });

  it('prevents navigation and click handler for a disabled link', () => {
    const onClick = vi.fn();
    render(
      <Link href="/docs" disabled onClick={onClick}>
        Documentation
      </Link>,
    );

    const link = screen.getByRole('link', { name: 'Documentation' });
    const clickResult = fireEvent.click(link);

    expect(clickResult).toBe(false);
    expect(onClick).not.toHaveBeenCalled();
    expect(link).toHaveAttribute('aria-disabled', 'true');
    expect(link).toHaveAttribute('tabindex', '-1');
  });

  it('does not allow anchor attributes to override the disabled state', () => {
    render(
      <Link href="/docs" disabled aria-disabled={false} tabIndex={0}>
        Documentation
      </Link>,
    );

    const link = screen.getByRole('link', { name: 'Documentation' });

    expect(link).toHaveAttribute('aria-disabled', 'true');
    expect(link).toHaveAttribute('tabindex', '-1');
  });

  it('forwards ref to the root element', () => {
    const ref = createRef<HTMLAnchorElement>();
    render(
      <Link ref={ref} data-testid="link">
        Link
      </Link>,
    );

    expect(ref.current).toBe(screen.getByTestId('link'));
  });
});
