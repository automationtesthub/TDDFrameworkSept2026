import { test, expect } from '@playwright/test';

test('verify Flipkart app', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');

  const body = page.locator('body');
  await expect(body).toContainText(/flipkart/i);

  const closeButton = page.getByRole('button', { name: /close/i });
  if (await closeButton.isVisible().catch(() => false)) {
    await closeButton.click();
  }

  await expect(page.locator('body')).toContainText(/flipkart/i);
});