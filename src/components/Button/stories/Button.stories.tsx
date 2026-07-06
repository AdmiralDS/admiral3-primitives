import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button, type ButtonProps, type ButtonAppearance, type ButtonColorMode } from '@admiral-ds/admiral3-primitives';

import { ButtonPlaygroundTemplate } from './ButtonPlayground.template';
import buttonPlaygroundTemplateRaw from './ButtonPlayground.template?raw';
import { BUTTON_APPEARANCES, BUTTON_COLOR_MODES, BUTTON_DIMENSIONS } from '../constants';

// 1. Создаем плоский тип специально для Storybook args
type StorybookButtonProps = Omit<ButtonProps, 'appearance' | 'colorMode'> & {
  appearance?: ButtonAppearance;
  colorMode?: ButtonColorMode;
};

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    appearance: {
      control: { type: 'select' },
      options: BUTTON_APPEARANCES,
    },
    colorMode: {
      control: { type: 'inline-radio' },
      options: BUTTON_COLOR_MODES,
    },
    dimension: {
      control: { type: 'inline-radio' },
      options: BUTTON_DIMENSIONS,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

const defaultArgs: StorybookButtonProps = {
  children: 'Button',
};

export const Playground: StoryObj<StorybookButtonProps> = {
  args: defaultArgs,
  render: (args) => <ButtonPlaygroundTemplate {...(args as ButtonProps)} />,

  parameters: {
    docs: {
      source: {
        code: buttonPlaygroundTemplateRaw,
      },
    },
  },
};
