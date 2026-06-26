import { expect, test } from '@playwright/test';

import { getPlaygroundScenarioPath, resolveCssColorToken } from '../utils';

const infoScenarioId = 'badge/info';
const customColorsScenarioId = 'badge/custom-colors';
const infoBackgroundColorToken = '--admiral-color-base-primary-base1-rest';
const customBackgroundColorToken = '--admiral-color-base-extra-blue-base1-rest';
const staticWhiteTextColorToken = '--admiral-color-text-neutral-static-white-1';

test.describe('Badge playground', () => {
  test('resolves token colors and layout size in the browser', async ({ page }) => {
    await page.goto(getPlaygroundScenarioPath(infoScenarioId));

    const badge = page.getByTestId('badge');
    const expectedBackgroundColor = await resolveCssColorToken(page, infoBackgroundColorToken);
    const expectedTextColor = await resolveCssColorToken(page, staticWhiteTextColorToken);

    await expect(badge).toBeVisible();
    await expect(badge).toHaveCSS('background-color', expectedBackgroundColor);
    await expect(badge).toHaveCSS('color', expectedTextColor);
    await expect(badge).toHaveCSS('min-width', '16px');
    await expect(badge).toHaveCSS('height', '16px');

    const box = await badge.boundingBox();
    expect(box).not.toBeNull();
    expect(box?.height).toBeCloseTo(16, 1);

    await page.locator('#playground-theme').selectOption('dark');
    await expect(page.locator('[data-admiral-theme]')).toHaveAttribute('data-admiral-theme', 'dark');

    const expectedDarkBackgroundColor = await resolveCssColorToken(page, infoBackgroundColorToken);

    await expect(badge).toHaveCSS('background-color', expectedDarkBackgroundColor);
  });

  test('resolves custom color config in the browser', async ({ page }) => {
    await page.goto(getPlaygroundScenarioPath(customColorsScenarioId));

    const badge = page.getByTestId('badge');
    const expectedBackgroundColor = await resolveCssColorToken(page, customBackgroundColorToken);
    const expectedTextColor = await resolveCssColorToken(page, staticWhiteTextColorToken);

    await expect(badge).toHaveAttribute('data-appearance', 'custom');
    await expect(badge).toHaveCSS('background-color', expectedBackgroundColor);
    await expect(badge).toHaveCSS('color', expectedTextColor);

    await page.locator('#playground-theme').selectOption('dark');
    await expect(page.locator('[data-admiral-theme]')).toHaveAttribute('data-admiral-theme', 'dark');

    const expectedDarkBackgroundColor = await resolveCssColorToken(page, customBackgroundColorToken);

    await expect(badge).toHaveCSS('background-color', expectedDarkBackgroundColor);
  });
});
