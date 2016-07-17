'use strict';

/**
 * @ngdoc service
 * @name learnAngularApp.BlogService
 * @description
 * # BlogService
 * Service in the learnAngularApp.
 */
angular.module('learnAngularApp')
  .service('BlogService', ['$resource', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    //全部分类
    var cateAll = {
      "_id": "",
      "Alias": "",
      "CateName": "All Category",
      "Img": "/images/全部分类.svg"
    };
    //未分类
    var cateOther = {
      "_id": "other",
      "Alias": "other",
      "CateName": "Uncategorized",
      "Img": "/images/未分类.svg"
    };

    return {
      Category: $resource(Config.service.url + 'blog/:category', {category: '@category'},
        {}),
      Posts: $resource(Config.service.url + 'blog/getPosts', {}, {
        // 获取分类列表下首页文章数据
        getHomePagePosts: {method: 'POST', params: {}, isArray: false}
      }),
      jsonQuery: function (jsonArray, conditions) {
        var i = 0,
          len = jsonArray.length,
          json,
          condition,
          flag;
        for (; i < len; i++) {
          flag = true;
          json = jsonArray[i];
          for (condition in conditions) {
            if (json[condition] !== conditions[condition]) {
              flag = false;
              break;
            }
          }
          if (flag) {
            return json;
          }
        }
      },

      getAll: function () {
        return cateAll;
      },

      getOther: function () {
        return cateOther;
      }
    };
  }]);
