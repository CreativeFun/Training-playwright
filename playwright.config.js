import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://testing-playground.com', // Ustaw URL globalny
    headless: true, // Opcja: uruchamiaj testy w trybie bez interfejsu
  },
  retries: 0, // Ustaw liczbę ponownych prób w razie niepowodzenia
  timeout: 30000, // Ustaw globalny timeout
});
