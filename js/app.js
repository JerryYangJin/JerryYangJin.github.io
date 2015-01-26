//create a new module
angular.module('jin',['ngRoute'])

//config routing
.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'views/chat.html',
    controller: 'ChatCtrl'
  });

  $routeProvider.
  when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl'
  });

  $routeProvider.otherwise({redirectTo: '/'});

  $locationProvider.html5Mode(true);

}]);
