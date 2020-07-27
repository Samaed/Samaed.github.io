angular.
  module('origin').
  component('origin', {
    templateUrl: '/app/origin/origin.component.html',
    controller: function($rootScope, $scope, citiesService, talentsService) {
    	$scope.citiesService = citiesService;
    	$scope.talentsService = talentsService;
    	$rootScope.greybg = false;
    }
  });