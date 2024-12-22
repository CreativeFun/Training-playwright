import { test, expect } from '@playwright/test';

test('Find all buttons on Testing Playground, handle empty buttons and fail at the end', async ({ page }) => {
  let emptyButtons = []; // Array to store empty buttons' indices

  // Navigate to Testing Playground
  await page.goto('/');

  // Find all buttons on the page
  const buttons = page.locator('button');
  const buttonsCount = await buttons.count();

  console.log(`\n--- Button Analysis ---`);
  console.log(`Total buttons found: ${buttonsCount}`);

  // Check each button
  for (let i = 0; i < buttonsCount; i++) {
    const buttonText = await buttons.nth(i).innerText();

    if (!buttonText.trim()) {
      emptyButtons.push(i + 1); // Add 1-based index of the empty button
      console.warn(`❗ [WARNING] Button ${i + 1} is empty!`);
    } else {
      console.log(`✅ Button ${i + 1}: "${buttonText}"`);
    }
  }

  // If empty buttons exist, log them in a readable format and fail the test
  if (emptyButtons.length > 0) {
    console.error(`\n❌ Test Failed! Found ${emptyButtons.length} empty buttons.`);
    console.error(`Empty button indices: ${emptyButtons.join(', ')}`);
    console.error(`Please review and fix the issues with these buttons.`);
  }

  // Assert to ensure the test fails for empty buttons
  expect(emptyButtons.length).toBe(0);
});
