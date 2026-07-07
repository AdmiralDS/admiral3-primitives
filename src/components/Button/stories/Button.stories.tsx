import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button, type ButtonProps, type ButtonAppearance, type ButtonColorMode } from '@admiral-ds/admiral3-primitives';

import { ButtonAppereancesTemplate } from './ButtonAppearances.template';
import buttonAppereancesTemplateRaw from './ButtonAppearances.template?raw';
import { ButtonCustomColorTemplate } from './ButtonCustomColor.template';
import buttonCustomColorTemplateRaw from './ButtonCustomColor.template?raw';
import { ButtonIconBadgeTemplate } from './ButtonIconBadge.template';
import buttonIconBadgeTemplateRaw from './ButtonIconBadge.template?raw';
import { ButtonPlaygroundTemplate } from './ButtonPlayground.template';
import buttonPlaygroundTemplateRaw from './ButtonPlayground.template?raw';
import { ButtonStatesTemplate } from './ButtonStates.template';
import buttonStatesTemplateRaw from './ButtonStates.template?raw';
import { BUTTON_APPEARANCES, BUTTON_COLOR_MODES, BUTTON_DIMENSIONS } from '../constants';

// Создаем плоский тип (без discriminated unions) специально для Storybook args
type StorybookButtonProps = Omit<ButtonProps, 'appearance' | 'colorMode'> & {
  appearance?: ButtonAppearance;
  colorMode?: ButtonColorMode;
};

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    appearance: {
      control: { type: 'inline-radio' },
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
    disabled: {
      control: { type: 'boolean' },
    },
    displayAsDisabled: {
      control: { type: 'boolean' },
    },
    displayAsSquare: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

const defaultArgs: StorybookButtonProps = {
  children: 'Button',
  appearance: 'solid',
  colorMode: 'colored',
  dimension: 'm',
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

export const Appereances: StoryObj<StorybookButtonProps> = {
  args: defaultArgs,
  render: (args) => <ButtonAppereancesTemplate {...(args as ButtonProps)} />,

  parameters: {
    controls: {
      exclude: ['appereance', 'colorMode'],
    },
    docs: {
      source: {
        code: buttonAppereancesTemplateRaw,
      },
    },
  },
};

export const WithIconBadge: StoryObj<StorybookButtonProps> = {
  args: defaultArgs,
  render: (args) => <ButtonIconBadgeTemplate {...(args as ButtonProps)} />,

  parameters: {
    controls: {
      exclude: ['children'],
    },
    docs: {
      source: {
        code: buttonIconBadgeTemplateRaw,
      },
    },
  },
};

export const CustomColor: StoryObj<StorybookButtonProps> = {
  args: defaultArgs,
  render: (args) => <ButtonCustomColorTemplate {...(args as ButtonProps)} />,

  parameters: {
    // controls: {
    //   exclude: ['appearance'],
    // },
    docs: {
      source: {
        code: buttonCustomColorTemplateRaw,
      },
    },
  },
};

export const States: StoryObj<StorybookButtonProps> = {
  args: defaultArgs,
  render: (args) => <ButtonStatesTemplate {...(args as ButtonProps)} />,

  parameters: {
    controls: {
      exclude: ['disabled', 'displayAsDisabled', 'loading', 'skeleton'],
    },
    docs: {
      source: {
        code: buttonStatesTemplateRaw,
      },
    },
  },
};
