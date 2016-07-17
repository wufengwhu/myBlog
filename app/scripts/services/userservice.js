'use strict';

/**
 * @ngdoc service
 * @name learnAngularApp.userService
 * @description
 * # userService
 * Provider in the learnAngularApp.
 */
angular.module('learnAngularApp')
  .provider('userService', function () {

    // Private variables
    var salutation = 'Hello';

    // Private constructor
    function Greeter() {
      this.greet = function () {
        return salutation;
      };
    }

    // Public API for configuration
    this.setSalutation = function (s) {
      salutation = s;
    };

    // Method for instantiating
    this.$get = function () {
      return new Greeter();
    };
  });
