import { expect, test } from '@playwright/test';

import { getPlaygroundScenarioPath, resolveCssColorToken } from '../utils';

test.describe('RadioButton playground', () => {
  test('activates the native radio with Space', async ({ page }) => {
    await page.goto(getPlaygroundScenarioPath('radio-button/default'));

    const input = page.getByTestId('radio-button');
    await expect(input).toBeVisible();
    await expect(input).not.toBeChecked();
    await input.focus();
    await page.keyboard.press('Space');
    await expect(input).toBeChecked();
  });

  test('inherits dimension and disabled state from fieldset', async ({ page }) => {
    await page.goto(getPlaygroundScenarioPath('radio-button/fieldset'));

    const input = page.locator("fieldset[data-dimension='xs']").getByRole('radio', { name: 'Курьером' });
    const control = input.locator('xpath=following-sibling::span[1]');
    await resolveCssColorToken(page, '--admiral-color-primary-base-1-disable');

    await expect(input).toBeDisabled();
    await expect(control).toHaveCSS('width', '14px');
    await expect(control).toHaveCSS('height', '14px');
    await expect(control).toHaveCSS('box-shadow', /0px 0px 0px 3px.*inset/);
  });

  test('activates regular radios with arrow keys', async ({ page }) => {
    await page.goto(getPlaygroundScenarioPath('radio-button/fieldset'));

    const fieldset = page.locator('fieldset').first();
    const first = fieldset.getByRole('radio', { name: 'Курьером' });
    const second = fieldset.getByRole('radio', { name: 'Самовывоз' });

    await expect(first).toBeChecked();
    await expect(second).not.toBeChecked();

    await first.focus();
    await expect(first).toBeFocused();

    await page.keyboard.press('ArrowRight');
    await expect(first).not.toBeChecked();
    await expect(second).toBeChecked();
    await expect(second).toBeFocused();

    await page.keyboard.press('ArrowLeft');
    await expect(first).toBeFocused();
    await expect(first).toBeChecked();
    await expect(second).not.toBeChecked();
  });

  test('navigates across a readOnly group without changing its value', async ({ page }) => {
    await page.goto(getPlaygroundScenarioPath('radio-button/readonly-fieldset'));

    const first = page.getByRole('radio', { name: 'Курьером' });
    const second = page.getByRole('radio', { name: 'Самовывоз' });
    const third = page.getByRole('radio', { name: 'Почтой' });

    await expect(first).toHaveAttribute('aria-readonly', 'true');
    await expect(second).toHaveAttribute('aria-readonly', 'true');
    await expect(third).toHaveAttribute('aria-readonly', 'true');

    await first.focus();
    await expect(first).toBeFocused();
    await page.keyboard.press('ArrowRight');

    await expect(second).toBeFocused();
    await expect(second).not.toBeChecked();
    await expect(first).toBeChecked();

    await page.keyboard.press('Space');

    await expect(second).not.toBeChecked();
    await expect(first).toBeChecked();
  });

  test('renders unlabeled table controls at the correct sizes', async ({ page }) => {
    await page.goto(getPlaygroundScenarioPath('radio-button/table'));

    const expectedSizes = {
      m: { control: '20px', label: '24px' },
      s: { control: '16px', label: '20px' },
      xs: { control: '14px', label: '16px' },
    } as const;

    for (const [dimension, size] of Object.entries(expectedSizes)) {
      const input = page.getByTestId(`table-radio-${dimension}`);
      const control = input.locator('xpath=following-sibling::span[1]');
      const label = input.locator('xpath=..');

      await expect(control).toHaveCSS('width', size.control);
      await expect(control).toHaveCSS('height', size.control);
      await expect(label).toHaveCSS('width', size.control);
      await expect(label).toHaveCSS('height', size.label);
    }
  });
});
