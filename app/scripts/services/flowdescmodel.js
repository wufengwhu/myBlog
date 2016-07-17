'use strict';

/**
 * @ngdoc service
 * @name learnAngularApp.FlowDescModel
 * @description
 * # FlowDescModel
 * Service in the learnAngularApp.
 */
angular.module('learnAngularApp')
  .service('FlowDescModel', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.flowMetaFrame = {};
    this.flowServiceUrl = 'localhost:5000';
    //
    this.createNew = function () {
      var flowMeta = {
        "trident_id": 100001,
        "model_name": "",
        "exduration": 10 * 60,
        "description": "",
        "source_db_infos": {
          "db_tage": "",
          "db_name": "",
          "db_port": ""
        },
        "dimensions": [],
        "measures": [
          {
            "name": "_COUNT_",
            "function": {
              "expression": "COUNT",
              "returntype": "bigint",
              "parameter": {
                "type": "constant",
                "value": "1",
                "next_parameter": null
              }
            }
          }
        ],
        "rowkey": {
          "rowkey_columns": []
        },
        "aggregation_groups": []
        ,
        "partition_date_start": 0,
        "partition_date_end": undefined,
        "notify_list": [],
        "hbase_mapping": {
          "column_family": []
        },
        "retention_range": "0",
        "auto_merge_time_ranges": [604800000, 2419200000],
        "engine_type": 2,
        "storage_type": 2
      };

      return flowMeta;
    };

    this.createMonitor = function () {
      var monitor = {
        "name": "",
        "function": {
          "expression": "",
          "returntype": "",
          "parameter": {
            "type": "",
            "value": "",
            "next_parameter": null
          }
        }
      };

      return monitor;
    }

    this.createNotification = function () {
      var notification = {
        "includes": [],
        "select_rule": {
          "hierarchy_dims": [],//2 dim array
          "mandatory_dims": [],
          "joint_dims": []//2 dim array
        }
      }

      return notification;
    }

  });
