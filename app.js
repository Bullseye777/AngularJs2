/**
 * Created by DELL on 2017.03.21.
 */
var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider,$locationProvider) {
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
        .when('/treciadienis', {
            templateUrl : 'pages/treciadienis.html',
            controller : 'TreciadienisController'
        })
        .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);


});

app.controller('HomeController', function ($scope){
    $scope.message = 'Hello from HomeController';

});
app.controller('PirmadienisController', function ($scope){
    $scope.message = 'Hello from PirmadienisController';

});
app.controller('AntradienisController', function ($scope){
    $scope.message = 'Hello from AntradienisController';

});
app.controller('TreciadienisController', function ($scope){
    $scope.message = 'Hello from TreciadienisController';

});

