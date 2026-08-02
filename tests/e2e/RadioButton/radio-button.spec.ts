import { expect, test } from '@playwright/test';

import { getPlaygroundScenarioPath, resolveCssColorToken } from '../utils';

test.describe('RadioButton playground', () => {
  test('renders and toggles the native radio', async ({ page }) => {
    await page.goto(getPlaygroundScenarioPath('radio-button/default'));

    const input = page.getByTestId('radio-button');
    await expect(input).toBeVisible();
    await expect(input).not.toBeChecked();
    await input.click();
    await expect(input).toBeChecked();
  });

  test('inherits dimension and disabled state from fieldset', async ({ page }) => {
    await page.goto(getPlaygroundScenarioPath('radio-button/fieldset'));

    const input = page.getByTestId('radio-button');
    const control = input.locator('xpath=following-sibling::span[1]');
    await resolveCssColorToken(page, '--admiral-color-primary-base-1-disable');

    await expect(input).toBeDisabled();
    await expect(control).toHaveCSS('width', '14px');
    await expect(control).toHaveCSS('height', '14px');
    await expect(control).toHaveCSS('box-shadow', /0px 0px 0px 3px.*inset/);
  });

  test('navigates across a readOnly group without changing its value', async ({ page }) => {
    await page.goto(getPlaygroundScenarioPath('radio-button/readonly-group'));

    const first = page.getByTestId('first');
    const readOnly = page.getByTestId('readonly');
    const last = page.getByTestId('last');

    await first.focus();
    await page.keyboard.press('ArrowRight');

    await expect(readOnly).toBeFocused();
    await expect(readOnly).not.toBeChecked();
    await expect(first).toBeChecked();

    await page.keyboard.press('ArrowRight');

    await expect(last).toBeFocused();
    await expect(last).not.toBeChecked();
    await expect(first).toBeChecked();
    await expect(page.getByTestId('value')).toHaveText('first');
    await expect(page.getByTestId('change-count')).toHaveText('0');

    await page.keyboard.press('Space');

    await expect(last).not.toBeChecked();
    await expect(first).toBeChecked();
    await expect(page.getByTestId('value')).toHaveText('first');
    await expect(page.getByTestId('change-count')).toHaveText('0');
  });
});
