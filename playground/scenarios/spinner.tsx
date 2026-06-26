import type { PlaygroundScenario } from './index';
import type { SpinnerProps } from '../../src/components/Spinner';
import { SpinnerPlaygroundTemplate } from '../../src/components/Spinner/stories/SpinnerPlayground.template';

const defaultArgs: SpinnerProps = {
  children: 'Spinner',
};

export const spinnerScenarios: PlaygroundScenario[] = [
  {
    id: 'spinner/default',
    title: 'Spinner Default',
    render: () => <SpinnerPlaygroundTemplate {...defaultArgs} data-testid="spinner" />,
  },
  {
    id: 'spinner/neutral',
    title: 'Spinner Neutral',
    render: () => <SpinnerPlaygroundTemplate {...defaultArgs} color="neutral" data-testid="spinner" />,
  },
  {
    id: 'spinner/inverted',
    title: 'Spinner Inverted',
    render: () => <SpinnerPlaygroundTemplate {...defaultArgs} color="inverted" data-testid="spinner" />,
  },
  {
    id: 'spinner/staticWhite',
    title: 'Spinner Static White',
    render: () => <SpinnerPlaygroundTemplate {...defaultArgs} color="staticWhite" data-testid="spinner" />,
  },
  {
    id: 'spinner/customColor',
    title: 'Spinner Custom Color',
    render: () => (
      <SpinnerPlaygroundTemplate {...defaultArgs} color={{ backgroundColor: 'green' }} data-testid="spinner" />
    ),
  },
];
