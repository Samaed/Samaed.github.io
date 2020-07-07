angular.
  module('app').
  service('itemsService', function(statsService, translateFilter) {
    var dictionary = {
      sword: {
        name: 'sword',
        type: 'one-handed',
        classes: ['knight'],
        effects: {
          attack: 2,
        }
      },
      bow: {
        name: 'bow',
        type: 'two-handed',
        classes: ['archer'],
        effects: {
          attack: 1,
          range: 2,
        }
      },
      book: {
        name: 'book',
        type: 'one-handed',
        classes: ['wizard'],
        effects: {
          magic: 2
        }
      },
      armor: {
        name: 'armor',
        type: 'armored',
        classes: ['archer','knight'],
        effects: {
          armor: 2,
        }
      },
      cloaks: {
        name: 'cloaks',
        type: 'armored',
        classes: ['wizard'],
        effects: {
          magic: 1,
          cooldown: 1
        }
      },
      helmets: {
        name: 'helmets',
        type: 'headed',
        classes: [],
        effects: {
          armor: 1,
          cooldown: 1
        }
      },
      shield: {
        name: 'shield',
        type: 'one-handed',
        classes: ['knight'],
        effects: {
          armor: 1,
        }
      },
      boots: {
        name: 'boots',
        type: 'feeted',
        classes: [],
        effects: {
          movementspd: 2,
        }
      },
      bracers: {
        name: 'bracers',
        type: 'armed',
        classes: [],
        effects: {
          armor: 1
        }
      },
      pants: {
        name: 'pants',
        type: 'legged',
        classes: [],
        effects: {
          armor: 1
        } 
      },
      belts: {
        name: 'belts',
        type: 'belted',
        classes: [],
        effects: {
          movementspd: 1
        }
      },
      gloves: {
        name: 'gloves',
        type: 'one-handed',
        classes: ['wizard'],
        effects: {
          magic: 1
        }
      }
    }

    this.equipmentMapping = {
      'one-handed': 'hand',
      'two-handed': 'hand',
      'armored': 'armor',
      'armed': 'arm',
      'belted': 'belt',
      'two-armed': 'arm',
      'feeted': 'feet',
      'headed': 'head',
      'legged': 'legs',
      'necked': 'neck',
      'shouldered': 'shoulder'
    };
    
    this.reverseEquipmentMapping = {
      'hand': ['one-handed', 'two-handed'],
      'armor': ['armored'],
      'arm': ['armed', 'two-armed'],
      'belt': ['belted'],
      'feet': ['feeted'],
      'head': ['headed'],
      'legs': ['legged'],
      'neck': ['necked'],
      'shoulder': ['shouldered']
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
  