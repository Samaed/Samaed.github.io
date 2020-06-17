angular.
  module('app').
  component('avatar', {
    templateUrl: 'avatar.htm',
    controller: function($scope, classesService) {
    	$scope.classesService = classesService;
    }
  });
  