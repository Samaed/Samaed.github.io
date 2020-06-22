angular.
  module('app').
  config(['$routeProvider',
  function config($routeProvider) {
    $routeProvider.when('/origin', {
      template: '<origin></origin>'
    }).when('/preset', {
      template: '<preset></preset>'
    }).
    otherwise('/origin');
  }]).
  controller('controller', function($scope, citiesService) {
    $(function () {
      $('body').tooltip({
        selector: '[data-toggle="tooltip"]'
      });
    })

    $scope.citiesService = citiesService;
  });