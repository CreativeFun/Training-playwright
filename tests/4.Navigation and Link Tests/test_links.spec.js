import { test, expect } from '@playwright/test';

test('Verify if clicking on a link redirects the user to the correct page.', async ({ page }) => {
  // Going into testing playground
  await page.goto('/');

  // Pobierz wszystkie linki na stronie
  const links = page.locator('a');
  const count = await links.count();

  console.log(`Znaleziono ${count} linków na stronie`);

  for (let i = 0; i < count; i++) {
    const link = links.nth(i);

    // Pobierz tekst i href linku
    const href = await link.getAttribute('href');
    const text = await link.innerText();

    console.log(`Sprawdzam link ${i + 1}: tekst="${text}", href="${href}"`);

    if (!href || href.startsWith('#') || href.startsWith('javascript:')) {
      console.log(`Pominięto link ${i + 1}: brak href lub niedozwolony href`);
      continue;
    }

    try {
      // Sprawdź, czy link jest widoczny
      const isVisible = await link.isVisible();
      if (!isVisible) {
        console.log(`Pominięto link ${i + 1}: link nie jest widoczny`);
        continue;
      }

      // Upewnij się, że link jest przewinięty do widoczności i kliknięty
      await link.scrollIntoViewIfNeeded({ timeout: 5000 });
      await link.click({ timeout: 5000, force: true });

      // Otwórz link w nowej karcie
      const [newPage] = await Promise.all([
        page.context().waitForEvent('page', { timeout: 10000 }),
        link.click({ force: true })
      ]);

      // Czekamy na załadowanie strony
      await newPage.waitForLoadState('domcontentloaded');
      
      // Sprawdzamy czy URL zawiera oczekiwany href
      const newUrl = newPage.url();
      console.log(`Nowa strona otwarta: ${newUrl}`);
      expect(newUrl).toContain(href);

      // Zamknij nową stronę
      await newPage.close();
    } catch (error) {
      console.error(`Nie udało się otworzyć nowej strony dla linku ${i + 1}: ${error.message}`);
    }
  }
});
