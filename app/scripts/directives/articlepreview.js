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
        right: '=modalStyle'
      },
      transclude: true,
      require: '^ngController',
      link: function ($scope, $element, $attrs, controller) {
        var uid = $scope.post.Alias;
        controller.post = $scope.post;

        $scope.getPreviewContent = function () {
          //修改
          $scope.right = 0;
          angular.element('.post-cover').fadeIn();
          $rootScope.isOpen = !$rootScope.isOpen;
          var contentHtml = $scope.post.Content;
          // 代码高亮
          var $content = angular.element('.post-content div');
          $content.html(contentHtml);

          var pres = $content.find('pre');
          angular.forEach(pres, function (pre, i) {
            angular.element(pre).html(angular.element('<code></code>').html(angular.element(pre).html()));
            hljs.highlightBlock(pre);
          });
        };
      }
    }
  });
