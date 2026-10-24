export class LeadPage {
  firstNameInput = '[data-test="firstName"]';
  lastNameInput = '[data-test="lastName"]';
  postalCodeInput = '[data-test="postalCode"]';
  continueButton = '[data-test="continue"]';
  finishButton = '[data-test="finish"]';

  page: any;

  constructor(page: any) {
    this.page = page;
  }

  async createLead(firstName: string, lastName: string, postalCode: string) {
    await this.page.locator(this.firstNameInput).fill(firstName);
    await this.page.locator(this.lastNameInput).fill(lastName);
    await this.page.locator(this.postalCodeInput).fill(postalCode);
    await this.page.locator(this.continueButton).click();
    await this.page.locator(this.finishButton).click();
  }
}
