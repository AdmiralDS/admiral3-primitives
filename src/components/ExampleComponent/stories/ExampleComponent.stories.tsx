import type { Meta, StoryObj } from '@storybook/react-vite';

import { ExampleComponent } from '@admiral-ds/admiral3-primitives';

import { ExampleComponentPlaygroundTemplate } from './ExampleComponentPlayground.template';
import type { ExampleComponentProps } from '../ExampleComponent';
import type { ExampleComponentAppearance } from '../types';

const appearanceOptions: ExampleComponentAppearance[] = ['primary', 'secondary'];

const meta = {
  title: 'Components/ExampleComponent',
  component: ExampleComponent,
  argTypes: {
    appearance: {
      control: { type: 'inline-radio' },
      options: appearanceOptions,
    },
    children: {
      control: 'text',
    },
  },
} satisfies Meta<typeof ExampleComponent>;

export default meta;

const defaultArgs: ExampleComponentProps = {
  children: 'Button',
  appearance: 'primary',
  disabled: false,
};

export const Default: StoryObj<ExampleComponentProps> = {
  args: defaultArgs,
  render: ExampleComponentPlaygroundTemplate,
};

export const Disabled: StoryObj<ExampleComponentProps> = {
  args: {
    ...defaultArgs,
    children: 'Disabled button',
    disabled: true,
  },
  render: ExampleComponentPlaygroundTemplate,
};
