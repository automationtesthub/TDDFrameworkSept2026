import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { HomePage } from '../pages/homepage';
import { getTestData } from '../utility/csv_reader';

test('TC01_invalid_Login_test', async ({ page }) => {
  const td = getTestData('TC01_invalid_Login_test');
  await page.goto('/');

  const loginPage = new LoginPage(page);
  await loginPage.login(td['Username'], td['Password']);

  await expect(await loginPage.verifyErrorMsg()).toBeTruthy();
});

test('TC02_valid_Login_test', async ({ page }) => {
  const td = getTestData('TC02_valid_Login_test');
  await page.goto('/');

  const loginPage = new LoginPage(page);
  await loginPage.login(td['Username'], td['Password']);

  const homePage = new HomePage(page);
  await expect(await homePage.verifyHomeLink()).toBeTruthy();
  await expect(page.locator('.app_logo')).toHaveText('Swag Labs');
});

