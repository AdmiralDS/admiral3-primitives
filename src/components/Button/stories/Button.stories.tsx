import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button, type ButtonProps } from '@admiral-ds/admiral3-primitives';

import { ButtonPlaygroundTemplate } from './ButtonPlayground.template';
import buttonPlaygroundTemplateRaw from './ButtonPlayground.template?raw';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

const defaultArgs: ButtonProps = {
  children: 'Button',
};

export const Playground: StoryObj<ButtonProps> = {
  args: defaultArgs,
  render: ButtonPlaygroundTemplate,
  parameters: {
    docs: {
      source: {
        code: buttonPlaygroundTemplateRaw,
      },
    },
  },
};
