import { test, expect } from '@playwright/test';

test('Check visibility of main elements on Testing Playground', async ({ page }) => {
  // 1. Przejdź na stronę
  await page.goto('/');


  for (let element of elements) {
    const tagName = await element.evaluate(el => el.tagName); // Pobieramy nazwę tagu
    console.log(tagName);  // Wypisujemy nazwę tagu

    // Możesz też dodać inne właściwości, np. klasę lub id
    const className = await element.evaluate(el => el.className);
    const id = await element.evaluate(el => el.id);
    
    if (className) console.log(`Class: ${className}`);
    if (id) console.log(`ID: ${id}`);
  }

});
