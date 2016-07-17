'use strict';

/**
 * @ngdoc directive
 * @name learnAngularApp.directive:ngFocus
 * @description
 * # ngFocus
 */
angular.module('learnAngularApp')
  .directive('ngFocus', function () {
    var FOCUS_CLASS = "ng-focused";
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, ele, attrs, ctrl) {
        ctrl.$focused = false;
        ele.bind('focus', function (evt) {
          ele.addClass(FOCUS_CLASS);
          scope.$apply(function () {
            ctrl.$focused = true;
          });
        }).bind('blur', function (evt) {
          ele.removeClass(FOCUS_CLASS);
          scope.$apply(function () {
            ctrl.$focused = false;
          });
        });
      }
    };
  });
