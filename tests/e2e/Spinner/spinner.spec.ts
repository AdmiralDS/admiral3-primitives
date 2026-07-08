import { expect, test } from '@playwright/test';

import { getPlaygroundScenarioPath, resolveCssColorToken } from '../utils';

const neutralScenarioId = 'spinner/neutral';
const customColorsScenarioId = 'spinner/custom-colors';
const neutralBackgroundColorToken = '--admiral-color-neutral-text-1-rest';
const customBackgroundColorToken = '--admiral-color-purple-base-1-rest';

test.describe('Spinner playground', () => {
  test('resolves token colors and layout size in the browser', async ({ page }) => {
    await page.goto(getPlaygroundScenarioPath(neutralScenarioId));

    const spinner = page.getByTestId('spinner');
    const spinnerPath = spinner.locator('svg path:first-child');
    const expectedBackgroundColor = await resolveCssColorToken(page, neutralBackgroundColorToken);

    await expect(spinner).toBeVisible();
    await expect(spinnerPath).toHaveCSS('fill', expectedBackgroundColor);
    await expect(spinner).toHaveCSS('width', '20px');
    await expect(spinner).toHaveCSS('height', '20px');

    await page.locator('#playground-theme').selectOption('dark');
    await expect(page.locator('[data-admiral-theme]')).toHaveAttribute('data-admiral-theme', 'dark');
    const expectedDarkBackgroundColor = await resolveCssColorToken(page, neutralBackgroundColorToken);
    await expect(spinnerPath).toHaveCSS('fill', expectedDarkBackgroundColor);
  });
  test('resolves custom color config in the browser', async ({ page }) => {
    await page.goto(getPlaygroundScenarioPath(customColorsScenarioId));

    const spinner = page.getByTestId('spinner');
    const spinnerPath = spinner.locator('svg path:first-child');
    const expectedBackgroundColor = await resolveCssColorToken(page, customBackgroundColorToken);
    await expect(spinner).toHaveAttribute('data-appearance', 'custom');
    await expect(spinnerPath).toHaveCSS('fill', expectedBackgroundColor);

    await page.locator('#playground-theme').selectOption('dark');
    await expect(page.locator('[data-admiral-theme]')).toHaveAttribute('data-admiral-theme', 'dark');
    const expectedDarkBackgroundColor = await resolveCssColorToken(page, customBackgroundColorToken);
    await expect(spinnerPath).toHaveCSS('fill', expectedDarkBackgroundColor);
  });
  test('check correct svg path visibility', async ({ page }) => {
    await page.goto(getPlaygroundScenarioPath(customColorsScenarioId));

    const spinner = page.getByTestId('spinner');
    const svgIconPaths = spinner.locator('svg path:not([data-dimension="m"])');

    const pathElements = await svgIconPaths.all();
    expect(pathElements.length).toBeGreaterThan(0);
    for (const path of pathElements) {
      await expect(path).toHaveCSS('display', 'none');
    }
  });
});
