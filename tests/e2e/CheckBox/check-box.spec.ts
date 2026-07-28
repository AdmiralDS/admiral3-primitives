import { expect, test } from '@playwright/test';

import { getPlaygroundScenarioPath, resolveCssColorToken } from '../utils';

const defaultScenarioId = 'check-box/default';
const statesScenarioId = 'check-box/states';

test.describe('CheckBox playground', () => {
  test('supports mouse and keyboard interaction and resolves theme colors', async ({ page }) => {
    await page.goto(getPlaygroundScenarioPath(defaultScenarioId));

    const input = page.getByTestId('check-box');
    const label = input.locator('xpath=..');
    const control = input.locator('xpath=following-sibling::span[1]');
    const expectedColor = await resolveCssColorToken(page, '--admiral-color-primary-base-1-rest');

    await expect(label).toBeVisible();
    await expect(label).toHaveAttribute('data-dimension', 'm');

    await label.click();
    await expect(input).toBeChecked();
    await page.mouse.move(0, 0);
    await expect(control).toHaveCSS('background-color', expectedColor);

    await input.focus();
    await page.keyboard.press('Space');
    await expect(input).not.toBeChecked();

    await page.locator('#playground-theme').selectOption('dark');
    const expectedDarkColor = await resolveCssColorToken(page, '--admiral-color-primary-base-1-rest');

    await label.click();
    await page.mouse.move(0, 0);
    await expect(control).toHaveCSS('background-color', expectedDarkColor);
  });

  test('renders indeterminate, error, disabled and readOnly states', async ({ page }) => {
    await page.goto(getPlaygroundScenarioPath(statesScenarioId));

    const indeterminate = page.getByRole('checkbox', { name: 'Частично выбран' });
    const error = page.getByRole('checkbox', { name: 'Ошибка' });
    const disabled = page.getByRole('checkbox', { name: 'Отключён', exact: true });
    const readOnly = page.getByRole('checkbox', { name: 'Только для чтения' });

    await expect(indeterminate).toHaveJSProperty('indeterminate', true);
    await expect(indeterminate).toHaveAttribute('aria-checked', 'mixed');
    await expect(error).toHaveAttribute('aria-invalid', 'true');
    await expect(disabled).toBeDisabled();
    await expect(readOnly).toBeChecked();

    await readOnly.locator('xpath=..').click();
    await expect(readOnly).toBeChecked();
  });
});
