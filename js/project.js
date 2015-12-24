//create a new module
angular.module('jin',['ui.router','ui.tree','gantt','gantt.table','gantt.progress','gantt.tree','gantt.groups','gantt.bounds','gantt.tooltips'])

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

}]);
