'use strict';

/**
 * @ngdoc service
 * @name learnAngularApp.githubService
 * @description
 * # githubService
 * Factory in the learnAngularApp.
 */
angular.module('learnAngularApp')
  .factory('githubService', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },

      secondMethod:function(){

      }
    };
  });
