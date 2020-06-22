angular.
  module('app').
  component('buildPreset', {
    templateUrl: '/app/build-preset/build-preset.component.html',
    controller: function($scope, classesService) {
    	$scope.classesService = classesService;
    }
  });
  