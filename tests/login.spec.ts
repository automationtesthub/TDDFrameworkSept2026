
import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { HomePage } from '../pages/homepage';

//import { getTestData } from '../utility/csv_reader';
import { getTestData } from '../utility/excel_reader';




test('TC01_invalid_Login_test', async ({ page }) => {
   const td = getTestData('TC01_invalid_Login_test');
  // Navigate to the login page
   await page.goto('/'); 
   const loginPage = new LoginPage(page);
   await loginPage.login(td['Username'], td['Password']);
   await expect(loginPage.verifyErrorMsg()).toBeTruthy();
 
});

test('TC02_valid_Login_test', async ({ page }) => {
  // Navigate to the login page
  const td = getTestData('TC02_valid_Login_test');
   await page.goto('/'); 
  const loginPage =  new LoginPage(page);
   await loginPage.login(td['Username'], td['Password']);
   await expect(page.locator('//a[text()="Logout"]')).toBeVisible();
   const homePage = new HomePage(page);
    await expect(homePage.verifyHomeLink()).toBeTruthy();
 
});

// //write above code using function keyword instead of arrow function
// //import {test, expect} from '@playwright/test';
// test('Login test123', async function({ page }) {
//   // Navigate to the login page
//   await page.goto('https://example.com/login'); 
// });
