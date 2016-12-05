angular.module('simpleApp')
.controller('homepageController',
            ['$scope', 'timestamps', 'TimestampService', function($scope, timestamps, TimestampService) {
             
             'use strict';
             
             $scope.items = timestamps.data
             
             //
             //	Call the Timestamp service to fetch all the timestamps
             //
             $scope.reloadTimestamps = function() {
             TimestampService.get(function(response) {
                                  $scope.items = response
                                  console.log("Items is ", $scope.items)
                                  });
             }
             
             //
             //	Send a new timestamp request to the server
             //
             $scope.postTimestamp = function() {
             //
             //	Set another timestamp and then reload when completed
             //
             TimestampService.set($scope.reloadTimestamps);
             return true;
             }
             
             $scope.clearTimestamps = function() {
             TimestampService.reset($scope.reloadTimestamps)
             return true;
             }
             }]);
