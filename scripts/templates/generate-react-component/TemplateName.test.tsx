import { createRef } from 'react';

import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { TemplateName } from './TemplateName';
import { TEMPLATE_NAME_ROOT_DATA_ATTRIBUTE } from './constants';

describe('TemplateName', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders children', () => {
    render(<TemplateName data-testid="template-name">Content</TemplateName>);

    expect(screen.getByTestId('template-name')).toHaveTextContent('Content');
  });

  it('forwards div attributes to the root element', () => {
    render(<TemplateName data-testid="template-name" title="TemplateName" />);

    expect(screen.getByTestId('template-name')).toHaveAttribute('title', 'TemplateName');
    expect(screen.getByTestId('template-name')).toHaveAttribute(TEMPLATE_NAME_ROOT_DATA_ATTRIBUTE, 'true');
  });

  it('forwards ref to the root element', () => {
    const ref = createRef<HTMLDivElement>();

    render(<TemplateName ref={ref} data-testid="template-name" />);

    expect(ref.current).toBe(screen.getByTestId('template-name'));
  });
});
