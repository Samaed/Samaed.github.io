angular.
  module('app').
  component('headerNav', {
    templateUrl: '/app/header-nav/header-nav.component.html',
    controller: function($scope, $location) {
      $scope.isActiveLink = function(path) {
        return ($location.path().substr(0, path.length) === path) ? 'active' : '';
      };
    }
  });
  