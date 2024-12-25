import { test, expect } from '@playwright/test';

test('Check if clicking a button opens a modal, and if it can be closed by clicking the "Close" button.', async ({ page }) => {
  // Going into testing playground
  await page.goto('/');


  const button = page.locator('button:has-text("expand")');
  // Znajdź i kliknij przycisk, który otwiera modal
  const opendivButton = page.locator('button:has-text("extend")');
  // TBD
});
