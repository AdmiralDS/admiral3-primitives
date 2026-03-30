import type { ReactElement } from 'react';

import { badgeScenarios } from './badge';
import { badgeDotScenarios } from './badge-dot';

export type PlaygroundScenario = {
  id: string;
  title: string;
  render: () => ReactElement;
};

export const playgroundScenarios = [...badgeDotScenarios, ...badgeScenarios];
