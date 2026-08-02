import { createRef } from 'react';

import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { RADIO_BUTTON_DIMENSIONS } from './constants';
import { RadioButton } from './RadioButton';

describe('RadioButton', () => {
  afterEach(cleanup);

  it('renders a native radio with label and extra text', () => {
    render(
      <RadioButton name="answer" value="yes" extraText="Additional information">
        Yes
      </RadioButton>,
    );

    const input = screen.getByRole('radio', { name: /yes/i });
    expect(input).toHaveAttribute('name', 'answer');
    expect(input).toHaveAttribute('value', 'yes');
    expect(input.closest('label')).not.toBeNull();
    expect(screen.getByText('Additional information')).toBeInTheDocument();
  });

  it('forwards ref to the native input', () => {
    const ref = createRef<HTMLInputElement>();
    render(<RadioButton ref={ref}>Radio</RadioButton>);

    expect(ref.current).toBe(screen.getByRole('radio'));
  });

  it.each(RADIO_BUTTON_DIMENSIONS)('sets %s dimension marker', (dimension) => {
    render(<RadioButton dimension={dimension}>Radio</RadioButton>);

    expect(screen.getByRole('radio').closest('label')).toHaveAttribute('data-dimension', dimension);
  });

  it('supports checked and disabled native states', () => {
    render(
      <RadioButton checked disabled onChange={() => undefined}>
        Radio
      </RadioButton>,
    );

    expect(screen.getByRole('radio')).toBeChecked();
    expect(screen.getByRole('radio')).toBeDisabled();
  });

  it('marks the native radio as invalid in the error state', () => {
    render(<RadioButton error>Radio</RadioButton>);

    expect(screen.getByRole('radio')).toHaveAttribute('aria-invalid', 'true');
  });

  it('does not change checked state when readOnly is clicked', () => {
    const onChange = vi.fn();
    render(
      <RadioButton readOnly onChange={onChange}>
        Radio
      </RadioButton>,
    );

    fireEvent.click(screen.getByRole('radio'));

    expect(screen.getByRole('radio')).not.toBeChecked();
    expect(onChange).not.toHaveBeenCalled();
    expect(screen.getByRole('radio')).toHaveAttribute('aria-readonly', 'true');
  });

  it('does not change checked state or emit change when readOnly is activated with Space', () => {
    const onChange = vi.fn();
    const onKeyDown = vi.fn();
    render(
      <RadioButton readOnly onChange={onChange} onKeyDown={onKeyDown}>
        Radio
      </RadioButton>,
    );

    const radio = screen.getByRole('radio');
    radio.focus();
    fireEvent.keyDown(radio, { key: ' ' });
    fireEvent.click(radio);

    expect(radio).not.toBeChecked();
    expect(onChange).not.toHaveBeenCalled();
    expect(onKeyDown).toHaveBeenCalledOnce();
  });

  it('does not block Enter when readOnly', () => {
    const onKeyDown = vi.fn();
    render(
      <RadioButton readOnly onKeyDown={onKeyDown}>
        Radio
      </RadioButton>,
    );

    const eventResult = fireEvent.keyDown(screen.getByRole('radio'), { key: 'Enter' });

    expect(eventResult).toBe(true);
    expect(onKeyDown).toHaveBeenCalledOnce();
  });

  it('leaves arrow navigation between regular radios to the browser', () => {
    const onKeyDown = vi.fn();
    render(
      <>
        <RadioButton name="group" defaultChecked>
          First
        </RadioButton>
        <RadioButton name="group" onKeyDown={onKeyDown}>
          Second
        </RadioButton>
      </>,
    );

    const second = screen.getByRole('radio', { name: 'Second' });
    second.focus();

    const eventResult = fireEvent.keyDown(second, { key: 'ArrowRight' });

    expect(eventResult).toBe(true);
    expect(onKeyDown).toHaveBeenCalledOnce();
  });

  it('keeps a readOnly group unchanged when another radio is activated', () => {
    const onChange = vi.fn();
    render(
      <>
        <RadioButton name="group" readOnly checked onChange={() => undefined}>
          First
        </RadioButton>
        <RadioButton name="group" readOnly checked={false} onChange={onChange}>
          Second
        </RadioButton>
      </>,
    );

    const first = screen.getByRole('radio', { name: 'First' });
    const second = screen.getByRole('radio', { name: 'Second' });
    fireEvent.click(second);

    expect(first).toBeChecked();
    expect(second).not.toBeChecked();
    expect(onChange).not.toHaveBeenCalled();
  });

  it('inherits native disabled state from fieldset', () => {
    render(
      <fieldset disabled>
        <RadioButton>Radio</RadioButton>
      </fieldset>,
    );

    expect(screen.getByRole('radio')).toBeDisabled();
  });
});
