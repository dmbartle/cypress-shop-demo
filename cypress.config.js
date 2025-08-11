const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const NodeModulesPolyfills =
  require('@esbuild-plugins/node-modules-polyfill').NodeModulesPolyfillPlugin;
const GlobalsPolyfills =
  require('@esbuild-plugins/node-globals-polyfill').NodeGlobalsPolyfillPlugin;

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    'file:preprocessor',
    createBundler({
      plugins: [
        NodeModulesPolyfills(),
        createEsbuildPlugin.default(config),
        GlobalsPolyfills({
          process: true,
          buffer: true
        })
      ]
    })
  );

  on('task', {
    log(message) {
      console.log(message);

      return null;
    }
  });

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 1080,
  defaultCommandTimeout: 10000,
  watchForFileChanges: false,
  retries: {
    runMode: 0,
    openMode: 0
  },
  chromeWebSecurity: false,
  env: {
    ENVIRONMENT: 'staging',
    requestMode: true
  },
  waitForAnimations: true,
  e2e: {
    baseUrl: 'https://www.saucedemo.com/', // Replace with URL of project
    specPattern: 'cypress/e2e/**/*.{feature,features}',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents
  }
});
