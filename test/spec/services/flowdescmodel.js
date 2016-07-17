'use strict';

describe('Service: FlowDescModel', function () {

  // load the service's module
  beforeEach(module('learnAngularApp'));

  // instantiate service
  var FlowDescModel;
  beforeEach(inject(function (_FlowDescModel_) {
    FlowDescModel = _FlowDescModel_;
  }));

  it('should do something', function () {
    expect(!!FlowDescModel).toBe(true);
  });

});
