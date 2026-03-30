import { expect, test } from '@playwright/test';

import { getPlaygroundScenarioPath, resolveCssColorToken } from '../utils';

const infoScenarioId = 'badge-dot/info';
const customColorsScenarioId = 'badge-dot/custom-colors';
const infoBackgroundColorToken = '--admiral-color-base-primary-base1-rest';
const customBackgroundColorToken = '--admiral-color-base-extra-blue-base1-rest';

test.describe('BadgeDot playground', () => {
  test('resolves token colors and layout size in the browser', async ({ page }) => {
    await page.goto(getPlaygroundScenarioPath(infoScenarioId));

    const dot = page.getByTestId('badge-dot');
    const expectedBackgroundColor = await resolveCssColorToken(page, infoBackgroundColorToken);

    await expect(dot).toBeVisible();
    await expect(dot).toHaveCSS('background-color', expectedBackgroundColor);
    await expect(dot).toHaveCSS('width', '18px');
    await expect(dot).toHaveCSS('height', '18px');

    const box = await dot.boundingBox();
    expect(box).not.toBeNull();
    expect(box?.width).toBeCloseTo(18, 1);
    expect(box?.height).toBeCloseTo(18, 1);

    await page.locator('#playground-theme').selectOption('dark');
    await expect(page.locator('[data-admiral-theme]')).toHaveAttribute('data-admiral-theme', 'dark');

    const expectedDarkBackgroundColor = await resolveCssColorToken(page, infoBackgroundColorToken);

    await expect(dot).toHaveCSS('background-color', expectedDarkBackgroundColor);
  });

  test('resolves custom color config in the browser', async ({ page }) => {
    await page.goto(getPlaygroundScenarioPath(customColorsScenarioId));

    const dot = page.getByTestId('badge-dot');
    const expectedBackgroundColor = await resolveCssColorToken(page, customBackgroundColorToken);

    await expect(dot).toHaveAttribute('data-appearance', 'custom');
    await expect(dot).toHaveCSS('background-color', expectedBackgroundColor);

    await page.locator('#playground-theme').selectOption('dark');
    await expect(page.locator('[data-admiral-theme]')).toHaveAttribute('data-admiral-theme', 'dark');

    const expectedDarkBackgroundColor = await resolveCssColorToken(page, customBackgroundColorToken);

    await expect(dot).toHaveCSS('background-color', expectedDarkBackgroundColor);
  });
});
