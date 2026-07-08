import type { ButtonProps } from '@admiral-ds/admiral3-primitives';

import type { PlaygroundScenario } from './index';
import { ButtonDirtyTemplate } from '../../src/components/Button/stories/ButtonDirty.template';

const defaultArgs: ButtonProps = {
  children: 'Button',
  appearance: 'solid',
  colorMode: 'colored',
  dimension: 'm',
};

const customColorConfig: ButtonProps['colorConfig'] = {
  borderColor: 'var(--admiral-color-error-stroke-1-rest)',
  textColor: 'var(--admiral-color-error-text-1-rest)',
};

export const buttonScenarios: PlaygroundScenario[] = [
  {
    id: 'button/default',
    title: 'Button Default',
    render: () => <ButtonDirtyTemplate {...defaultArgs} data-testid="button" />,
  },
  {
    id: 'button/styling/solid',
    title: 'Button Solid',
    render: () => <ButtonDirtyTemplate {...defaultArgs} dimension="s" data-testid="button" />,
  },
  {
    id: 'button/styling/colorConfig',
    title: 'Button Outline with Custom Colors',
    render: () => (
      <ButtonDirtyTemplate {...defaultArgs} appearance="outline" colorConfig={customColorConfig} data-testid="button" />
    ),
  },
  {
    id: 'button/fallback',
    title: 'Button with appearance fallback',
    render: () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return <ButtonDirtyTemplate {...defaultArgs} colorMode={'staticWhite' as any} data-testid="button" />;
    },
  },
  {
    id: 'button/state/loading',
    title: 'Button Loading',
    render: () => <ButtonDirtyTemplate {...defaultArgs} loading data-testid="button" />,
  },
  {
    id: 'button/state/displayAsDisabled',
    title: 'Disabled and DisplayAsDisabled Buttons',
    render: () => <ButtonDirtyTemplate {...defaultArgs} displayAsDisabled data-testid="button" />,
  },
];
