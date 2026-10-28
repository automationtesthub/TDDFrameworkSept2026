export class LoginPage {
  usernameInput = '#user-name';
  passwordInput = '#password';
  loginButton = '#login-button';
  errMsg = '[data-test="error"]';

  page: any;

  constructor(page: any) {
    this.page = page;
  }

  async login(userid: string, password: string) {
    await this.setUserName(userid);
    await this.setPassword(password);
    await this.clickLogin();
  }

  async setUserName(userid: string) {
    await this.page.locator(this.usernameInput).fill(userid);
  }

  async setPassword(password: string) {
    await this.page.locator(this.passwordInput).fill(password);
  }

  async clickLogin() {
    await this.page.locator(this.loginButton).click();
  }

  async verifyErrorMsg(): Promise<boolean> {
    return await this.page.locator(this.errMsg).isVisible();
  }
}
