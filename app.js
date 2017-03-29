/**
 * Created by A on 2017.03.21.
 */
var myApp = angular.module("myApp", ['ngRoute']);


myApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'HomeController'
        })
        .when('/pirmadienis', {
            templateUrl: 'pages/pirmadienis.html',
            controller: 'PirmadienisController',
            controllerAs: 'pmc'
        })
        .when('/antradienis', {
            templateUrl: 'pages/antradienis.html',
            controller: 'AntradienisController'
        })
        .when('/treciadienis', {
            templateUrl: 'pages/treciadienis.html',
            controller: 'TreciadienisController'

        })
        .when('/ketvirtadienis', {
            templateUrl: 'pages/ketvirtadienis.html',
            controller: 'KetvirtadienisController'
        })
        .when('/penktadienis', {
            templateUrl: 'pages/penktadienis.html',
            controller: 'PenktadienisController'
        })

        .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);


});

myApp.controller('HomeController', function ($scope) {
    $scope.message = 'Hello from HomeController';

});


function PirmadienisController(dataFactory) {
    var vm = this;
    vm.message = 'Hello from Pirmadienis Controller';
    vm.status = null;
    vm.meniu = null;
    //
    // getMeniu();
    //
    // function getMeniu() {
    //     dataFactory.getMeniu()
    //         .then(function (response) {
    //             vm.meniu = response.data;
    //         }, function (error) {
    //             vm.status = 'Unable to load data: ' + error.message;
    //         });
    // }
    //
    // vm.insertMeniu = function () {
    //
    //     var cust = {
    //         ID: 10,
    //         FirstName: 'JoJo',
    //         LastName: 'Pikidily'
    //     };
    //     dataFactory.insertMeniu(cust)
    //         .then(function (response) {
    //             vm.status = 'Inserted Customer! Refreshing customer list.';
    //             vm.meniu.push(cust);
    //         }, function(error) {
    //             vm.status = 'Unable to insert customer: ' + error.message;
    //         });
    // };
    //
    // vm.deleteMeniu = function () {
    //     //Fake customer data
    //     var cust = {
    //         ID: 10,
    //         FirstName: 'JoJo',
    //         LastName: 'Pikidily'
    //     };
    //     dataFactory.insertMeniu(cust)
    //         .then(function (response) {
    //             vm.status = 'Inserted Customer! Refreshing customer list.';
    //             vm.meniu.push(cust);
    //         }, function(error) {
    //             vm.status = 'Unable to insert customer: ' + error.message;
    //         });
    // };
}

myApp.controller('PirmadienisController', PirmadienisController);

myApp.controller('AntradienisController', function ($scope) {
    $scope.message = 'Hello from AntradienisController';

});
myApp.controller('TreciadienisController', function ($scope) {
    $scope.message = 'Hello from TreciadienisController';

});
myApp.controller('KetvirtadienisController', function ($scope) {
    $scope.message = 'Hello from KetvirtadienisController';

});
myApp.controller('PenktadienisController', function ($scope) {
    $scope.message = 'Hello from PenktadienisController';

});

myApp.service('dataFactory', ['$http', function ($http) {

    var urlBase = 'http://php.app';


    this.getMeniu = function () {
        return $http.get(urlBase + '/Connectionas/Atvaizdavimas.php');
    };

    this.insertMeniu = function (cust) {
        return $http.post(urlBase + '/Connectionas/insertas.php', cust);
    };

    // this.updateCustomer = function (cust) {
    //     return $http.put(urlBase + '/' + cust.ID, cust)
    // };

    this.deleteMeniu = function (cust) {
        return $http.post(urlBase + '/Connectionas/deletas.php', cust);
    };

}]);