const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  env: {
    firstname: process.env.FIRSTNAME,
    lastname: process.env.LASTNAME,
    email: process.env.EMAIL,
    password: process.env.PASSWORD,
  },
  e2e: {
    setupNodeEvents(on, config) {
      config.baseUrl = process.env.BASE_URL

      return config;
    },
    testIsolation: false,
    
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "reports",
      reportFilename: "index",
      overwrite: false,
      html: true,
      json: true,
    },
  },
});
