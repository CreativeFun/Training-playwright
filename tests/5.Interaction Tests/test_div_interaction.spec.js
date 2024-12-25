import { test, expect } from '@playwright/test';

test('Check if clicking a button opens a modal, and if it can be closed by clicking the "Close" button.', async ({ page }) => {
  // Going into testing playground
  await page.goto('/');


  const button = page.locator('button:has-text("expand")');
  // Znajdź i kliknij przycisk, który otwiera modal
  const openModalButton = page.locator('button:has-text("extend")');
  await openModalButton.click();

  // Poczekaj, aż modal stanie się widoczny
  const modal = page.locator('.modal'); // Zmień selektor, jeśli to konieczne
  await expect(modal).toBeVisible();

  // Znajdź i kliknij przycisk "Close"
  const closeButton = modal.locator('button:has-text("Close")');
  await closeButton.click();

  // Sprawdź, czy modal jest niewidoczny
  await expect(modal).not.toBeVisible();
});
