'use strict';

describe('Controller: FlowsctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('learnAngularApp'));

  var FlowsctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FlowsctrlCtrl = $controller('FlowsctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FlowsctrlCtrl.awesomeThings.length).toBe(3);
  });
});
