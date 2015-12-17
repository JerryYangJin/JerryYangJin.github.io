angular.module('jin')
.controller('ProjCtrl',['ForceSSL','Fusion','$scope', function(ForceSSL,Fusion,$scope){
  "use strict";
  $scope.data = [
      {name: 'row1', tasks: [{name: 'task1',from: '1-Oct-2015', to: '5-Oct-2015'}]},
      {name: 'row2', tasks: [{name: 'task2',from: '7-Oct-2015', to: '10-Oct-2015'}]}
  ];
}]);
