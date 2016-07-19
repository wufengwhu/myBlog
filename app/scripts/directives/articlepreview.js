'use strict';

/**
 * @ngdoc directive
 * @name learnAngularApp.directive:articlePreview
 * @description
 * # articlePreview
 */
angular.module('learnAngularApp')
  .directive('articlePreview', function ($rootScope) {
    return {
      templateUrl: 'views/directives/articlePreview.html',
      restrict: 'EA',
      scope: {
        post: '=post',
        right:'=modalStyle'
      },
      //transclude: true,
      //require:'^ngController',
      link: function ($scope, $element, $attrs) {
        //controller.post = $scope.post;
        $scope.getPreviewContent = function(){
          //修改
          $scope.right = 0;
          angular.element('.post-cover').fadeIn();
          $rootScope.isOpen = !$rootScope.isOpen;
        };
      }

    }
  });
