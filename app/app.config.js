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
    .registerAvailableLanguageKeys(['fr', 'en'], {
      'en*': 'en',
      'fr*': 'fr',
      '*': 'en'
    })
    .useSanitizeValueStrategy('sanitizeParameters')
    .determinePreferredLanguage()
  }]).
  controller('controller', function($window, $scope, $rootScope, $translate, citiesService) {
    $scope.citiesService = citiesService;

    $rootScope.changeLanguage = function(key) {
      $rootScope.lang = key;
      $rootScope.otherLangs = $translate.getAvailableLanguageKeys().slice(0);
      $rootScope.otherLangs.splice($rootScope.otherLangs.indexOf($rootScope.lang), 1);
      $translate.use(key);
      sessionStorage.setItem('lang', key);

      // TODO: Update the tooltip content when changing the language
    };

    var sessionStorageLang = sessionStorage.getItem('lang');
    if (!sessionStorageLang || $translate.getAvailableLanguageKeys().indexOf(sessionStorageLang) == -1)
      $rootScope.changeLanguage($translate.proposedLanguage());
    else
      $rootScope.changeLanguage(sessionStorageLang);

    $('body').tooltip({
      selector: '[data-toggle="tooltip"]'
    });
  });