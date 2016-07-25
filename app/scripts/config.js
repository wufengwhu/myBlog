/**
 * Created by fengwu on 16/6/4.
 */
"use strict"

var Config = {
  name: 'learnAngularApp',
  service: {
    base: '/',
    url: 'http://localhost\\:5000/api/'
  }
};

angular.module("learnAngularApp")
  .config(function ($routeProvider, $httpProvider, $locationProvider, $logProvider, ScrollBarsProvider,
                    ACCESS_LEVELS) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    //$httpProvider.defaults.headers.common('Access-Control-Allow-Origin', "*");
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
        controllerAs: 'blog',
        access_level: ACCESS_LEVELS.pub
      })
      .when('/admin', {
        templateUrl: 'views/templates/blogAdmin.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin',
        access_level: ACCESS_LEVELS.user
      })
      .when('/login', {
        templateUrl: 'views/templates/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login',
        access_level: ACCESS_LEVELS.pub
      })
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        access_level: ACCESS_LEVELS.pub
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });

    // 将拦截器和$http的request/response 链整合到一起
    $httpProvider.interceptors.push('loginIntercepter');

  });


