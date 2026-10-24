import { test, expect } from '@playwright/test';

test('Verify saucedemo app test', async ({ page }) => {
  await page.goto('/');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  await expect(page.locator('.inventory_list')).toBeVisible();

  const productButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
  await productButton.click();

  await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
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
