// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react-vite';

import { TemplateName, type TemplateNameProps } from '@admiral-ds/admiral3-primitives';

import { TemplateNamePlaygroundTemplate } from './TemplateNamePlayground.template';
import templateNamePlaygroundTemplateRaw from './TemplateNamePlayground.template?raw';

const meta = {
  title: 'Components/TemplateName',
  component: TemplateName,
  tags: ['autodocs'],
} satisfies Meta<typeof TemplateName>;

export default meta;

const defaultArgs: TemplateNameProps = {
  children: 'TemplateName',
};

export const Playground: StoryObj<TemplateNameProps> = {
  args: defaultArgs,
  render: TemplateNamePlaygroundTemplate,
  parameters: {
    docs: {
      source: {
        code: templateNamePlaygroundTemplateRaw,
      },
    },
  },
};
