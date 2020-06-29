angular.
  module('app').
  config(['$routeProvider', '$translateProvider',
  function config($routeProvider, $translateProvider) {
    $routeProvider.when('/origin', {
      template: '<origin></origin>'
    }).when('/equipment', {
      template: '<equipment></equipment>'
    }).
    otherwise('/origin');

    $translateProvider
    .useStaticFilesLoader({
        prefix: '/locales/',
        suffix: '.json'
    })
    .uniformLanguageTag('bcp47')
    .useSanitizeValueStrategy('sanitizeParameters')
    .determinePreferredLanguage()
    .fallbackLanguage('en-US');
  }]).
  controller('controller', function($window, $scope, $rootScope, $translate, citiesService) {
    $scope.citiesService = citiesService;

    $scope.changeLanguage = function(key) {
        $rootScope.lang = key;
        $translate.use(key).then(function(){}, function(){console.error('JSON file is invalid')});
    };

    $('body').tooltip({
      selector: '[data-toggle="tooltip"]'
    });
  });