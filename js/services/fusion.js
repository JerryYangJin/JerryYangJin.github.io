angular.module('jin')
.factory('Fusion',['$http',function($http){
  var baseURL = 'https://www.googleapis.com/fusiontables/v2/';
  var key = 'AIzaSyDjh1p472rNVktbzltiO6NM7DRRNccx-t4';

  function _getColumns(tableID){
    return $http.get(baseURL+'tables/'+tableID+'/columns?key='+key).then(function(response){
      return response.data;
    })
  }

  return {
    getColumns: _getColumns
  };
}]);
