//create a new module
angular.module('jin',['ui.router'])

//config routing
.config(['$stateProvider','$urlRouterProvider','$locationProvider',
        function($stateProvider,$urlRouterProvider,$locationProvider) {

  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(true);

  $stateProvider

    .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeController'
    })

    .state('settings', {
        url: '/settings',
        templateUrl: 'views/settings.html',
        controller: 'SettingsController'
    })

}])

.run(['$rootScope', '$location', '$window', function($rootScope, $location, $window){
   $rootScope
      .$on('$stateChangeSuccess',
          function(event){

              if (!$window.ga)
                  return;

              $window.ga('send', 'pageview', { page: $location.path() });
      });
}]);
;angular.module('jin')
.controller('HomeController',['Fusion','$scope', function(Fusion,$scope){
  "use strict";
  Fusion.getColumns('1KxVV0wQXhxhMScSDuqr-0Ebf0YEt4m4xzVplKd4').then(function(cols){
    $scope.columns = cols.items;
  })

}]);
;angular.module('jin')
.controller('SettingsController',['$scope', function($scope){
  "use strict";
}]);
;angular.module('jin')
.factory('Fusion',['$http',function($http){
  var baseURL = 'https://www.googleapis.com/fusiontables/v2/';
  var key = 'AIzaSyDjh1p472rNVktbzltiO6NM7DRRNccx-t4';

  function _getColumns(tableID){
    return $http.get(baseURL+'tables/'+tableID+'/columns?key='+key).then(function(response){
      return response.data;
    })
  }

  return {
    getColumns: _getColumns
  };
}]);
;angular.module('jin')
.factory('ForceSSL',['$location','$window',function($location,$window){
  if ($location.protocol() !== 'https') {
      $window.location.href = $location.absUrl().replace('http', 'https');
  }
  return {};
}]);
