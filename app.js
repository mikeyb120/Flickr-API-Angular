(function(){
'use strict'
var app = angular.module('flickrApp', ['ngMaterial', 'ngAnimate'])
    .config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('teal', {
        'default': '400',
        'hue-1': '100',
        'hue-2': '600',
        'hue-3': 'A100'
      })
      .accentPalette('purple', {
        'default': '200'
      });
    });
    app.controller('ListController', ['$scope', '$http', function($scope, $http){
      $scope.results = [];
      $scope.remove = function(index){
        $scope.results.photos.photo.splice(index, 1);
};
      $http({
        method:'GET',
        url: 'https://api.flickr.com/services/rest',
        params: {
          method: 'flickr.people.getPublicPhotos',
          api_key: 'a5e95177da353f58113fd60296e1d250',
          user_id: '132365033@N08',
          format: 'json',
          nojsoncallback: 1
        }
      }).success(function(data){
        $scope.results = data;
      }).error(function(error){
        console.error(error);
      });
    }]);
})();
