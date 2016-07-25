'use strict';

/**
 * @ngdoc service
 * @name learnAngularApp.Auth
 * @description
 * # Auth
 * Factory in the learnAngularApp.
 */
angular.module('learnAngularApp')
  .factory('Auth', function ($cookieStore, ACCESS_LEVELS) {
    // Service logic
    var _user = $cookieStore.get('user');

    var setUser = function (user) {
      if (!user.role || user.role < 0) {
        user.role = ACCESS_LEVELS.pub;
      }
      _user = user;
      $cookieStore.put('user', _user);
    };
    // Public API here
    return {
      issAuthorized: function (lv1) {
        return _user.role >= lv1;
      },
      setUser: setUser,
      isLoggedin: function () {
        return _user ? true : false
      },
      getUser: function () {
        return _user;
      },
      getId: function () {
        return _user ? _user._id : null;
      },
      getToken: function () {
        return _user ? _user.token : '';
      },
      logout: function () {
        $cookieStore.remove('user');
        _user = null;
      }
    };
  });
