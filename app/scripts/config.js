/**
 * Created by fengwu on 16/6/4.
 */
'use strict';
var Config = {
  name: 'learnAngularApp',
  service: {
    base: '/',
    url: 'http://localhost\\:5000/api/'
  }
};
angular.module('learnAngularApp')
  .config(function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $httpProvider, $locationProvider, $logProvider, ScrollBarsProvider,
                    ACCESS_LEVELS, IdleProvider, KeepaliveProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    //$httpProvider.defaults.headers.common('Access-Control-Allow-Origin', "*");
    // Set to use HTML5 mode, which removes the #! from modern browsers.
    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    // });
    // the following settings are defined for all scrollbars unless the
    // scrollbar has local scope configuration
    ScrollBarsProvider.defaults = {
      scrollButtons: {
        scrollAmount: 'auto', // scroll amount state button pressed
        enable: true // enable scrolling buttons by default
      },
      scrollInertia: 400, // adjust however you want
      axis: 'y', // enable 2 axis scrollbars by default,
      theme: 'dark-thick'
      //autoHideScrollbar: true
    };
    // Configure Idle settings
    IdleProvider.idle(5); // in seconds
    IdleProvider.timeout(120); // in seconds
    $urlRouterProvider.otherwise('/main');
    $ocLazyLoadProvider.config({
      // Set to true if you want to see what and when is dynamically loaded
      debug: false
    });
    $stateProvider
      .state('flow', {
        url: '/flow',
        templateUrl: 'views/dataexchangedetail.html',
        controller: 'DataexchangedetailCtrl',
        controllerAs: 'flow'
      })
      .state('blog', {
        url: '/blog',
        templateUrl: 'views/templates/blogIndex.html',
        controller: 'BlogCtrl',
        controllerAs: 'blog',
        accessLevel: ACCESS_LEVELS.pub
      })
      .state('admin', {
        //abstract: true,
        url: '/admin',
        templateUrl: 'views/admin/blogAdmin.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin',
        data: {
          accessLevel: ACCESS_LEVELS.pub,
          pageTitle: 'Blog - Backend Admin'
        },
        resolve: {
          loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([
              {
                serie: true,
                name: 'admin',
                files: ['styles/admin.css', 'scripts/inspinia.js',
                  'bower_components/metisMenu/dist/metisMenu.css', 'bower_components/metisMenu/dist/metisMenu.js']
              },
              {
                files: ['bower_components/iCheck/skins/square/green.css', 'bower_components/iCheck/icheck.min.js']
              }
            ])
          }
        }
      })
      .state('admin.categorymanage', {
        url: '/categorymanage',
        views: {
          'category': {
            templateUrl: 'views/admin/categorymanage.html',
            controller: 'CategoryCtrl',
            controllerAs: 'category'
          },
          'newPost': {
            templateUrl: 'views/admin/categorymanage.html',
            controller: 'CategoryCtrl',
            controllerAs: 'category'
          },
          'posts': {}
        },
        data: {
          accessLevel: ACCESS_LEVELS.pub,
          pageTitle: 'Blog - Category'
        },
        resolve: {
          loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([
              {
                serie: true,
                name: 'metisMenu',
                files: ['styles/admin.css', 'scripts/inspinia.js',
                  'bower_components/metisMenu/dist/metisMenu.css', 'bower_components/metisMenu/dist/metisMenu.js']
              }, {
                files: ['bower_components/iCheck/skins/square/green.css', 'bower_components/iCheck/icheck.min.js']
              }
            ])
          }
        }
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/templates/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login',
        data: {
          accessLevel: ACCESS_LEVELS.pub,
          pageTitle: 'Blog - Admin Login'
        },
        resolve: {
          loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([
              {
                serie: true,
                name: 'supersized',
                files: ['bower_components/supersized/slideshow/css/supersized.css',
                  'bower_components/supersized/slideshow/theme/supersized.shutter.css',
                  'bower_components/supersized/slideshow/js/supersized.3.2.7.min.js',
                  'bower_components/supersized/slideshow/theme/supersized.shutter.min.js']
              }
            ])
          }
        }
      })
      .state('main', {
        url: '/main',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        accessLevel: ACCESS_LEVELS.pub
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      });
    // 将拦截器和$http的request/response 链整合到一起
    $httpProvider.interceptors.push('loginIntercepter');
  });


