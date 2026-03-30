import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ExampleComponent } from './ExampleComponent';

describe('ExampleComponent', () => {
  it('renders children content', () => {
    render(<ExampleComponent>Submit</ExampleComponent>);

    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('uses button type by default', () => {
    render(<ExampleComponent>Default type</ExampleComponent>);

    expect(screen.getByRole('button', { name: 'Default type' })).toHaveAttribute('type', 'button');
  });

  it('forwards button attributes to the root element', () => {
    render(
      <ExampleComponent data-testid="example-button" disabled title="Action">
        Disabled action
      </ExampleComponent>,
    );

    expect(screen.getByTestId('example-button')).toBeDisabled();
    expect(screen.getByTestId('example-button')).toHaveAttribute('title', 'Action');
  });
});
