import { test, expect } from '@playwright/test';

test('Check visibility of main elements on Testing Playground', async ({ page }) => {
  // 1. Przejdź na stronę
  await page.goto('/');

  // Found elements
  const header = page.locator('h1'); 
  const form = page.locator('form'); // Formularz, jeśli istnieje

  // **Expected** values
  const expected = {
    header: true,
    form: true
  };

  // **Actual** values
  const actual = {
    header: await header.isVisible(), 
    form: await form.isVisible(), 
  };


  // **Logs**
  console.log('--- Form Analysis ---');
  for (const key in expected) {
    const pass = expected[key] === actual[key];
    console.log(
      `${key}: Expected = ${expected[key]}, Actual = ${actual[key]} --> ${pass ? '✅ PASS' : '❌ FAIL'}`
    );
    expect(actual[key]).toBe(expected[key]); // Finalne sprawdzenie
  }

});
