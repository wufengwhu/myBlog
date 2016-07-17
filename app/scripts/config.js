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
  .config(function ($routeProvider, $httpProvider, $locationProvider, $logProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    //$httpProvider.defaults.headers.common('Access-Control-Allow-Origin', "*");
  });


