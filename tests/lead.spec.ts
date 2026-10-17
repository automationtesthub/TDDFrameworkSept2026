import{test,expect}from'@playwright/test';
import{LoginPage}from'../pages/loginpage';
import { HomePage } from '../pages/homepage';
import { LeadPage } from '../pages/leadpage';
import { getTestData } from '../utility/excel_reader';


test('TC03_Create_lead_with_mandatory_fields',async({page})=>{
 const td = getTestData('TC03_Create_lead_with_mandatory_fields');
    page.goto('/');
    const loginPage=new LoginPage(page);
    await loginPage.login(td['Username'], td['Password']);
    const homepage = new HomePage(page);
    await expect(homepage.verifyHomeLink()).toBeTruthy();
    await homepage.clickNewLeadLink();
    const leadPage = new LeadPage(page);
    await leadPage.createLead(td['Lastname'], td['Company']);
    await page.waitForTimeout(2000);
    
    await homepage.clickLogoutLink();

});
