angular.module("simpleApp", ['ui.router', 'ngResource']);

angular.module('simpleApp')
.config(['$stateProvider', '$urlRouterProvider',
         function($stateProvider, $urlRouterProvider) {
         
         $stateProvider
         .state('homepage', {
                url: '/homepage',
                templateUrl: 'simpleApp/components/homepage/homepage.html',
                resolve: {
                timestamps: ['TimestampService', function (TimestampService) {
                             console.log("getting timestamps")
                             return TimestampService.getInitial();
                             }]
                },
                controller: 'homepageController'
                })
         
         $urlRouterProvider.otherwise('/homepage');
         
         }])
