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
        .when('/:ID', {
            templateUrl: 'pages/pirmadienis.html',
            controller: 'PirmadienisController',
            controllerAs: 'pmc',


        })


        .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);


});

myApp.controller('HomeController', function ($scope) {
    $scope.message = 'Hello from HomeController';

});


myApp.controller('PirmadienisController', ['dataFactory', '$scope', '$routeParams', function (dataFactory, $scope, $routeParams) {
    var vm = $scope;
    vm.ID = $routeParams.ID;
    vm.status = null;
    vm.meniu = null;
    $scope.forma = {};

    getMeniu(vm.ID);

    function getMeniu(ID) {
        dataFactory.getMeniu(ID)
            .then(function (response) {
                vm.meniu = response.data;
            }, function (error) {
                vm.message = 'klaida: ' + error.message;
            });
    }

    $scope.insertMeniu = function () {

        dataFactory.insertMeniu($scope.forma)
            .then(function (response) {
                vm.status = 'Ivestas naujas patieklas';
                vm.meniu.push(ivestis);
            }, function (error) {
                vm.status = 'klaida: ' + error.message;
            });
    }
    //};

    //  vm.deleteMeniu = function () {
    //Fake customer data
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
}]);

myApp.service('dataFactory', ['$http', function ($http) {

    var urlBase = 'http://php.app';


    this.getMeniu = function (day) {
        return $http.get(urlBase + '/Connectionas/Atvaizdavimas.php?day=' + day);
    };

    this.insertMeniu = function (cust) {
        return $http.post(urlBase + '/Connectionas/insertas.php', cust);
    };

    // this.updateCustomer = function (cust) {
    //     return $http.put(urlBase + '/' + cust.ID, cust)
    // };

    // this.deleteMeniu = function (cust) {
    //      return $http.post(urlBase + '/Connectionas/deletas.php', cust);
    // };

}]);
