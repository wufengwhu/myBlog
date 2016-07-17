'use strict';

/**
 * @ngdoc directive
 * @name learnAngularApp.directive:loading
 * @description
 * # loading
 */
angular.module('learnAngularApp')
  .directive('loading', function ($parse, $q) {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'views/directives/loading.html',
      link: function (scope, element, attrs) {
        scope.text = (!attrs.text) ? 'Loading...' : attrs.text;
      }
    };
  });
