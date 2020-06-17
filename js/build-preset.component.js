angular.
  module('app').
  component('buildPreset', {
    templateUrl: 'build-preset.htm',
    controller: function($scope, classesService) {
    	$scope.classesService = classesService;
    }
  });
  