import { expect, test } from '@playwright/test';

import { getPlaygroundScenarioPath, resolveCssColorToken } from '../utils';

test.describe('Link playground', () => {
  test('resolves colors, dimensions and focus style from tokens', async ({ page }) => {
    await page.goto(getPlaygroundScenarioPath('link/default'));

    const link = page.getByTestId('link');
    const restColor = await resolveCssColorToken(page, '--admiral-color-primary-text-link-rest');
    const hoverColor = await resolveCssColorToken(page, '--admiral-color-primary-text-link-hover');
    const focusColor = await resolveCssColorToken(page, '--admiral-color-primary-base-1-rest');

    await expect(link).toHaveCSS('color', restColor);
    await expect(link).toHaveCSS('font-size', '16px');
    await expect(link).toHaveCSS('line-height', '24px');
    await expect(link).toHaveCSS('gap', '8px');

    await link.hover();
    await expect(link).toHaveCSS('color', hoverColor);

    await link.focus();
    await expect(link).toHaveCSS('outline-color', focusColor);

    await page.locator('#playground-theme').selectOption('dark');
    const darkRestColor = await resolveCssColorToken(page, '--admiral-color-primary-text-link-rest');
    await page.mouse.move(0, 0);
    await expect(link).toHaveCSS('color', darkRestColor);
  });

  test('renders disabled state and blocks navigation', async ({ page }) => {
    await page.goto(getPlaygroundScenarioPath('link/neutral-disabled'));

    const link = page.getByTestId('link');
    const disabledColor = await resolveCssColorToken(page, '--admiral-color-neutral-text-disable-rest');

    await expect(link).toHaveAttribute('aria-disabled', 'true');
    await expect(link).toHaveAttribute('tabindex', '-1');
    await expect(link).toHaveCSS('color', disabledColor);
    await expect(link).toHaveCSS('cursor', 'not-allowed');
  });
});
