import { expect, test } from '@playwright/test';

import { getPlaygroundScenarioPath, resolveCssColorToken } from '../utils';

const defaultScenarioId = 'button/default';
const solidScenarioId = 'button/styling/solid';
const customColorsScenarioId = 'button/styling/colorConfig';
const loadingScenarioId = 'button/state/loading';
const disabledScenarioId = 'button/state/displayAsDisabled';
const fallbackScenarioId = 'button/fallback';
const solidBackgroundColorToken = '--admiral-color-primary-base-1-rest';
const invisibleBackgroundColorToken = '--admiral-color-neutral-base-invisible-rest';
const staticWhiteTextColorToken = '--admiral-color-neutral-text-static-white-1';
const customTextColorToken = '--admiral-color-error-text-1-rest';
const customBorderColorToken = '--admiral-color-error-stroke-1-rest';

test.describe('Button playground', () => {
  test('responds to click in the browser', async ({ page }) => {
    await page.goto(getPlaygroundScenarioPath(defaultScenarioId));

    const button = page.getByTestId('button');

    await button.evaluate((element) => {
      element.addEventListener('click', () => element.setAttribute('data-clicked', 'true'), { once: true });
    });
    await button.click();
    await expect(button).toHaveAttribute('data-clicked', 'true');
  });

  test('responds to click in the browser when displayAsDisabled', async ({ page }) => {
    await page.goto(getPlaygroundScenarioPath(disabledScenarioId));

    const button = page.getByTestId('button');

    await button.evaluate((element) => {
      element.addEventListener('click', () => element.setAttribute('data-clicked', 'true'), { once: true });
    });
    await button.click();
    await expect(button).toHaveAttribute('data-clicked', 'true');
  });

  test('resolves token colors and layout size in the browser', async ({ page }) => {
    await page.goto(getPlaygroundScenarioPath(solidScenarioId));

    const button = page.getByTestId('button');
    const expectedBackgroundColor = await resolveCssColorToken(page, solidBackgroundColorToken);
    const expectedTextColor = await resolveCssColorToken(page, staticWhiteTextColorToken);

    await expect(button).toBeVisible();
    await expect(button).toHaveCSS('background-color', expectedBackgroundColor);
    await expect(button).toHaveCSS('color', expectedTextColor);
    await expect(button).toHaveCSS('height', '32px');

    const box = await button.boundingBox();
    expect(box).not.toBeNull();
    expect(box?.height).toBeCloseTo(32, 1);

    await page.locator('#playground-theme').selectOption('dark');
    await expect(page.locator('[data-admiral-theme]')).toHaveAttribute('data-admiral-theme', 'dark');

    const expectedDarkBackgroundColor = await resolveCssColorToken(page, solidBackgroundColorToken);

    await expect(button).toHaveCSS('background-color', expectedDarkBackgroundColor);
  });

  test('resolves custom color config in the browser', async ({ page }) => {
    await page.goto(getPlaygroundScenarioPath(customColorsScenarioId));

    const button = page.getByTestId('button');
    const expectedBackgroundColor = await resolveCssColorToken(page, invisibleBackgroundColorToken);
    const expectedTextColor = await resolveCssColorToken(page, customTextColorToken);
    const expectedBorderColor = await resolveCssColorToken(page, customBorderColorToken);

    await expect(button).toHaveAttribute('data-appearance', 'custom');
    await expect(button).toHaveCSS('background-color', expectedBackgroundColor);
    await expect(button).toHaveCSS('color', expectedTextColor);
    await expect(button).toHaveCSS('box-shadow', `${expectedBorderColor} 0px 0px 0px 1px inset`);
  });

  test('sets default cursor and hides content when button state is loading', async ({ page }) => {
    await page.goto(getPlaygroundScenarioPath(loadingScenarioId));

    const button = page.getByTestId('button');
    const content = button.locator('div').last();

    await expect(button).toHaveCSS('pointer-events', 'none');
    await expect(content).toHaveCSS('visibility', 'hidden');
  });

  test('uses fallback colorMode="colored" if user sets incorrect prop modification', async ({ page }) => {
    await page.goto(getPlaygroundScenarioPath(fallbackScenarioId));

    const button = page.getByTestId('button');
    const expectedBackgroundColor = await resolveCssColorToken(page, solidBackgroundColorToken);
    const expectedTextColor = await resolveCssColorToken(page, staticWhiteTextColorToken);

    await expect(button).toBeVisible();
    await expect(button).toHaveAttribute('data-color-mode', 'colored');
    await expect(button).toHaveCSS('background-color', expectedBackgroundColor);
    await expect(button).toHaveCSS('color', expectedTextColor);
  });
});
