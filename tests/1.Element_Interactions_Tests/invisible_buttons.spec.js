import { test, expect } from '@playwright/test';

test('Form analysis with expected vs actual comparison', async ({ page }) => {
  // Przejdź do strony z formularzem
  await page.goto('/');

  // Znajdź formularz
  const form = page.locator('form');

  // **Expected** wartości
  const expected = {
    existsInDOM: true,
    isVisible: false,
    isHiddenAttribute: false,
    isInteractive: false,
    isDisabled: false,
    hasActionAttribute: true,
    actionAttributeIsNotNull: true,
  };

  // **Actual** wartości
  const actual = {
    existsInDOM: await form.count() > 0, // Czy formularz istnieje
    isVisible: await form.isVisible().catch(() => false),
    isHiddenAttribute: await form.getAttribute('hidden') !== null,
    isInteractive: await form.isEnabled().catch(() => false),
    isDisabled: await form.isDisabled().catch(() => false),
    hasActionAttribute: await form.getAttribute('action') !== null,
    actionAttributeIsNotNull: (await form.getAttribute('action')) || null !== null,
  };

  // **Analiza i logowanie wyników**
  console.log('--- Form Analysis ---');
  for (const key in expected) {
    const pass = expected[key] === actual[key];
    console.log(
      `${key}: Expected = ${expected[key]}, Actual = ${actual[key]} --> ${pass ? '✅ PASS' : '❌ FAIL'}`
    );
    expect(actual[key]).toBe(expected[key]); // Finalne sprawdzenie
  }
});
