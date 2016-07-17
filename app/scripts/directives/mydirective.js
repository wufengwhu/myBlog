'use strict';

/**
 * @ngdoc directive
 * @name learnAngularApp.directive:myDirective
 * @description
 * # myDirective
 */
angular.module('learnAngularApp')
  .directive('myDirective', function () {
    return {
      restrict: 'EA',
      replace: true,
      scope: {
        person: "=name"
      },
      controller: function ($scope, $element, $transclude, $log) {
        //$scope.name = "wufeng";
      },

      link: function ($scope, $element, $attrs, controller) {

        console.log($scope.person);
      },
      template: '<div>Say: {{person}}<br>改变隔离scope的name：<input type="buttom" value="" ng-model="person" class="ng-pristine ng-valid"></div>'
    };
  });
