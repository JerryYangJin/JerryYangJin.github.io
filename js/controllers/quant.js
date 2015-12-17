angular.module('jin')
.controller('QuantCtrl',['ForceSSL','Fusion','$scope', function(ForceSSL,Fusion,$scope){
  "use strict";
  $scope.expression = " \\left( \\sum_{k=1}^n a_k b_k \\right)^2 \\leq \\left( \\sum_{k=1}^n a_k^2 \\right) \\left( \\sum_{k=1}^n b_k^2 \\right)";
}]);
