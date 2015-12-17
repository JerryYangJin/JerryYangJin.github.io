angular.module('jin')
.controller('ProjCtrl',['ForceSSL','Fusion','$scope', function(ForceSSL,Fusion,$scope){
  "use strict";
  $scope.data = [
    {name: 'Parent', children: ['One', 'Two', 'Three']},
    {name: 'One', tasks: [{name: 'task1',from: '1-Oct-2015', to: '5-Oct-2015', est: '2-Oct-2015', lct: '6-Oct-2015',progress:'50'}]},
    {name: 'Two', tasks: [{name: 'task2',from: '7-Oct-2015', to: '10-Oct-2015',progress:'20'}]},
    {name: 'Three', tasks: [{name: 'task3',from: '1-Nov-2015', to: '10-Dec-2015',progress:'5'}]}
  ];
}]);
