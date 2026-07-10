import type { Meta, StoryObj } from '@storybook/react-vite';

import { Skeleton, type SkeletonProps } from '@admiral-ds/admiral3-primitives';

import { SkeletonPlaygroundTemplate } from './SkeletonPlayground.template';
import skeletonPlaygroundTemplateRaw from './SkeletonPlayground.template?raw';

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;

const defaultArgs: SkeletonProps = {
  children: 'Skeleton',
};

export const Playground: StoryObj<SkeletonProps> = {
  args: defaultArgs,
  render: SkeletonPlaygroundTemplate,
  parameters: {
    docs: {
      source: {
        code: skeletonPlaygroundTemplateRaw,
      },
    },
  },
};
