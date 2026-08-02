import { useState } from 'react';

import type { PlaygroundScenario } from './index';
import { RadioButton } from '../../src/components/RadioButton';

const ReadOnlyGroupScenario = () => {
  const [value, setValue] = useState('first');
  const [changeCount, setChangeCount] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setChangeCount((count) => count + 1);
  };

  return (
    <>
      <RadioButton
        data-testid="first"
        name="readonly-group"
        value="first"
        checked={value === 'first'}
        readOnly
        onChange={handleChange}
      >
        First
      </RadioButton>
      <RadioButton
        data-testid="readonly"
        name="readonly-group"
        value="readonly"
        checked={value === 'readonly'}
        readOnly
        onChange={handleChange}
      >
        Read only
      </RadioButton>
      <RadioButton
        data-testid="last"
        name="readonly-group"
        value="last"
        checked={value === 'last'}
        readOnly
        onChange={handleChange}
      >
        Last
      </RadioButton>
      <output data-testid="value">{value}</output>
      <output data-testid="change-count">{changeCount}</output>
    </>
  );
};

export const radioButtonScenarios: PlaygroundScenario[] = [
  {
    id: 'radio-button/default',
    title: 'RadioButton Default',
    render: () => (
      <RadioButton data-testid="radio-button" name="default">
        RadioButton
      </RadioButton>
    ),
  },
  {
    id: 'radio-button/fieldset',
    title: 'RadioButton in Fieldset',
    render: () => (
      <fieldset data-testid="fieldset" data-dimension="xs" disabled>
        <RadioButton data-testid="radio-button" defaultChecked>
          RadioButton
        </RadioButton>
      </fieldset>
    ),
  },
  {
    id: 'radio-button/readonly-group',
    title: 'RadioButton ReadOnly Group',
    render: () => <ReadOnlyGroupScenario />,
  },
];
