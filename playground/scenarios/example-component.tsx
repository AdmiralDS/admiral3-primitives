import type { PlaygroundScenario } from './index';
import type { ExampleComponentProps } from '../../src/components/ExampleComponent';
import { ExampleComponentDirtyTemplate } from '../../src/components/ExampleComponent/stories/ExampleComponentDirty.template';
import { ExampleComponentPlaygroundTemplate } from '../../src/components/ExampleComponent/stories/ExampleComponentPlayground.template';

const defaultArgs: ExampleComponentProps = {
  children: 'Button',
  appearance: 'primary',
  disabled: false,
};

export const exampleComponentScenarios: PlaygroundScenario[] = [
  {
    id: 'example-component/default',
    title: 'ExampleComponent Default',
    render: () => <ExampleComponentPlaygroundTemplate {...defaultArgs} />,
  },
  {
    id: 'example-component/disabled',
    title: 'ExampleComponent Disabled',
    render: () => (
      <ExampleComponentPlaygroundTemplate {...defaultArgs} disabled>
        Disabled button
      </ExampleComponentPlaygroundTemplate>
    ),
  },
  {
    id: 'example-component/dirty',
    title: 'ExampleComponent Dirty',
    render: () => <ExampleComponentDirtyTemplate {...defaultArgs}>Dirty button</ExampleComponentDirtyTemplate>,
  },
];
