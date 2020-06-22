angular.
  module('app').
  component('avatar', {
    templateUrl: '/app/avatar/avatar.component.html',
    controller: function($scope, classesService) {
    	$scope.classesService = classesService;
    }
  });
  