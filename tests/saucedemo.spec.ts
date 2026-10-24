import{test,expect,} from '@playwright/test';
test("Verify saucedemo app test:",async({page})=>{
await page.goto('https://www.saucedemo.com/');
await page.locator('#user-name').fill('standard_user');
await page.locator('#password').fill('secret_sauce');
await page.locator('#login-button').click();
await page.waitForTimeout(2000);
await page.locator('#item_1_title_link').click();
await page.locator('#add-to-cart').click();
await page.locator('#shopping_cart_container');
await page.waitForTimeout(2000);
await page.locator('#checkout');
await page.locator('#first-name');
await page.locator('#last-name');
await page.locator('#postal-code');
await page.locator('#continue');
await page.waitForTimeout(2000);
await page.locator('#finish');


})
