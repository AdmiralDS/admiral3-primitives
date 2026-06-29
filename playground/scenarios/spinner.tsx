import type { SpinnerProps } from '@admiral-ds/admiral3-primitives';

import type { PlaygroundScenario } from './index';
import { SpinnerCustomColorsTemplate } from '../../src/components/Spinner/stories/SpinnerCustomColor.template';
import { SpinnerDirtyTemplate } from '../../src/components/Spinner/stories/SpinnerDirty.template';
import { SpinnerPlaygroundTemplate } from '../../src/components/Spinner/stories/SpinnerPlayground.template';

const defaultArgs: SpinnerProps = {
  appearance: 'colored',
  dimension: 'm',
};

export const badgeScenarios: PlaygroundScenario[] = [
  {
    id: 'spinner/default',
    title: 'Spinner Default',
    render: () => <SpinnerPlaygroundTemplate {...defaultArgs} data-testid="spinner" />,
  },
  {
    id: 'spinner/neutral',
    title: 'Spinner Neutral',
    render: () => (
      <SpinnerPlaygroundTemplate {...defaultArgs} appearance="neutral" dimension="s" data-testid="spinner" />
    ),
  },
  {
    id: 'spinner/custom-colors',
    title: 'Spinner Custom Colors',
    render: () => <SpinnerCustomColorsTemplate {...defaultArgs} data-testid="spinner" />,
  },
  {
    id: 'spinner/dirty',
    title: 'Spinner Dirty',
    render: () => <SpinnerDirtyTemplate {...defaultArgs} />,
  },
];
