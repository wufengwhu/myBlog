'use strict';

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
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ui.grid',
  'mgo-angular-wizard',
  'ngMessages',
  'ui.ace',
  "ngScrollbars",
  'restangular'
]).run(function ($rootScope) {
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
}).config(function ($routeProvider, $locationProvider, ScrollBarsProvider) {
  // Set to use HTML5 mode, which removes the #! from modern browsers.
  /*$locationProvider.html5Mode({
   enabled: true,
   requireBase: true
   });*/


  // the following settings are defined for all scrollbars unless the
  // scrollbar has local scope configuration
  ScrollBarsProvider.defaults = {
    scrollButtons: {
      scrollAmount: 'auto', // scroll amount when button pressed
      enable: true // enable scrolling buttons by default
    },
    scrollInertia: 400, // adjust however you want
    axis: 'y', // enable 2 axis scrollbars by default,
    theme: 'dark-thick'
    //autoHideScrollbar: true
  };


  $routeProvider
    .when('/flow', {
      templateUrl: 'views/dataexchangedetail.html',
      controller: 'DataexchangedetailCtrl',
      controllerAs: 'flow'
    })
    .when('/blog', {
      templateUrl: 'views/templates/blogIndex.html',
      controller: 'BlogCtrl',
      controllerAs: 'blog'
    })
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'about'
    })
    .otherwise({
      redirectTo: '/'
    });
});
