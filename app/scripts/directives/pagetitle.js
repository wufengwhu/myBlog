'use strict';
/**
 * @ngdoc directive
 * @name learnAngularApp.directive:pageTitle
 * @description
 * # pageTitle
 */
angular.module('learnAngularApp')
  .directive('pageTitle', function ($rootScope, $timeout) {
    return {
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
        var listener = function (event, toState, toParams, fromState, fromParams) {
          // Default title - load on Blog
          var title = 'Wu Feng\'s Blog'
          // Create my own title pattern
          if (toState.data && toState.data.pageTitle) title = toState.data.pageTitle;
          $timeout(function () {
            element.text(title)
          });
        };
        $rootScope.$on('$stateChangeStart', listener);
      }
    };
  });
