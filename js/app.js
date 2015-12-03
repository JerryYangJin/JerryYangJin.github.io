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

}]);
