import { test, expect } from '@playwright/test';

test('Check if the login form works correctly by verifying that entering valid credentials logs the user in.', async ({ page }) => {
  // Going into testing playground
  await page.goto('/');
  // Enter valid credentials
  await page.locator('iframe[title="sandbox"]').contentFrame().getByPlaceholder('Enter email').fill('example@example.com');
  await page.locator('iframe[title="sandbox"]').contentFrame().getByPlaceholder('Password').fill('passwrod');
  await page.locator('iframe[title="sandbox"]').contentFrame().getByPlaceholder('Enter email').press('Enter');

  // Example: Wait for the user to be redirected to the dashboard or homepage
  await page.waitForURL('/'); // Replace with the URL of the page after successful login

  await page.screenshot({ path: 'logged_in_state.png' });


  // TBD
});
