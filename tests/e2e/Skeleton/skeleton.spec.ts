import { expect, test } from '@playwright/test';

import { getPlaygroundScenarioPath } from '../utils';

const defaultScenarioId = 'skeleton/default';

test.describe('Skeleton playground', () => {
  test('renders default playground scenario', async ({ page }) => {
    await page.goto(getPlaygroundScenarioPath(defaultScenarioId));

    const component = page.getByTestId('skeleton');

    await expect(component).toBeVisible();
    await expect(component).toHaveText('Skeleton');
  });
});
