angular.module('jin')
.controller('SettingsController',['$location', '$window', '$scope', function($location, $window, $scope){
  "use strict";
  if ($location.protocol() !== 'https') {
      $window.location.href = $location.absUrl().replace('http', 'https');
  }
}]);
