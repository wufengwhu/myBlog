'use strict';
/**
 * @ngdoc function
 * @name learnAngularApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the learnAngularApp
 */
angular.module('learnAngularApp')
  .controller('CategoryCtrl', function ($scope, BlogService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.loading = true;
    $scope.state = {
      filterAttr: 'create_time', filterReverse: true, reverseColumn: 'create_time'
    };
    // category config
    $scope.theadItems = [
      {attr: 'image', name: '图片'},
      {attr: 'category_name', name: '分类名称'},
      {attr: 'category_alias', name: '分类alias'},
      {attr: 'link', name: '链接'}
    ];
    $scope.categories = [];
    BlogService.Category.query({}, function (resp) {
      $scope.categories = resp;
      $scope.loading = false;
    }, function (err) {
      $log.info("请求失败");
    });
    $scope.addCate = function () {
    };
    $scope.reset = function () {
    };
    $scope.removeCate = function () {
    };
    $scope.saveCategories = function () {
    };
  });
