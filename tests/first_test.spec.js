const { test, expect } = require('@playwright/test');

test('Sprawdź, czy tekst Playwright jest na stronie', async ({ page }) => {
  // Przejdź do strony
  await page.goto('https://playwright.dev/');

  // Sprawdź, czy strona zawiera tekst 'Playwright'
  const text = await page.textContent('body');
  expect(text).toContain('Playwright');
});