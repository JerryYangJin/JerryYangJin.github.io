//create a new module
angular.module('jin',['ui.router','angularVideoBg'])

//config routing
.config(['$stateProvider','$urlRouterProvider','$locationProvider',
        function($stateProvider,$urlRouterProvider,$locationProvider) {

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);

  $stateProvider

    .state('index', {
        url: '/',
        templateUrl: 'html/index.html',
        controller: 'IndexCtrl'
    })

}]);
