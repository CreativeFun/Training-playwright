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

    // Otwórz link w nowej karcie
    const [newPage] = await Promise.all([
      page.context().waitForEvent('page'),
      link.click()
    ]);

    // Sprawdź, czy URL nowej strony zawiera oczekiwane href
    await newPage.waitForLoadState('domcontentloaded');
    const newUrl = newPage.url();
    console.log(`Nowa strona otwarta: ${newUrl}`);
    expect(newUrl).toContain(href);

    // Zamknij nową stronę
    await newPage.close();
  }
});