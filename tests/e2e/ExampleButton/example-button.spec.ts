import { expect, test } from '@playwright/test';

import { getPlaygroundScenarioPath } from '../utils';

const defaultScenarioId = 'example-component/default';
const disabledScenarioId = 'example-component/disabled';
const dirtyScenarioId = 'example-component/dirty';

test.describe('ExampleComponent playground', () => {
  test('renders default scenario in internal playground', async ({ page }) => {
    await page.goto(getPlaygroundScenarioPath(defaultScenarioId));

    await expect(page.getByRole('button', { name: 'Button' })).toBeVisible();
  });

  test('renders disabled scenario in internal playground', async ({ page }) => {
    await page.goto(getPlaygroundScenarioPath(disabledScenarioId));

    await expect(page.getByRole('button', { name: 'Disabled button' })).toBeDisabled();
  });

  test('renders dirty scenario that exists only in internal playground', async ({ page }) => {
    await page.goto(getPlaygroundScenarioPath(dirtyScenarioId));

    await expect(page.getByRole('button', { name: 'Dirty button' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Internal only' })).toBeVisible();
  });
});
