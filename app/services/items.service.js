angular.
  module('app').
  service('itemsService', function(statsService, translateFilter) {
    var dictionary = {
      sword: {
        name: 'sword',
        type: 'eqpt-one-handed',
        classes: ['knight'],
        effects: {
          attack: 2,
        }
      },
      bow: {
        name: 'bow',
        type: 'eqpt-two-handed',
        classes: ['archer'],
        effects: {
          attack: 1,
          range: 2,
        }
      },
      book: {
        name: 'book',
        type: 'eqpt-one-handed',
        classes: ['wizard'],
        effects: {
          magic: 2
        }
      },
      armor: {
        name: 'armor',
        type: 'eqpt-armored',
        classes: ['archer','knight'],
        effects: {
          armor: 2,
        }
      },
      cloaks: {
        name: 'cloaks',
        type: 'eqpt-armored',
        classes: ['wizard'],
        effects: {
          magic: 1,
          cooldown: 1
        }
      },
      helmets: {
        name: 'helmets',
        type: 'eqpt-headed',
        classes: [],
        effects: {
          armor: 1,
          cooldown: 1
        }
      },
      shield: {
        name: 'shield',
        type: 'eqpt-one-handed',
        classes: ['knight'],
        effects: {
          armor: 1,
        }
      },
      boots: {
        name: 'boots',
        type: 'eqpt-feeted',
        classes: [],
        effects: {
          movementspd: 2,
        }
      },
      bracers: {
        name: 'bracers',
        type: 'eqpt-armed',
        classes: [],
        effects: {
          armor: 1
        }
      },
      pants: {
        name: 'pants',
        type: 'eqpt-legged',
        classes: [],
        effects: {
          armor: 1
        } 
      },
      belts: {
        name: 'belts',
        type: 'eqpt-belted',
        classes: [],
        effects: {
          movementspd: 1
        }
      },
      gloves: {
        name: 'gloves',
        type: 'eqpt-one-handed',
        classes: ['wizard'],
        effects: {
          magic: 1
        }
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
      'eqpt-headed': 'eqpt-head',
      'eqpt-legged': 'eqpt-legs',
      'eqpt-necked': 'eqpt-neck',
      'eqpt-shouldered': 'eqpt-shoulder'
    };
    
    this.reverseEquipmentMapping = {
      'eqpt-hand': ['eqpt-one-handed', 'eqpt-two-handed'],
      'eqpt-armor': ['eqpt-armored'],
      'eqpt-arm': ['eqpt-armed', 'eqpt-two-armed'],
      'eqpt-belt': ['eqpt-belted'],
      'eqpt-feet': ['eqpt-feeted'],
      'eqpt-head': ['eqpt-headed'],
      'eqpt-legs': ['eqpt-legged'],
      'eqpt-neck': ['eqpt-necked'],
      'eqpt-shoulder': ['eqpt-shouldered']
    };

    this.items = Object.values(dictionary);

    this.byName = function(name) {
      return dictionary[name];
    }
    
    this.tooltip = function(item) {
      var html = '<h6 class="text-info">'+translateFilter('items.'+item.name+'.title')+'</h6>';
      for (const effect in item.effects) {
        html += '<div>'+translateFilter('stats.'+effect+'.title')+' +'+item.effects[effect]+'</div>';
      }
      html += '<div class="text-muted">'+translateFilter('items.'+item.name+'.description')+'</div>';
      return html;
    }
  });
  