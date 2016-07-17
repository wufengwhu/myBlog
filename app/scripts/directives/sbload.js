'use strict';

/**
 * @ngdoc directive
 * @name learnAngularApp.directive:sbLoad
 * @description
 * # sbLoad
 */
angular.module('learnAngularApp')
  .directive('sbLoad', ['$parse', function ($parse) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var fn = $parse(attrs.sbLoad);
        element.on('load', function (event) {
          scope.$apply(function () {
            fn(scope, {$event: event});
          })
        });
      }
    };
  }]);
