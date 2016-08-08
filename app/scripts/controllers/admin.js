'use strict';
/**
 * @ngdoc function
 * @name learnAngularApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the learnAngularApp
 */
angular.module('learnAngularApp')
  .controller('AdminCtrl', function ($scope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    //init
    $scope.state = {
      currentMenu: 'Analysis',
      viewPage: ''
    };
    //MetsiMenu
    $('#side-menu').metisMenu();
    
    
  });
