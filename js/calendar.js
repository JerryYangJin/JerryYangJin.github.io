//create a new module
angular.module('jin',['ui.router', 'ui.calendar'])

//config routing
.config(['$stateProvider','$urlRouterProvider','$locationProvider',
        function($stateProvider,$urlRouterProvider,$locationProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('calendar', {
        url: '/',
        templateUrl: 'calendar.html',
        controller: 'CalCtrl'
    })

}]);
