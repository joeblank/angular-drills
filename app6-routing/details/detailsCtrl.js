angular.module('app6')
.controller('detailsCtrl', function($scope, petsService, $stateParams) {
$scope.title = 'details controller'

petsService.getOnePet($stateParams.id).then(function(response) {
  $scope.pet = response.data;
})

})
