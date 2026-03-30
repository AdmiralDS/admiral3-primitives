import { ExampleComponent } from '@admiral-ds/admiral3-primitives';

import type { ExampleComponentProps } from '../ExampleComponent';

export const ExampleComponentPlaygroundTemplate = (args: ExampleComponentProps) => {
  return <ExampleComponent {...args} />;
};
