import type { Meta, StoryObj } from '@storybook/react-vite';

import { Spinner, type SpinnerProps } from '@admiral-ds/admiral3-primitives';

import { SpinnerPlaygroundTemplate } from './SpinnerPlayground.template';
import spinnerPlaygroundTemplateRaw from './SpinnerPlayground.template?raw';

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;

export default meta;

const defaultArgs: SpinnerProps = {
  children: 'Spinner',
};

export const Playground: StoryObj<SpinnerProps> = {
  args: defaultArgs,
  render: SpinnerPlaygroundTemplate,
  parameters: {
    docs: {
      source: {
        code: spinnerPlaygroundTemplateRaw,
      },
    },
  },
};
