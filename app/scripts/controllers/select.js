'use strict';

/**
 * @ngdoc function
 * @name learnAngularApp.controller:SelectCtrl
 * @description
 * # SelectCtrl
 * Controller of the learnAngularApp
 */
angular.module('learnAngularApp')
  .controller('SelectCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.cities = [
      {name: 'Seattle'},
      {name: 'San Francisco'},
      {name: 'Chicago'},
      {name: 'New York'},
      {name: 'Boston'}
    ];
  });
