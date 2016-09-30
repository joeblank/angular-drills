angular.module('myApp')
.controller('mainController', function($scope) {

$scope.broken ='hey';
$scope.changeName = function(name) {
  $scope.broken = name;
  $scope.newBroken = '';
}

})
