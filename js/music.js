//create a new module
angular.module('jin',['ui.router','youtube-embed'])

//config routing
.config(['$stateProvider','$urlRouterProvider','$locationProvider',
        function($stateProvider,$urlRouterProvider,$locationProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('music', {
        url: '/',
        templateUrl: 'music.html',
        controller: 'MusicCtrl'
    })

}]);
