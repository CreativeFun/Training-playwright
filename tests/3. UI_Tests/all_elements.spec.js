import { test, expect } from '@playwright/test';

test('Check visibility and list elements', async ({ page }) => {
  // Ładujemy stronę
  await page.goto('/'); // Zmień na odpowiedni URL

  // Pobieramy wszystkie elementy na stronie
  const elements = await page.$$('*');

  // Iterujemy przez wszystkie elementy i wypisujemy szczegóły
  const elementDetails = [];
  
  for (let element of elements) {
    const tagName = await element.evaluate(el => el.tagName); // Nazwa tagu
    const textContent = await element.evaluate(el => el.textContent?.trim() || ''); // Tekst w elemencie
    const className = await element.evaluate(el => el.className); // Klasa CSS
    const id = await element.evaluate(el => el.id); // ID elementu
    const href = await element.evaluate(el => el.href); // Link (jeśli jest)
    
    // Tworzymy obiekt z informacjami o elemencie
    const elementInfo = {
      tagName,
      textContent,
      className: className || 'Brak klasy',
      id: id || 'Brak ID',
      href: href || 'Brak linku',
    };

    // Dodajemy szczegóły elementu do listy
    elementDetails.push(elementInfo);
  }

  // Wypisujemy szczegóły w uporządkowany sposób
  console.log(JSON.stringify(elementDetails, null, 2));
});
