angular.
  module('origin').
  component('origin', {
    templateUrl: 'origin.htm',
    controller: function($scope, citiesService, talentsService) {
    	$scope.citiesService = citiesService;
    	$scope.talentsService = talentsService;
    }
  });