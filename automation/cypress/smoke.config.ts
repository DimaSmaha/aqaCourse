require("dotenv").config();
import { defineConfig } from "cypress";

const env = {
  USER_LOGIN: process.env.USER_LOGIN,
  USER_PASSWORD: process.env.USER_PASSWORD,
};

export default defineConfig({
  viewportWidth: 1280,
  viewportHeight: 1024,
  defaultCommandTimeout: 8000,
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/smoke-tests/*.spec.ts",
    video: true,
  },
  retries: {
    runMode: 2,
    openMode: 0,
  },
  env,
});
