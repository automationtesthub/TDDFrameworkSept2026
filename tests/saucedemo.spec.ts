import { test, expect } from '@playwright/test';

test('try_problem_user_in_saucelab', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.waitForTimeout(2000);
  await page.locator('//*[@id="user-name"]').fill("problem_user");
  await page.locator('//*[@id="password"]').fill("secret_sauce");
  await page.locator("#login-button").click();
  await expect(page.getByText('Swag Labs')).toBeVisible();
  await page.locator('//*[@id="add-to-cart-sauce-labs-backpack"]').click();
  await page.waitForTimeout(2000);
  //await page.locator('//*[@id="inventory_container"]').click();
  await page.locator('//*[@id="inventory_container"]/div/div[3]/div[2]').click();
  await page.waitForTimeout(2000);   
  await page.locator('//*[@id="add-to-cart-sauce-labs-fleece-jacket"]').click();
  await page.waitForTimeout(2000);
  await page.locator('//*[@id="shopping_cart_container"]/a').click();
  await page.waitForTimeout(2000);
  await expect(page.getByText('Your Cart')).toBeVisible();
  await page.locator('//*[@id="checkout"]').click();
  
  //await page.locator('//*[@id="remove-sauce-labs-backpack"]').click();
});

test('try_problem_user_in_saucelab', async ({ page }) => {
  await page.goto('/');

  await page.locator('#user-name').fill('problem_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  await expect(page.locator('.inventory_list')).toBeVisible();
  const productButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
  await productButton.click();

  await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});
