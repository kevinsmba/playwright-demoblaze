import { test, expect } from '@playwright/test';

test('Given I visit the DemoBlaze homepage', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.locator('.list-group-item:text("Phones")').click();
  const locator = page.locator('#tbodyid > div');
  await expect(locator).toHaveCount(7);
})