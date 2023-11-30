import { defineConfig } from 'vitest';

export default defineConfig({
  test: {
    coverage: {
      reporter: ['text', 'json-summary', 'json'],
    }
  }
});