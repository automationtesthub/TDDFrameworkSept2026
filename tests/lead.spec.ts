import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { HomePage } from '../pages/homepage';

test('TC03_Create_lead_with_mandatory_fields', async ({ page }) => {
  await page.goto('/');

  const loginPage = new LoginPage(page);
  await loginPage.login('standard_user', 'secret_sauce');

  const homePage = new HomePage(page);
  await expect(await homePage.verifyHomeLink()).toBeTruthy();

  const productButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
  await productButton.click();

  await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  await homePage.clickLogoutLink();
});
