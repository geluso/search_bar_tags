var app = angular.module('app',[]);

app.controller('Controller', ['$scope', function($scope) {
  $scope.input = 'loaded';
  $scope.tags = [
    "ace",
    "car",
    "dar",
    "bar",
    "far",
    "near",
    "here",
    "deer",
    "clear",
  ];

  $scope.addTag = function() {
    $scope.tags.push($scope.input);
    $scope.input = "";
  }

  $scope.remove = function() {
    $scope.tags.pop();
  };
}]);
