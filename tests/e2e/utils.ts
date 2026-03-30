import type { Locator, Page } from '@playwright/test';

import { TIMEOUTS } from './constants';

/** Возвращает путь к internal playground сценарию для e2e. */
export const getPlaygroundScenarioPath = (scenarioId: string) => {
  return `/?scenario=${encodeURIComponent(scenarioId)}`;
};

/**
 * Делает click по элементу и добавляет короткую паузу
 * для сценариев, где после клика нужен небольшой запас на анимацию или UI-обновление.
 */
export async function clickAndWait(el: Locator, page: Page, timeout?: number) {
  await el.click();
  await page.waitForTimeout(timeout || TIMEOUTS.WAIT_DEFAULT);
}
