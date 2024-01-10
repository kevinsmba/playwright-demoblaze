import { test, expect } from '@playwright/test';
import { Products } from '../helpers/enums/products';
import { MenuOptions } from '../helpers/enums/MenuOpt';


test('Add a product to the cart from the Homepage', async ({ page }) => {

    await test.step('Given I visit the DemoBlaze homepage', async () => {
        await page.goto('');
    })
    await test.step('When the Samsung galaxy s6 product is selected', async () => {
        //page.on('dialog', async dialog => console.log(dialog.message()));
        await page.getByRole('link', { name: Products.GALAXY_S6, exact: true }).click();
    })
    await test.step('And the product is added to the cart', async () => {
        await page.getByRole('link', { name: "Add to cart"}).click();
    })
    await test.step('And goes to the cart page',async () => {
        await page.getByRole('link', {name: MenuOptions.CART, exact: true}).click();
    })
})