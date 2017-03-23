/**
 * Created by DELL on 2017.03.21.
 */
var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(function ($routeProvider,$locationProvider) {
    $routeProvider

        .when ('/', {
            templateUrl : 'pages/home.html',
            controller : 'HomeController'
        })
        .when('/pirmadienis', {
            templateUrl : 'pages/pirmadienis.html',
            controller : 'PirmadienisController'
        })
        .when('/antradienis', {
            templateUrl : 'pages/antradienis.html',
            controller : 'AntradienisController'
        })
        .when('/treciadienis' , {
            templateUrl :'pages/treciadienis.html' ,
            controller : 'TreciadienisController'

        })
        .when('/ketvirtadienis' , {
            templateUrl : 'pages/ketvirtadienis.html' ,
            controller : 'KetvirtadienisController'
        })
        .when('/penktadienis' , {
           templateUrl : 'pages/penktadienis.html' ,
           controller : 'PenktadienisController'
        })

        .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);


});

myApp.controller('HomeController', function ($scope){
    $scope.message = 'Hello from HomeController';

});
myApp.controller('PirmadienisController', function ($scope){
    $scope.message = 'Hello from PirmadienisController';

});
myApp.controller('AntradienisController', function ($scope){
    $scope.message = 'Hello from AntradienisController';

});
myApp.controller('TreciadienisController', function ($scope){
    $scope.message = 'Hello from TreciadienisController';

});
myApp.controller('KetvirtadienisController', function ($scope){
    $scope.message = 'Hello from KetvirtadienisController';

});
myApp.controller('PenktadienisController', function ($scope){
    $scope.message = 'Hello from PenktadienisController';

});

