import{test,expect,Locator} from '@playwright/test';
test("verify Flipkart app:", async({page})=>{
await page.goto('https://www.flipkart.com/');
page.locator("//span[@class='b3wTlE']").click();
await page.waitForTimeout(3000);

const Searchbox= page.locator("input[title='Search for Products, Brands and More']").click();
await expect(Searchbox).toBeVisible();

await Searchbox.fill("One Plus 5g");
await page.waitForTimeout(3000);
await page.locator("//button[@type='submit' and @aria-label='Search for Products, Brands and More']").click();
})