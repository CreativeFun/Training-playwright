import { test, expect } from '@playwright/test';

test('Check visibility of main elements on Testing Playground', async ({ page }) => {
  // 1. Przejdź na stronę
  await page.goto('/');

  // Found elements
  const header = page.locator('h1'); 
  const form = page.locator('form'); // Formularz, jeśli istnieje
  const html = page.locator('html');
  const head = page.locator('head');
  const title = page.locator('title');
  const link = page.locator('link[rel="apple-touch-icon"]').first();
  const script = page.locator('script').first();
  const body = page.locator('body');
  const div = page.locator('div.app');
  const nav = page.locator('nav');
  const a = page.locator('a.title');
  const img = page.locator('img[alt="Testing Playground mascot Froggy"]');
  const span = page.locator('span[alt="Testing Playground mascot Froggy"]');
  const svg = page.locator('svg[alt="@meijer_s"]');
  const path = page.locator('path[alt="@meijer_s"]');
  const button = page.locator('button[alt="Query"]');
  const textarea = page.locator('textarea').first();
  const pre = page.locator('pre').first();
  const iframe = page.locator('iframe');
  const section = page.locator('section[alt="html preview"]');
  const noscript = page.locator('noscript');
  const reach_portal = page.locator('reach-portal').first();
  const h3 = page.locator('h3[alt="Behavior"]');
  const label = page.locator('label.test-id');
  const input = page.locator('input.test-id');

  // **Expected** values
  const expected = {
    header: true,
    form: false,
    html: true,
    head: false, 
    title: false,
    link: false, 
    script: false,
    body: true,
    div: false,
    nav: true,
    a: true,
    img: true,
    span: false,
    svg: false,
    path: false,
    button: false,
    textarea: false,
    pre: false,
    iframe: true,
    section: false,
    noscript: false,
    reach_portal: false,
    h3: false,
    label: false,
    input: false
  };

  // **Actual** values
  const actual = {
    header: await header.isVisible(), 
    form: await form.isVisible(), 
    html: await html.isVisible(), 
    head: await head.isVisible(),
    title: await title.isVisible(),
    link: await link.isVisible(),
    script: await script.isVisible(),
    body: await body.isVisible(),
    div: await div.isVisible(),
    nav: await nav.isVisible(),
    a: await a.isVisible(),
    img: await img.isVisible(),
    span: await span.isVisible(),
    svg: await svg.isVisible(),
    path: await path.isVisible(),
    button: await button.isVisible(),
    textarea: await textarea.isVisible(),
    pre: await pre.isVisible(),
    iframe: await iframe.isVisible(),
    section: await section.isVisible(),
    noscript: await noscript.isVisible(),
    reach_portal: await reach_portal.isVisible(),
    h3: await h3.isVisible(),
    label: await label.isVisible(),
    input: await input.isVisible()
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
