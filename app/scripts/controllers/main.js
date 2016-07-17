'use strict';

/**
 * @ngdoc function
 * @name learnAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the learnAngularApp
 */
angular.module('learnAngularApp')
  .controller('MainCtrl', ['$scope', '$parse', '$interpolate', function ($scope, $parse, $interpolate) {
    $scope.person = {
      name: "Wu Feng"
    };

    //$scope.name= "Wu Feng";

    $scope.$watch('expr', function (newVal, oldVal, scope) {
      if (newVal !== oldVal) {
        var parseFun = $parse(newVal);
        scope.parsedExpr = parseFun(scope);
      }
    });

    $scope.to = 'ari@fullstack.io';
    $scope.emailBody = 'Hello {{ to }},\n\nMy name is Ari too!';

    $scope.$watch('emailBody', function (body) {
      if (body) {
        var template = $interpolate(body);
        $scope.previewText = template({to: $scope.to});
      }
    });


    $scope.todos = ['Item 1', 'Item 2', 'Item 3'];
    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };

    $scope.myData = [{name: "Moroni", age: 50},
      {name: "Tiancum", age: 43},
      {name: "Jacob", age: 27},
      {name: "Nephi", age: 29},
      {name: "Enos", age: 34}];
    $scope.gridOptions = {data: 'myData'};

    $scope.isCaptialized = function (str) {
      return str[0] === str[0].toUpperCase();
    };

    $scope.people = [
      {
        name: "Ari", city: "San Francisco"
      },
      {
        name: "Erik", city: "Seattle"
      }];

    $scope.equation = {

    };
    $scope.change = function(){
      $scope.equation.output = parseInt($scope.equation.x) + 2;
    };
  }]);
