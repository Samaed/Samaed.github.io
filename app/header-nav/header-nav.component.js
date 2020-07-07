angular.
  module('app').
  component('headerNav', {
    templateUrl: '/app/header-nav/header-nav.component.html',
    controller: function($scope, $location, translateFilter) {
		$scope.isActiveLink = function(path) {
			return ($location.path().substr(0, path.length) === path) ? 'active' : '';
		};

	    $scope.$on("langChanged", function(evt, data) {
	        //$('header [data-key]').attr({ data: { original: { title: translateFilter($(this).attr('data-key')) }}});
	    });
    }
  });
  