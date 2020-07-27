angular.
  module('app').
  config(['$routeProvider', '$translateProvider',
  function config($routeProvider, $translateProvider) {
    $routeProvider.when('/origin', {
      template: '<origin></origin>'
    }).when('/equipment', {
      template: '<equipment></equipment>'
    }).when('/achievements', {
      template: '<achievements></achievements>'
    }).otherwise('/origin');

    $translateProvider
    .useStaticFilesLoader({
        prefix: '/locales/',
        suffix: '.json'
    })
    .registerAvailableLanguageKeys(['fr', 'en'], {
      'en*': 'en',
      'fr*': 'fr',
      '*': 'en'
    })
    .useSanitizeValueStrategy('sanitizeParameters')
    .determinePreferredLanguage()
  }]).
  controller('controller', function($scope, translateService, citiesService) {
    $scope.citiesService = citiesService;
    
    $('body').tooltip({
      selector: '[data-toggle="tooltip"]'
    });
  });