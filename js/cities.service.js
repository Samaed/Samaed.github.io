angular.
  module('app').
  service('citiesService', function() {
    this.cityIndex = 0;
    this.currentCity = undefined;

    this.cities = [
      {
        name: "Lille, France",
        shortName: "lille",
        description: "You come from the city of Lille, in the north of France, where you grew up and studied until 23.",
        talents: ["birth","bsc","msc","promoisen"]
      },
      {
        name: "Chicoutimi, Québec",
        shortName: "chicoutimi",
        description: "You went to Chicoutimi, Québec, to finalize your MSc studies and fell in love with \"La Belle Province\".",
        talents: ["maitrise","promouqac"]
      },
      {
        name: "Rennes, France",
        shortName: "rennes",
        description: "Missing your family, you took the plane back to pursue a carrier as software engineer.",
        talents: []
      },
      {
        name: "Lille, France",
        shortName: "boisblancs",
        description: "Your love for Lille could only mean going back at some point. So you became a back-end developer.",
        talents: []
      },
      {
        name: "Sherbrooke, Québec",
        shortName: "sherbrooke",
        description: "Finally, your true love purchased a ticket to Sherbrooke. Nice to see you again, Québec.",
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
    };

    this.refreshCity();
  });
  