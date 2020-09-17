(function () {
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', function ($scope) {
    $scope.name = "";
    $scope.message = "";

    $scope.conteo = function () {
      const words = $scope.name.split(',');
      var totalNameValue = words.length;
      var empty = words[0];

      if (empty === "") {
        $scope.message = "Please enter data first";
      } else if (totalNameValue <= 3){
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    };
  });
})();