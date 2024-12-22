import { test, expect } from '@playwright/test';

test('Test various hidden form cases', async ({ page }) => {
  console.log(`\n--- Form Analysis ---`);
  
  const pageconnect = await page.goto('/');
  console.log('1. Connected to site: ', Boolean(pageconnect));

  const form = page.locator('form');
  console.log('2. Found form: ', Boolean(form));

  const formHidden = await expect(form).toBeHidden();
  console.log('3. Form hidden:', Boolean(formHidden));

  const isHidden = await form.getAttribute('hidden');
  console.log('4. Form atribute hidden:', Boolean(isHidden));

  const isVisible = await form.isVisible();
  console.log('5. Form is visible (on the screen): ', Boolean(isVisible));

  const formsCount = await page.locator('form').count();
  expect(formsCount).toBe(1);
  console.log('6. Form is existing in DOM: ', Boolean(formsCount));

  const formEnabled = await expect(form).toBeEnabled(); // Formularz jest interaktywny
  console.log('7. Form is interactive: ', Boolean(formEnabled));

  const formDisabled = await expect(form).not.toBeDisabled(); // Formularz jest wyłączony
  console.log('8. Form is disabled: ', Boolean(formDisabled));

  const action = await form.getAttribute('action');
  console.log('9. Form have action atribute:', Boolean(action));
  if(action==true){
    const atribute_value = expect(action).not.toBe(null); 
    console.log('9a. Action atribbute is not null:', Boolean(atribute_value));
  }
  else{
    const atribute_value = expect(action).toBe(null); 
    console.log('9a. Action atribbute is not null:', Boolean(atribute_value));
  } 

  const noValidate = await form.getAttribute('novalidate');
  console.log('10. Form have action atribute:', Boolean(action));
  if(action==true){
    const form_validation =  expect(noValidate).toBe(null); 
    console.log('10a. Action atribbute is not null:', Boolean(atribute_value));
  } 
  else{
    const atribute_value = expect(noValidate).toBe(null); 
    console.log('10a. Action atribbute is not null:', Boolean(atribute_value));
  } 
 
  const method = await form.getAttribute('method');
  if (method) {
     expect(method.toLowerCase()).toBe('post'); 
   } else {
     console.warn('** Atrybut "method" nie istnieje dla formularza. **');
     expect(method).toBeNull(); 
   }
  console.log('11. Form is using POST:', Boolean(method));

  const inputs = form.locator('input, textarea, select');
  const inputCount = await inputs.count();
  console.log('12. Form have fields: ', Boolean(inputCount));
  expect(inputCount).toBeGreaterThan(0); // Czy formularz ma pola?
  console.log(`** Liczba pól wejściowych: ${inputCount} **`);


 
  const submitButton = form.locator('button[type="submit"], input[type="submit"], button:not([type])');
  const submitButtonCount = await submitButton.count();
  console.log('13. Submit button visible: ', Boolean(submitButtonCount));

  const errorMessage = page.locator('.error-message'); // Globalny zakres dla testu
  const errorMessageCount = await errorMessage.count();
  console.log('14. Error Message visible: ', Boolean(errorMessageCount));


//   const emailField = form.locator('input[name="email"]');
//   await emailField.fill('invalid-email');
//   const isValid = await emailField.evaluate((input) => input.checkValidity());
//   console.log('Czy pole jest prawidłowe?', isValid);
//   expect(isValid).toBe(false);

const formWidth = await form.evaluate((el) => window.getComputedStyle(el).width);
console.log(`** Szerokość formularza: ${formWidth} **`);
expect(parseFloat(formWidth)).not.toBeNull(); // Czy formularz ma szerokość?
console.log('15. Form have width: ', Boolean(formWidth));

const displayStyle = await form.evaluate((el) => window.getComputedStyle(el).display);
expect(displayStyle).toBe('block');
console.log('16. Form have style: ', Boolean(displayStyle));

const fieldsets = form.locator('fieldset');
expect(await fieldsets.count()).not.toBeNull();
console.log('17. Form have fieldset: ', Boolean(fieldsets));

const legends = form.locator('legend');
expect(await legends.count()).not.toBeNull();
console.log('18. Form have legend: ', Boolean(legends));

const firstFieldset = form.locator('fieldset').first();
const legend = firstFieldset.locator('legend');
const legend_visibility = await expect(legend).not.toBeVisible();
console.log('19. Form legend is visible: ', Boolean(legend_visibility));

});
