'use strict';

/**
 * @ngdoc function
 * @name learnAngularApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the learnAngularApp
 */
angular.module('learnAngularApp')
  .controller('BlogCtrl', function ($rootScope, $scope, BlogService, $log, jobConfig) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    //hljs.initHighlightingOnLoad();

    /*blog*/
    $scope.pageCount = 0;


    var addPage = function (index, data) {
    };


    var begin = new Date;

    $scope.currentCate = '';
    $scope.categories = [];
    $scope.posts = [];
    $scope.post = {};
    $scope.modalStyle = {
      right: '-1200px'
    };
    $scope.pageCount = 0;
    $scope.settings = jobConfig;
    $scope.cate = {};
    $scope.isLoaded = false;

    /*init blog posts display*/
    $scope.pageIndex = 1;
    var percent = 100 / $scope.pageIndex + "%";
    $scope.heightPercent = {
      height: percent
    };

    $scope.pageSize = 10;
    $scope.sortBy = 'date';

    $scope.scrollConfig = {};

    $scope.closeModal = function () {
      //$(".post-modal").css("right", "-1200px");
      $scope.modalStyle.right = '-1200px';
      //$(".post-cover").fadeOut();
      angular.element(".post-cover").fadeOut();
      //$("body").removeClass("modal-open");
      $rootScope.isOpen = !$rootScope.isOpen;
    };


    /*获取全部分类*/
    BlogService.Category.query({}, function (resp) {
      $scope.categories = resp;
      $scope.categories.unshift(BlogService.getAll());
      $scope.categories.push(BlogService.getOther());
      //取得当前分类对象数据
      $scope.cate = BlogService.jsonQuery($scope.categories, {"Alias": $scope.currentCate});
      if ($scope.cate) {
        //$rootScope.isRoot = !$rootScope;
        $scope.isRoot = !$scope.isRoot;
      }
    }, function (err) {
      $log.info("请求失败");
    });

    $scope.initCategoryList = function () {

    };

    var params = {
      cateId: $scope.cate._id,
      pageIndex: 1,
      pageSize: 10,
      filterType: 0,
      sortBy: 'Title',
      keyword: ''
    };

    /*获取文章数据*/
    BlogService.Posts.getHomePagePosts(
      params,
      function (resp) {
        var end = new Date();
        $scope.posts = resp.posts;
        $scope.pageCount = resp.pageCount;
      }, function (err) {
        $log.info("请求失败");
      });

  });
