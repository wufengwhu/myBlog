'use strict';

describe('Service: FlowService', function () {

  // load the service's module
  beforeEach(module('learnAngularApp'));

  // instantiate service
  var FlowService;
  beforeEach(inject(function (_FlowService_) {
    FlowService = _FlowService_;
  }));

  it('should do something', function () {
    expect(!!FlowService).toBe(true);
  });

});
