'use strict';

describe('Service: userService', function () {

  // instantiate service
  var userService,
    init = function () {
      inject(function (_userService_) {
        userService = _userService_;
      });
    };

  // load the service's module
  beforeEach(module('learnAngularApp'));

  it('should do something', function () {
    init();

    expect(!!userService).toBe(true);
  });

  it('should be configurable', function () {
    module(function (userServiceProvider) {
      userServiceProvider.setSalutation('Lorem ipsum');
    });

    init();

    expect(userService.greet()).toEqual('Lorem ipsum');
  });

});
