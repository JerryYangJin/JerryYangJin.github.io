angular.module('jin')
.factory('ForceSSL',['$location','$window',function($location,$window){
  if ($location.protocol() !== 'https') {
      $window.location.href = $location.absUrl().replace('http', 'https');
  }
  return {};
}]);
