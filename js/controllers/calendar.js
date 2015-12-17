angular.module('jin')
.controller('CalCtrl',['ForceSSL','Fusion','$scope', 'uiCalendarConfig', function(ForceSSL,Fusion,$scope, uiCalendarConfig){
  "use strict";

  $scope.eventSources = [];

  /* config object */
  $scope.uiConfig = {
    calendar:{
      eventLimit: true,
      googleCalendarApiKey: 'AIzaSyDjh1p472rNVktbzltiO6NM7DRRNccx-t4',
      events: {
        googleCalendarId: '2tr6mhk6s5cm2hvktjmprqsptg@group.calendar.google.com',
        className: 'gcal-event'
      },
      header:{
        left: 'today prev,next',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      }
    }
  };
  
}]);
