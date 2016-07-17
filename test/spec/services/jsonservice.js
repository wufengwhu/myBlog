'use strict';

describe('Service: JsonService', function () {

  // load the service's module
  beforeEach(module('learnAngularApp'));

  // instantiate service
  var JsonService;
  beforeEach(inject(function (_JsonService_) {
    JsonService = _JsonService_;
  }));

  it('should do something', function () {
    expect(!!JsonService).toBe(true);
  });

});
