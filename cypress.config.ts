import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    experimentalOriginDependencies: true,
    env: {
      email: 'moiz@fidsor.net',
      password: 'Moiz@2025Secure!'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
