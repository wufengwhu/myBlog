'use strict';

/**
 * @ngdoc function
 * @name learnAngularApp.controller:DataexchangedetailCtrl
 * @description
 * # DataexchangedetailCtrl
 * Controller of the learnAngularApp
 */
angular.module('learnAngularApp')
  .controller('DataexchangedetailCtrl', function ($scope, $location, FlowDescModel, FlowService, $log) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    // ~ init
    $scope.forms = {};
    //$scope.flowMetaFrame = FlowDescModel.createNew();
    if (!$scope.state) {
      $scope.state = {mode: "view"};
    }

    var flowInfo = FlowService.getFlow({flowId: '6060'}, function (resp) {
      $scope.flowMetaFrame = flowInfo;
    }, function (err) {
      $log.info("请求失败");
    });

    //add or edit ?
    var absUrl = $location.absUrl();
    $scope.flowMode = absUrl.indexOf("/flow/add") != -1 ? 'addNewFlow' : absUrl.indexOf("/flow/edit") != -1 ? 'editExistFlow' : 'default';

    if ($scope.flowMode == "addNewFlow") {
      /*SweetAlert.swal('Oops...', 'Please select your project first.', 'warning');
       $location.path("/models");
       return;*/
    }


    $scope.wizardSteps = [
      {title: '基础信息', src: 'views/dataexchange/info.html', isComplete: false, form: 'flow_info_form'},
      {title: '源库信息', src: 'views/dataexchange/source.html', isComplete: false, form: 'flow_source_form'},
      {title: '目标库信息', src: 'views/dataexchange/target.html', isComplete: false, form: 'flow_target_form'},
      {title: '数据质量监控', src: 'views/dataexchange/monitor.html', isComplete: false, form: 'flow_monitor_form'},
      {
        title: '通知',
        src: 'views/dataexchange/notification.html',
        isComplete: false,
        form: 'flow_notification_form'
      }
    ];

    $scope.curStep = $scope.wizardSteps[0];


    $scope.preView = function () {
      var stepIndex = $scope.wizardSteps.indexOf($scope.curStep);
      if (stepIndex >= 1) {
        $scope.curStep.isComplete = false;
        $scope.curStep = $scope.wizardSteps[stepIndex - 1];
      }
    };

    $scope.nextView = function () {
      var stepIndex = $scope.wizardSteps.indexOf($scope.curStep);

      if (stepIndex < ($scope.wizardSteps.length - 1)) {
        $scope.curStep.isComplete = true;
        $scope.curStep = $scope.wizardSteps[stepIndex + 1];
      }
    };

    $scope.goToStep = function (stepIndex) {
      if ($scope.flowMode == "addNewFlow") {
        if (stepIndex + 1 >= $scope.curStep.step) {
          return;
        }
      }
      for (var i = 0; i < $scope.wizardSteps.length; i++) {
        if (i <= stepIndex) {
          $scope.wizardSteps[i].isComplete = true;
        } else {
          $scope.wizardSteps[i].isComplete = false;
        }
      }
      if (stepIndex < ($scope.wizardSteps.length)) {
        $scope.curStep = $scope.wizardSteps[stepIndex];

        //AuthenticationService.ping(function (data) {
        //  UserService.setCurUser(data);
        //});
      }
    };

    $scope.check_info = function () {
      /*if(($scope.state.mode === "edit") &&$scope.cubeMode=="addNewCube"&&($scope.allCubes.indexOf($scope.cubeMetaFrame.name.toUpperCase()) >= 0)){
       SweetAlert.swal('Oops...', "The cube named [" + $scope.cubeMetaFrame.name.toUpperCase() + "] already exists", 'warning');
       return false;
       }*/
      return true;
    };
    $scope.check_source = function () {
      return true;
    };
    $scope.check_target = function () {
      return true;
    };
    $scope.check_monitor = function () {
      return true;
    };
    $scope.check_notification = function () {
      return true;
    };
    $scope.checkDataExchangeForm = function (stepIndex) {
      // do not check for Prev Step
      if (stepIndex + 1 < $scope.curStep.step) {
        return true;
      }

      if (!$scope.curStep.form) {
        return true;
      }
      if ($scope.state.mode === 'view') {
        return true;
      }
      else {
        //form validation
        if ($scope.forms[$scope.curStep.form].$invalid) {
          $scope.forms[$scope.curStep.form].$submitted = true;
          return false;
        } else {
          //business rule check
          switch ($scope.curStep.form) {
            case 'flow_info_form':
              return $scope.check_info();
              break;
            case 'flow_source_form':
              return $scope.check_source();
              break;
            case 'flow_target_form':
              return $scope.check_target();
              break;
            case 'flow_monitor_form':
              return $scope.check_monitor();
            case 'flow_notification_form':
              return $scope.check_notification();
            default:
              return true;
              break;
          }
        }
      }
    };

  });
