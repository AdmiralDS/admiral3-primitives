import type { PlaygroundScenario } from './index';
import type { SkeletonProps } from '../../src/components/Skeleton';
import { SkeletonPlaygroundTemplate } from '../../src/components/Skeleton/stories/SkeletonPlayground.template';

const defaultArgs: SkeletonProps = {
  children: 'Skeleton',
};

export const skeletonScenarios: PlaygroundScenario[] = [
  {
    id: 'skeleton/default',
    title: 'Skeleton Default',
    render: () => <SkeletonPlaygroundTemplate {...defaultArgs} data-testid="skeleton" />,
  },
];
