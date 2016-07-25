'use strict';

describe('Service: loginIntercepter', function () {

  // load the service's module
  beforeEach(module('learnAngularApp'));

  // instantiate service
  var loginIntercepter;
  beforeEach(inject(function (_loginIntercepter_) {
    loginIntercepter = _loginIntercepter_;
  }));

  it('should do something', function () {
    expect(!!loginIntercepter).toBe(true);
  });

});
