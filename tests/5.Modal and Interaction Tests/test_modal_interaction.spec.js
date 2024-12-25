import { test, expect } from '@playwright/test';

test('Check if clicking a button opens a modal, and if it can be closed by clicking the "Close" button.', async ({ page }) => {
  // Going into testing playground
  await page.goto('/');

  // Znajdź i kliknijxprzycisk, który otwiera modal
  const openModalButton = page.locator('button:has-text("Show modal")');
  await openModalButton.click();

  // Sprawdź, czy modal jest widoczny
  const modal = page.locator('.modal'); // Dostosuj selektor do rzeczywistej klasy modala
  await expect(modal).toBeVisible();

  // Znajdź i kliknij przycisk "Close" w modalu
  const closeButton = modal.locator('button:has-text("Close")');
  await closeButton.click();

  // Sprawdź, czy modal jest niewidoczny
  await expect(modal).not.toBeVisible();

});
