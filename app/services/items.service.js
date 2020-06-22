angular.
  module('app').
  service('itemsService', function(statsService) {
    var dictionary = {
      "sword": {
        shortName: "sword",
        class: "eqpt-one-handed",
        title: "Mighty Sword",
        effects: {
          "attack": 2,
        },
        description: "A mighty sword"
      },
      "bow": {
        shortName: "bow",
        class: "eqpt-two-handed",
        title: "Mighty Bow",
        effects: {
          "attack": 1,
          "range": 2,
        },
        description: "A mighty bow"
      },
      "shield": {
        shortName: "shield",
        class: "eqpt-one-handed",
        title: "Mighty Shield",
        effects: {
          "armor": 1,
        },
        description: "A mighty shield"
      },
      "armor": {
        shortName: "armor",
        class: "eqpt-armored",
        title: "Mighty Armor",
        effects: {
          "armor": 2,
        },
        description: "A mighty armor"
      },
      "boots": {
        shortName: "boots",
        class: "eqpt-feeted",
        title: "Mighty Boots",
        effects: {
          "movementspd": 2,
        },
        description: "A pair of mighty boots"
      },
      "helmets": {
        shortName: "helmets",
        class: "eqpt-headed",
        title: "Mighty Helmet",
        effects: {
          "armor": 1,
          "cooldown": 1
        },
        description: "A mighty helmet helping you stay cool-headed"
      },
      "bracers": {
        shortName: "bracers",
        class: "eqpt-armed",
        title: "Mighty Brace",
        effects: {
          "armor": 1
        },
        description: "A mighty bracer"
      }
    }

    this.equipmentMapping = {
      'eqpt-one-handed': 'eqpt-hand',
      'eqpt-two-handed': 'eqpt-hand',
      'eqpt-armored': 'eqpt-armor',
      'eqpt-armed': 'eqpt-arm',
      'eqpt-belted': 'eqpt-belt',
      'eqpt-two-armed': 'eqpt-arm',
      'eqpt-feeted': 'eqpt-feet',
      'eqpt-headed': 'eqpt-head'
    };

    this.reverseEquipmentMapping = {
      'eqpt-hand': ['eqpt-one-handed', 'eqpt-two-handed'],
      'eqpt-armor': ['eqpt-armored'],
      'eqpt-arm': ['eqpt-armed', 'eqpt-two-armed'],
      'eqpt-belt': ['eqpt-belted'],
      'eqpt-feet': ['eqpt-feeted'],
      'eqpt-head': ['eqpt-headed']
    };

    this.items = Object.values(dictionary);

    this.byName = function(name) {
      return dictionary[name];
    }
    
    this.tooltip = function(item) {
      var html = '<h6 class="text-info">'+item.title+'</h6>';
      for (const effect in item.effects) {
        html += '<div>'+statsService.byName(effect).title+' +'+item.effects[effect]+'</div>';
      }
      html += '<div class="text-muted">'+item.description+'</div>';
      return html;
    }
  });
  