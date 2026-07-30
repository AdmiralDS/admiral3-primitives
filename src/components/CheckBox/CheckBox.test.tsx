import { createRef } from 'react';

import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { CheckBox } from './CheckBox';
import { CHECK_BOX_DIMENSIONS, CHECK_BOX_ROOT_DATA_ATTRIBUTE } from './constants';

describe('CheckBox', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders a native checkbox with a label', () => {
    render(<CheckBox>Согласен</CheckBox>);

    const input = screen.getByRole('checkbox', { name: 'Согласен' });

    expect(input).toHaveAttribute('type', 'checkbox');
    expect(input).not.toHaveAttribute('data-read-only');
  });

  it('uses m as the default dimension and supports every dimension', () => {
    const { rerender } = render(<CheckBox>CheckBox</CheckBox>);
    const root = screen.getByText('CheckBox').closest('label');

    expect(root).toHaveAttribute('data-dimension', 'm');
    expect(root).toHaveAttribute(CHECK_BOX_ROOT_DATA_ATTRIBUTE, 'true');

    CHECK_BOX_DIMENSIONS.forEach((dimension) => {
      rerender(<CheckBox dimension={dimension}>CheckBox</CheckBox>);
      expect(root).toHaveAttribute('data-dimension', dimension);
    });
  });

  it('renders additional text under the label', () => {
    render(<CheckBox extraText="Дополнительный текст">CheckBox</CheckBox>);

    const input = screen.getByRole('checkbox', { name: 'CheckBox' });
    const extraText = screen.getByText('Дополнительный текст');

    expect(input).toHaveAccessibleDescription('Дополнительный текст');
    expect(input).toHaveAttribute('aria-describedby', extraText.id);
  });

  it('forwards input attributes and ref', () => {
    const ref = createRef<HTMLInputElement>();
    render(<CheckBox ref={ref} name="option" value="yes" aria-label="Option" />);

    expect(ref.current).toBe(screen.getByRole('checkbox', { name: 'Option' }));
    expect(ref.current).toHaveAttribute('name', 'option');
    expect(ref.current).toHaveAttribute('value', 'yes');
  });

  it('supports checked and indeterminate states', () => {
    const { container, rerender } = render(<CheckBox checked readOnly aria-label="Option" />);
    const input = screen.getByRole('checkbox', { name: 'Option' });

    expect(input).toBeChecked();
    expect(container.querySelector('[data-icon="success"]')).toBeInTheDocument();

    rerender(<CheckBox indeterminate aria-label="Option" />);
    expect(input).toHaveProperty('indeterminate', true);
    expect(input).toHaveAttribute('aria-checked', 'mixed');
    expect(container.querySelector('[data-icon="minus"]')).toBeInTheDocument();
  });

  it.each([
    ['m', '-1 -1 14 10', '14', '10'],
    ['s', '-0.75 0 11 7', '11', '7'],
    ['xs', '-1 0 10 6', '10', '6'],
  ] as const)('uses the exported success icon for the %s dimension', (dimension, viewBox, width, height) => {
    const { container } = render(
      <CheckBox dimension={dimension} checked readOnly aria-label={`Option ${dimension}`} />,
    );
    const icon = container.querySelector('[data-icon="success"]');

    expect(icon).toHaveAttribute('viewBox', viewBox);
    expect(icon).toHaveAttribute('width', width);
    expect(icon).toHaveAttribute('height', height);
  });

  it.each([
    ['m', '0 0 10 2', '10', '2'],
    ['s', '0 -1 8 3', '8', '3'],
    ['xs', '-1 -1 8 3', '8', '3'],
  ] as const)('uses the normalized minus icon canvas for the %s dimension', (dimension, viewBox, width, height) => {
    const { container } = render(
      <CheckBox dimension={dimension} indeterminate readOnly aria-label={`Option ${dimension}`} />,
    );
    const icon = container.querySelector('[data-icon="minus"]');

    expect(icon).toHaveAttribute('viewBox', viewBox);
    expect(icon).toHaveAttribute('width', width);
    expect(icon).toHaveAttribute('height', height);
  });

  it('prevents changing a readOnly checkbox', () => {
    const onChange = vi.fn();
    const onClick = vi.fn();
    const onKeyDown = vi.fn();
    render(<CheckBox readOnly onChange={onChange} onClick={onClick} onKeyDown={onKeyDown} aria-label="Option" />);
    const input = screen.getByRole('checkbox', { name: 'Option' });

    fireEvent.click(input);
    fireEvent.keyDown(input, { key: ' ' });

    expect(input).not.toBeChecked();
    expect(input).toHaveAttribute('aria-readonly', 'true');
    expect(input).toHaveAttribute('data-read-only', '');
    expect(onChange).not.toHaveBeenCalled();
    expect(onClick.mock.calls[0][0].isDefaultPrevented()).toBe(true);
    expect(onKeyDown.mock.calls[0][0].isDefaultPrevented()).toBe(true);

    input.focus();
    expect(input).toHaveFocus();
  });

  it('includes a checked readOnly checkbox in form data', () => {
    const { container } = render(
      <form>
        <CheckBox name="option" value="yes" defaultChecked readOnly aria-label="Option" />
        <CheckBox name="disabled-option" value="no" defaultChecked disabled aria-label="Disabled option" />
      </form>,
    );
    const form = container.querySelector('form');

    expect(form).not.toBeNull();
    expect(Object.fromEntries(new FormData(form!))).toEqual({ option: 'yes' });
  });

  it('marks error state as invalid', () => {
    render(<CheckBox error aria-label="Option" />);

    expect(screen.getByRole('checkbox', { name: 'Option' })).toHaveAttribute('aria-invalid', 'true');
  });

  it('allows user accessibility attributes to override defaults', () => {
    render(
      <CheckBox
        error
        indeterminate
        extraText="Дополнительный текст"
        aria-checked="true"
        aria-describedby="custom-description"
        aria-invalid="false"
        aria-labelledby="custom-label"
        aria-readonly="false"
      >
        CheckBox
      </CheckBox>,
    );

    const input = screen.getByRole('checkbox');

    expect(input).toHaveAttribute('aria-checked', 'true');
    expect(input).toHaveAttribute('aria-describedby', 'custom-description');
    expect(input).toHaveAttribute('aria-invalid', 'false');
    expect(input).toHaveAttribute('aria-labelledby', 'custom-label');
    expect(input).toHaveAttribute('aria-readonly', 'false');
  });
});
