angular.
  module('app').
  component('headerNav', {
    templateUrl: 'header-nav.htm',
    controller: function($scope, $location) {
      $scope.isActiveLink = function(path) {
        return ($location.path().substr(0, path.length) === path) ? 'active' : '';
      };
    }
  });
  