import type { ReactElement } from 'react';

import { badgeScenarios } from './badge';
import { badgeDotScenarios } from './badge-dot';
import { buttonScenarios } from './button';
import { spinnerScenarios } from './spinner';

export type PlaygroundScenario = {
  id: string;
  title: string;
  render: () => ReactElement;
};

export const playgroundScenarios = [...badgeDotScenarios, ...badgeScenarios, ...buttonScenarios, ...spinnerScenarios];
