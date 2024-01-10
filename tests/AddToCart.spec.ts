import { test, expect } from '@playwright/test';
import { Products } from '../helpers/enums/products';


test('Add a product to the cart from the Homepage', async ({ page }) => {

    await test.step('Given I visit the DemoBlaze homepage', async () => {
        await page.goto('https://www.demoblaze.com/');
    })
    await test.step('When the Samsung galaxy s6 product is selected', async () => {
/*        page.on('dialog', async dialog => {
            expect(dialog.message()).toContain('Product added wq323')
            await dialog.dismiss();
        })*/
        await page.getByRole('link', { name: Products.GALAXY_S6, exact: true }).click();
    })
    await test.step('And the product is added to the cart', async () => {
        await page.getByRole('link', { name: "Add to cart", exact: true }).click();
    })
})