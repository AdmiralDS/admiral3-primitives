import { expect, test } from '@playwright/test';

import { getPlaygroundScenarioPath, resolveCssColorToken } from '../utils';

const neutralScenarioId = 'spinner/neutral';
const customColorsScenarioId = 'spinner/custom-colors';
const neutralColorToken = '--admiral-color-neutral-text-1-rest';
const customColorToken = '--admiral-color-purple-base-1-rest';

test.describe('Spinner playground', () => {
  test('resolves token colors and layout size in the browser', async ({ page }) => {
    await page.goto(getPlaygroundScenarioPath(neutralScenarioId));

    const spinner = page.getByTestId('spinner');
    const icon = spinner.locator('svg');
    const expectedColor = await resolveCssColorToken(page, neutralColorToken);

    await expect(spinner).toBeVisible();
    await expect(icon).toHaveCSS('color', expectedColor);
    await expect(icon).toHaveCSS('width', '20px');
    await expect(icon).toHaveCSS('height', '20px');

    const box = await spinner.boundingBox();
    expect(box).not.toBeNull();
    expect(box?.width).toBeCloseTo(20, 1);
    expect(box?.height).toBeCloseTo(20, 1);

    await page.locator('#playground-theme').selectOption('dark');
    await expect(page.locator('[data-admiral-theme]')).toHaveAttribute('data-admiral-theme', 'dark');
    const expectedDarkColor = await resolveCssColorToken(page, neutralColorToken);
    await expect(icon).toHaveCSS('color', expectedDarkColor);
  });

  test('resolves custom color config in the browser', async ({ page }) => {
    await page.goto(getPlaygroundScenarioPath(customColorsScenarioId));

    const spinner = page.getByTestId('spinner');
    const icon = spinner.locator('svg');
    const expectedColor = await resolveCssColorToken(page, customColorToken);

    await expect(spinner).toHaveAttribute('data-appearance', 'custom');
    await expect(icon).toHaveCSS('color', expectedColor);

    await page.locator('#playground-theme').selectOption('dark');
    await expect(page.locator('[data-admiral-theme]')).toHaveAttribute('data-admiral-theme', 'dark');
    const expectedDarkColor = await resolveCssColorToken(page, customColorToken);
    await expect(icon).toHaveCSS('color', expectedDarkColor);
  });

  test('shows only the path for the selected dimension', async ({ page }) => {
    await page.goto(getPlaygroundScenarioPath(customColorsScenarioId));

    const spinner = page.getByTestId('spinner');
    const selectedPath = spinner.locator('svg path[data-dimension="m"]');
    const otherPaths = spinner.locator('svg path:not([data-dimension="m"])');

    await expect(selectedPath).not.toHaveCSS('display', 'none');

    const pathElements = await otherPaths.all();
    expect(pathElements.length).toBeGreaterThan(0);
    for (const path of pathElements) {
      await expect(path).toHaveCSS('display', 'none');
    }
  });

  test('disables animation when reduced motion is preferred', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(getPlaygroundScenarioPath(neutralScenarioId));

    await expect(page.getByTestId('spinner').locator('svg')).toHaveCSS('animation-name', 'none');
  });
});
