angular.
  module('achievements').
  component('achievements', {
    templateUrl: '/app/achievements/achievements.component.html',
    controller: function($rootScope, $scope, achievementsService) {
    	$scope.achievementsService = achievementsService;
    	$rootScope.greybg = true;
    }
  });