'use strict';

/**
 * @ngdoc function
 * @name learnAngularApp.decorator:Githubservice
 * @description
 * # Githubservice
 * Decorator of the learnAngularApp
 */
angular.module('learnAngularApp')
  .config(function ($provide) {
    $provide.decorator('githubService', function ($delegate) {
      // decorate the $delegate
      return $delegate;
    });
  });
