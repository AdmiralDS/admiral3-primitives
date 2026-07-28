import type { CheckBoxProps } from '@admiral-ds/admiral3-primitives';

import type { PlaygroundScenario } from './index';
import { CheckBoxPlaygroundTemplate } from '../../src/components/CheckBox/stories/CheckBoxPlayground.template';
import { CheckBoxStatesTemplate } from '../../src/components/CheckBox/stories/CheckBoxStates.template';

const defaultArgs: CheckBoxProps = {
  children: 'Подпись CheckBox',
};

export const checkBoxScenarios: PlaygroundScenario[] = [
  {
    id: 'check-box/default',
    title: 'CheckBox Default',
    render: () => <CheckBoxPlaygroundTemplate {...defaultArgs} data-testid="check-box" />,
  },
  {
    id: 'check-box/states',
    title: 'CheckBox States',
    render: () => <CheckBoxStatesTemplate {...defaultArgs} />,
  },
];
