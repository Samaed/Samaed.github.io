angular.
  module('app').
  component('classSwitcher', {
    templateUrl: '/app/class-switcher/class-switcher.component.html',
    controller: function($scope, classesService) {
    	$scope.classesService = classesService;
    }
  });
  