/**
 * Created by fengwu on 16/5/19.
 */
'use strict';


angular.module('learnAngularApp')
  .controller('signUpCtrl', function ($scope) {
    $scope.submitted = false;
    $scope.signupForm = function () {
      if ($scope.signup_form.$valid) {
        // 正常提交
      } else {
        $scope.signup_form.submitted = true;
      }
    }
  });
