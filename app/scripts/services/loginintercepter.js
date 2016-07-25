'use strict';

/**
 * @ngdoc service
 * @name learnAngularApp.loginIntercepter
 * @description
 * # loginIntercepter
 * Factory in the learnAngularApp.
 */
angular.module('learnAngularApp')
  .factory('loginIntercepter', function () {
    // 构建请求拦截器
    return function ($q, $rootscope, Auth) {
      return {
        'response': function (resp) {
          if (resp.config.url == '/api/login') {
            Auth.setToken(resp.data.token);
          }
          return resp;
        },
        'responseError': function (rejection) {
          // 错误处理
          switch (rejection.status) {
            case 401:
              if (rejection.config.url !== 'api/login')
              // 如果当前不是在登录的页面
                $rootscope.$broadcast('auth:loginRequired');
              break;
            case 403:
              $rootscope.$broadcast('auth:loginRequired');
              break;
            case 404:
              $rootscope.$broadcast('page:notFound');
            case 500:
              $rootscope.$broadcast('server:error');
              break;
          }
          return $q.reject(rejection);
        }
      };
    };
  });
