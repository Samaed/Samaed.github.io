angular.
  module('app').
  service('translateService', function($rootScope, $translate) {
    $rootScope.changeLanguage = function(key) {
      $rootScope.lang = key;
      $rootScope.otherLangs = $translate.getAvailableLanguageKeys().slice(0);
      $rootScope.otherLangs.splice($rootScope.otherLangs.indexOf($rootScope.lang), 1);
      $translate.use(key);
      sessionStorage.setItem('lang', key);

      $rootScope.$broadcast("langChanged", key);
    };

    var sessionStorageLang = sessionStorage.getItem('lang');
    if (!sessionStorageLang || $translate.getAvailableLanguageKeys().indexOf(sessionStorageLang) == -1)
      $rootScope.changeLanguage($translate.proposedLanguage());
    else
      $rootScope.changeLanguage(sessionStorageLang);
  });
  