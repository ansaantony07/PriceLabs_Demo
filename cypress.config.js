const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    pageLoadTimeout: 60000,
    viewportWidth: 1300, 
    viewportHeight: 780, 
    baseUrl: "https://pricelabs.co", 
      
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    reporter: 'cypress-mochawesome-reporter',
  },
});

