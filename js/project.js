//create a new module
angular.module('jin',['ui.router'])

//config routing
.config(['$stateProvider','$urlRouterProvider','$locationProvider',
        function($stateProvider,$urlRouterProvider,$locationProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('project', {
        url: '/',
        templateUrl: 'project.html',
        controller: 'ProjCtrl'
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
