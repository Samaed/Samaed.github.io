angular.
  module('app').
  service('itemsService', function(translateFilter) {
    var dictionary = {
      sword: {
        name: 'sword',
        type: 'handed',
        classes: ['knight'],
        effects: {
          attack: 3,
        },
        logos: ['unity', 'csharp']
      },
      bow: {
        name: 'bow',
        type: 'handed',
        classes: ['archer'],
        effects: {
          attack: 1,
          range: 2,
        },
        logos: ['ruby']
      },
      book: {
        name: 'book',
        type: 'handed',
        classes: ['wizard'],
        effects: {
          magic: 2,
          range: 1
        },
        logos: ['angular','react']
      },
      armor: {
        name: 'armor',
        type: 'armored',
        classes: ['archer','knight'],
        effects: {
          armor: 2,
          movementspd: 1
        }
      },
      cloaks: {
        name: 'cloaks',
        type: 'armored',
        classes: ['wizard'],
        effects: {
          magic: 2,
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
        type: 'handed',
        classes: ['knight'],
        effects: {
          armor: 2,
        },
        logos: ['unreal','cpp']
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
          armor: 1,
          attack: 1
        }
      },
      pants: {
        name: 'pants',
        type: 'legged',
        classes: [],
        effects: {
          movementspd: 1,
          cooldown: 1
        } 
      },
      belts: {
        name: 'belts',
        type: 'belted',
        classes: [],
        effects: {
          movementspd: 1,
          cooldown: 1
        },
        half: true
      },
      gloves: {
        name: 'gloves',
        type: 'handed',
        classes: ['wizard'],
        effects: {
          magic: 1,
          range: 1
        },
        logos: ['so']
      }
    }

    this.equipmentMapping = {
      'handed': 'hand',
      'armored': 'armor',
      'armed': 'arm',
      'belted': 'belt',
      'feeted': 'feet',
      'headed': 'head',
      'legged': 'legs',
      'necked': 'neck',
      'shouldered': 'shoulder'
    };
    
    this.reverseEquipmentMapping = {
      'hand': 'handed',
      'armor': 'armored',
      'arm': 'armed',
      'belt': 'belted',
      'feet': 'feeted',
      'head': 'headed',
      'legs': 'legged',
      'neck': 'necked',
      'shoulder': 'shouldered'
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
  