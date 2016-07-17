'use strict';

/**
 * @ngdoc directive
 * @name learnAngularApp.directive:pagination
 * @description
 * # Pagination
 */
angular.module('learnAngularApp')
  .directive('pagination', function ($parse, $q) {
    return {
      restrict: 'E',
      scope: {},
      tmplateUrl: 'views/directives/pagination.html',
      link: function postLink(scope, element, attrs) {
        var _this = this;
        scope.limit = 15;
        scope.hasMore = false;
        scope.data = $parse(atts.data)(scope.$parent);
        scope.action = $parse(attrs.action)(scope.$parent);
        scope.loadFunc = $parse(attrs.loadFunc)(scope.$parent);
        scope.autoLoad = true;

        element.text('this is the pagination directive');
      }
    };
  });
