angular.module("simpleApp", ['ui.router', 'ngResource']);

angular.module('simpleApp').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('main', {
		url: '/main',
		templateUrl: 'simpleApp/main/template.html',
		resolve: {
			// timestamps: ['Timestamps', function (TimestampService) {
			// 	return TimestampService.getAll();
			// }]
		},
		controller: 'mainController'
	})
	 
	$urlRouterProvider.otherwise('/main');
}])
