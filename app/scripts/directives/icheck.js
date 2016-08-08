'use strict';
/**
 * @ngdoc directive
 * @name learnAngularApp.directive:icheck
 * @description
 * # icheck
 */
angular.module('learnAngularApp')
  .directive('icheck', function ($timeout, $parse) {
    return {
      require: 'ngModel',
      link: function postLink($scope, element, $attrs, ngModel) {
        return $timeout(function () {
          var value = $attrs['value'];
          $scope.$watch($attrs['ngModel'], function (newValue) {
            $(element).iCheck('update');
          });
          $scope.$watch($attrs['ngDisabled'], function (newValue) {
            $(element).iCheck(newValue ? 'disable' : 'enable');
            $(element).iCheck('update');
          });
          return $(element).iCheck({
            checkboxClass: 'icheckbox_square-green',
            radioClass: 'iradio_square-green',
            increaseArea: '10%' // optional
          }).on('ifToggled', function (event) {
            // 将外部的值传入到angular的上下文
            if ($(element).attr('type') === 'checkbox' && $attrs['ngModel']) {
              return $scope.$apply(function () {
                return ngModel.$setViewValue(event.target.checked)
              });
            }
            if ($(element).attr('type') === 'radio' && $attrs['ngModel']) {
              return ngModel.$setViewValue(value);
            }
          });
        });
      }
    };
  });
