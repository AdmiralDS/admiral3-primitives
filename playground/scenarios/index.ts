import type { ReactElement } from 'react';

import { badgeScenarios } from './badge';
import { badgeDotScenarios } from './badge-dot';
import { buttonScenarios } from './button';
import { checkBoxScenarios } from './check-box';
import { linkScenarios } from './link';
import { skeletonScenarios } from './skeleton';
import { spinnerScenarios } from './spinner';

export type PlaygroundScenario = {
  id: string;
  title: string;
  render: () => ReactElement;
};

export const playgroundScenarios = [
  ...badgeDotScenarios,
  ...badgeScenarios,
  ...buttonScenarios,
  ...linkScenarios,
  ...skeletonScenarios,
  ...spinnerScenarios,
  ...checkBoxScenarios,
];
