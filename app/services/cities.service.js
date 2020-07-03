angular.
  module('app').
  service('citiesService', function() {
    this.cities = [
      {
        name: "lille",
        talents: ["birth","bsc","msc","promoisen"]
      },
      {
        name: "chicoutimi",
        talents: ["maitrise","promouqac"]
      },
      {
        name: "rennes",
        talents: []
      },
      {
        name: "boisblancs",
        talents: []
      },
      {
        name: "sherbrooke",
        talents: ["phd"]
      }
    ];

    this.isPreviousCity = function() {
      return this.cityIndex > 0;
    };

    this.isNextCity = function() {
      return this.cityIndex < this.cities.length - 1;
    };

    this.nextCity = function() {
      if (this.cityIndex == this.cities) return;
      this.cityIndex++;
      this.refreshCity();
    };

    this.previousCity = function() {
      if (this.cityIndex == 0) return;
      this.cityIndex--;
      this.refreshCity();
    };

    this.refreshCity = function() {
      this.currentCity = this.cities[this.cityIndex];
      sessionStorage.setItem('cityIndex', this.cityIndex);
    };


    var sessionStorageCityIndex = parseInt(sessionStorage.getItem('cityIndex'));
    this.cityIndex = isNaN(sessionStorageCityIndex) || sessionStorageCityIndex < 0 || sessionStorageCityIndex >= this.cities.length ?
      0 : sessionStorageCityIndex;

    this.currentCity = undefined;
    this.refreshCity();
  });
  