var app = angular.module('app',[]);

app.controller('Controller', ['$scope', '$timeout', function($scope, $timeout) {
  $scope.input = 'loaded';

  $scope.$watch('tags', function() {
    $scope.totalInput = $scope.tags.join(" ");
    $timeout(function() {
      $(".flex-tags").scrollLeft(Infinity);
    }, 0);
  }, true);

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
    if ($scope.input === "") {
      return;
    }

    $scope.tags.push($scope.input);
    $scope.input = "";
  }

  $scope.remove = function(index) {
    $scope.tags.splice(index, 1);
  };
}]);
