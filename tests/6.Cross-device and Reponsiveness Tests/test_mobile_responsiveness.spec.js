const { test, expect } = require('@playwright/test');

test.describe('Check how the page behaves on different screen sizes, particularly on mobile devices.', () => {
  // Define screen sizes to test
  const viewports = [
    { name: 'Desktop', width: 1920, height: 1080 },
    { name: 'Tablet', width: 768, height: 1024 },
    { name: 'Mobile', width: 375, height: 812 },
  ];

  // Test for each viewport
  for (const viewport of viewports) {
    test(`Check layout on ${viewport.name} (${viewport.width}x${viewport.height})`, async ({ page }) => {
      // Set the viewport size
      await page.setViewportSize({ width: viewport.width, height: viewport.height });

      // Navigate to the page
      await page.goto('/'); 

      const header = page.locator('h1').isVisible();
      // Optional: Take a screenshot for documentation
      await page.screenshot({ path: `screenshot-${viewport.name}.png` });
    });
  }
});
