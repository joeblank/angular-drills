angular.module('myApp')
    .controller('mainController', function($scope, mainService) {

        $scope.people = mainService.getData();





    })
