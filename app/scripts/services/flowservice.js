'use strict';

/**
 * @ngdoc service
 * @name learnAngularApp.FlowService
 * @description
 * # FlowService
 * Factory in the learnAngularApp.
 */
angular.module('learnAngularApp')
  .factory('FlowService', ['$resource', function ($resource, config) {

    return $resource(Config.service.url + 'flow/:flowId', {
      flowId: '@id'
    }, {
      getFlow: {method: 'GET', params: {}, isArray: false}
    });
  }])
;
