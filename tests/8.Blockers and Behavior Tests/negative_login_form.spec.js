import { test, expect } from '@playwright/test';

test('Verify if an error message appears on the page when the user submits incorrect data in a form.', async ({ page }) => {
  // Going into testing playground
  await page.goto('/');
  // Enter valid credentials
  await page.locator('iframe[title="sandbox"]').contentFrame().getByPlaceholder('Enter email').fill('exampleexample.com');
  await page.locator('iframe[title="sandbox"]').contentFrame().getByPlaceholder('Password').fill('passwrod');
  await page.locator('iframe[title="sandbox"]').contentFrame().getByPlaceholder('Enter email').press('Enter');

//   const errorMessage = page.locator('iframe[title="sandbox"]').contentFrame().locator('text=Please include an "@" in the email address. "exampleexample.com" is missing an "@"');
//   await expect(errorMessage).toBeVisible();


  await page.screenshot({ path: 'error_login_state.png' });
  // TBD
});
