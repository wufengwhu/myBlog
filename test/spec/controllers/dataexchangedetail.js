'use strict';

describe('Controller: DataexchangedetailCtrl', function () {

  // load the controller's module
  beforeEach(module('learnAngularApp'));

  var DataexchangedetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DataexchangedetailCtrl = $controller('DataexchangedetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DataexchangedetailCtrl.awesomeThings.length).toBe(3);
  });
});
