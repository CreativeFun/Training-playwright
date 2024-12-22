import { test, expect } from '@playwright/test';

test('Find all buttons on Testing Playground', async ({ page }) => {
  // Going into testing playground
  await page.goto('/');
  // Finding all buttons on site
  const buttons = page.locator('button');
  

  //expecting more than 0 buttons
  const buttonsCount = await buttons.count(); 
  expect(buttonsCount).toBeGreaterThan(0); 

  console.log(`found ${buttonsCount} buttons`);

  for(let i=0; i<buttonsCount; i++)
  {
    const buttonText = await buttons.nth(i).innerText(); // Getting text of every button
    console.log(`Button ${i+1} text: ${buttonText}`)

  }
});