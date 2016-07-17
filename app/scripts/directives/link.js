'use strict';

/**
 * @ngdoc directive
 * @name learnAngularApp.directive:link
 * @description
 * # link
 */
angular.module('learnAngularApp')
  .directive('link', function () {
    return {
      template: '<div></div>',
      restrict: 'EA',
      transclude:true,
      controller:function($scope, $element, $transclude, $log){
        $transclude(function(clone){

        });
      },
      link: function postLink(scope, element, attrs) {
        element.text('this is the link directive');
      }
    };
  });
