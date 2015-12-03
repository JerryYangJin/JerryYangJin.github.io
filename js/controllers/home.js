angular.module('jin')
.controller('HomeController',['Fusion','$scope', function(Fusion,$scope){
  "use strict";
  Fusion.getColumns('1KxVV0wQXhxhMScSDuqr-0Ebf0YEt4m4xzVplKd4').then(function(cols){
    $scope.columns = cols.items;
  })

}]);
