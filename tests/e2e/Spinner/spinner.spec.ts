import { expect, test } from '@playwright/test';

import { getPlaygroundScenarioPath } from '../utils';

const defaultScenarioId = 'spinner/default';

test.describe('Spinner playground', () => {
  test('renders default playground scenario', async ({ page }) => {
    await page.goto(getPlaygroundScenarioPath(defaultScenarioId));

    const component = page.getByTestId('spinner');

    await expect(component).toBeVisible();
    await expect(component).toHaveText('Spinner');
  });
});
