MathJax.Hub.Config({
    skipStartupTypeset: true,
    messageStyle: "none",
    "HTML-CSS": {
        showMathMenu: false
    }
});
MathJax.Hub.Configured();

//create a new module
angular.module('jin',['ui.router'])

//config routing
.config(['$stateProvider','$urlRouterProvider','$locationProvider',
        function($stateProvider,$urlRouterProvider,$locationProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('quant', {
        url: '/',
        templateUrl: 'quant.html',
        controller: 'QuantCtrl'
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
