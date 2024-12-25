import { test, expect } from '@playwright/test';

test('Check how the page behaves on different screen sizes, particularly on mobile devices.', async ({ page }) => {
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
          await page.goto('/'); // Replace with your URL
    
          // Example: Check if a navigation menu behaves correctly
          const menuLocator = page.locator('nav');
          if (viewport.name === 'Mobile') {
            // Ensure the mobile menu is visible
            const mobileMenuButton = page.locator('button:has-text("Menu")');
            await expect(mobileMenuButton).toBeVisible();
            await mobileMenuButton.click();
            await expect(menuLocator).toBeVisible();
          } else {
            // Ensure the full menu is visible
            await expect(menuLocator).toBeVisible();
          }
    
          // Example: Check if a specific element adapts properly
          const heroSection = page.locator('.hero-section');
          await expect(heroSection).toBeVisible();
    
          // Optional: Take a screenshot for documentation
          await page.screenshot({ path: `screenshot-${viewport.name}.png` });
        });
      }
});
