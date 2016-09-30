angular.module('arrayApp')
.controller('arrayController', function($scope, mainService) {

$scope.myData = mainService.getData();
$scope.addNewPerson = function(name, email) {
  var newPerson = {
    name: name,
    email: email
  };
  $scope.myData.unshift(newPerson);
}
})
