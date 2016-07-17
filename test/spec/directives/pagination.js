'use strict';

describe('Directive: Pagination', function () {

  // load the directive's module
  beforeEach(module('learnAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-pagination></-pagination>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the Pagination directive');
  }));
});
