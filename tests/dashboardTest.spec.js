const { test, expect } = require('@playwright/test');

test('login component should have name, password fields, and a submit button', async ({ page }) => {
  // Navigate to the login page
  await page.goto('http://localhost:5173/dashboard');

  // Check if name field exists
  const nameField = await page.$('input[name="name"]');
  expect(nameField).not.toBeNull();

  await nameField.fill('Keerthana Deiveehan');

  // Check if password field exists
  const passwordField = await page.$('input[name="password"]');
  expect(passwordField).not.toBeNull();

  await passwordField.fill('Keerthi1234');

  // Check if submit button exists
  const submitButton = await page.$('button[type="submit"]');
  expect(submitButton).not.toBeNull();

  await submitButton.click();
});