import { test, expect } from '@playwright/test';



test('Elements verification in the Homepage', async ({ page }) => {
  const locator = page.locator('#tbodyid > div');

  await test.step('Given I visit the DemoBlaze homepage', async () => {
    await page.goto('');
  })
  await test.step('When The Phones page list is clicked', async () => {
    await page.getByRole('link', { name: 'Phones' }).click();
  })
  await test.step('Then Verify that the elements in the page are exactly 7', async () => {
    await expect(locator).toHaveCount(7);
  })
})
