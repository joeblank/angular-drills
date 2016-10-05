angular.module('app6')
.controller('homeCtrl', function($scope, petsService) {
$scope.title = 'home controller';

petsService.getPets().then(function(response) {
    $scope.pets = response.data;
})


})
