angular.module('simpleApp')
.controller('mainController', ['$scope', 'TimestampService',
    function($scope, TimestampService) {
        'use strict';
        
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
        //	Initial load
        //
        $scope.reloadTimestamps()

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