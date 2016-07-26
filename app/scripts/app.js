/**
 * @ngdoc overview
 * @name learnAngularApp
 * @description
 * # learnAngularApp
 *
 * Main module of the application.
 */

angular.module('learnAngularApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ui.router',
  'ngSanitize',
  'ngTouch',
  'ui.grid',
  'mgo-angular-wizard',
  'ngMessages',
  'ui.ace',
  "ngScrollbars",
  'restangular'
]).run(function ($rootScope, $location, Auth) {
  $rootScope.currentDate = new Date().getFullYear();
  $rootScope.recordNo = '鄂ICP备XXX号';
  $rootScope.isRoot = false;
  $rootScope.isLoad = false;
  $rootScope.homeBackGround = {};
  $rootScope.loadStyle = {};
  $rootScope.isOpen = false;
  $rootScope.imgLoad = function (event) {
    $rootScope.homeBackGround = {'background-color': '#f3f3f4'};
    $rootScope.loadStyle = {'display': 'block'};
  };
  //给$rootChangeStart设置监听
  //$rootScope.$on('$routeChangeStart', function(evt, next, curr){
  //  if (!Auth.issAuthorized(next.$$route.access_level)){
  //    if(Auth.isLoggedin()){
  //      // 用户登录了,但没有当前页面的访问权限
  //      $location.path('/admin');
  //    }else{
  //      $location.path('/login');
  //    }
  //  }
  //});
})
