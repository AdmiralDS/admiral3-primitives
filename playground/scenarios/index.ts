import type { ReactElement } from 'react';

import { exampleComponentScenarios } from './example-component';

export type PlaygroundScenario = {
  id: string;
  title: string;
  render: () => ReactElement;
};

export const playgroundScenarios = [...exampleComponentScenarios];
