angular.
  module('app').
  service('talentsService', function() {
    var dictionary = {
      "birth": {
        icon: "apple",
        name: "You are born!",
        title: "Birth",
        effects: "Max HP +100",
        description: "20/07/1992"
      },
      "bsc": {
        icon: "scroll",
        name: "BSc in Computer Science",
        title: "Bachelor of Science",
        effects: "Computer Science +3",
        description: "ISEN - 2013"  
      },
      "msc": {
        icon: "scroll",
        name: "MSc in Computer Science",
        title: "Master of Science",
        effects: "Computer Science +2",
        description: "ISEN - 2016"
      },
      "promoisen": {
        icon: "gem",
        name: "Promotion Major",
        title: "Promotion Major",
        effects: "Grant Charisma +1",
        description: "15.81/20"
      },
      "maitrise": {
        icon: "scroll",
        name: "Maîtrise in Computer Science",
        title: "Maître en Science",
        effects: "Computer Science +1",
        description: "UQAC - 2015"
      },
      "promouqac": {
        icon: "gem",
        name: "Promotion Major",
        title: "Promotion Major",
        effects: "Grant Charisma +1",
        description: "4.18/4.3"
      },
      "phd": {
        icon: "scroll",
        name: "PhD in Computer Science?",
        title: "Doctor of Philosophy",
        effects: "Computer Science +3",
        description: "USherbrooke - April 2021",
        disabled: true
      }
    };

    this.byName = function(name) {
      return dictionary[name];
    }

    this.tooltip = function(talent) {
      return '<h6 class="text-info">'+talent.title+'</h6><div>'+talent.effects+'</div><div class="text-muted">'+talent.description+'</div>';
    }
  });
  