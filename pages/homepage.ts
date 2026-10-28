export class HomePage {
  inventoryList = '.inventory_list';
  burgerMenu = '#react-burger-menu-btn';
  logoutLink = '#logout_sidebar_link';

  page: any;

  constructor(page: any) {
    this.page = page;
  }

  async verifyHomeLink(): Promise<boolean> {
    return await this.page.locator(this.inventoryList).isVisible();
  }

  async verifyLogoutLink(): Promise<boolean> {
    await this.page.locator(this.burgerMenu).click();
    return await this.page.locator(this.logoutLink).isVisible();
  }

  async clickLogoutLink() {
    await this.page.locator(this.burgerMenu).click();
    await this.page.locator(this.logoutLink).click();
  }
}
