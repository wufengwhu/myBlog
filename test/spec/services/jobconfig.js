'use strict';

describe('Service: jobConfig', function () {

  // load the service's module
  beforeEach(module('learnAngularApp'));

  // instantiate service
  var jobConfig;
  beforeEach(inject(function (_jobConfig_) {
    jobConfig = _jobConfig_;
  }));

  it('should do something', function () {
    expect(!!jobConfig).toBe(true);
  });

});
