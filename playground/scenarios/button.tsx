import type { PlaygroundScenario } from './index';
import type { ButtonProps } from '../../src/components/Button';
import { ButtonPlaygroundTemplate } from '../../src/components/Button/stories/ButtonPlayground.template';

const defaultArgs: ButtonProps = {
  children: 'Button',
};

export const buttonScenarios: PlaygroundScenario[] = [
  {
    id: 'button/default',
    title: 'Button Default',
    render: () => <ButtonPlaygroundTemplate {...defaultArgs} data-testid="button" />,
  },
];
