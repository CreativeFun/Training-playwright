import { test, expect } from '@playwright/test';

test('Verify if an error message appears on the page when the user submits incorrect data in a form.', async ({ page }) => {
  // Going into testing playground
  await page.goto('/');
  // Enter valid credentials
  await page.locator('iframe[title="sandbox"]').contentFrame().getByPlaceholder('Enter email').fill('exampleexample.com');
  await page.locator('iframe[title="sandbox"]').contentFrame().getByPlaceholder('Password').fill('passwrod');
  await page.locator('iframe[title="sandbox"]').contentFrame().getByPlaceholder('Enter email').press('Enter');

  // Example: Wait for the user to be redirected to the dashboard or homepage
  await page.waitForURL('/'); // Replace with the URL of the page after successful login

  await page.screenshot({ path: 'logged_in_state.png' });


  // TBD
});
