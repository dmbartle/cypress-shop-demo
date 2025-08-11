// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { diff } from 'json-diff';

/*
 * Wraps/overwrites the "equal" method so that we can pretty print the diff
 * during errors only.
 *
 * The diffing library adds a "~" JSON key when looking at arrays, but it
 * doesn't affect anything else.
 */
chai.use(function (_chai, utils) {
  utils.overwriteMethod(chai.Assertion.prototype, 'equal', function (_super) {
    return function newEqual(str) {
      let obj = utils.flag(this, 'object');
      // "equal" has a "deep" flag it "deep" precedes it
      let deep = utils.flag(this, 'deep');

      try {
        _super.apply(this, arguments);
      } catch (error) {
        // If we do not have the "deep" flag, just throw the standard error
        if (deep !== true) {
          throw error;
        }

        // If we do have the "deep" flag, use the diff module for highlight the diff
        // and then tidy it up a bit
        let diffObject = 'expect objects to match:\n';
        diffObject += JSON.stringify(diff(str, obj), null, 4)
          .replace(/__old/g, '-')
          .replace(/__new/g, '+');
        console.log(diffObject);
        throw diffObject;
      }
    };
  });
});
