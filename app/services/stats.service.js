angular.
  module('app').
  service('statsService', function() {
    var dictionary = {
      'attack': {
        shortName: 'attack',
        title: 'Attack',
        description: 'How percussive your code is',
      },
      'armor': {
        shortName: 'armor',
        title: 'Armor',
        description: 'How bug-resistant your code is'
      },
      'cooldown': {
        shortName: 'cooldown',
        title: 'Cooldown',
        description: 'How fast you write code'
      },
      'range': {
        shortName: 'range',
        title: 'Range',
        description: 'How far you project yourself'
      },
      'movementspd': {
        shortName: 'movementspd',
        title: 'Movement Speed',
        description: 'How fast you can adapt'
      }
    };

    this.stats = Object.values(dictionary);

    this.byName = function(name) {
      return dictionary[name];
    }

    this.tooltip = function(stat) {
      return '<h6 class="text-info">'+stat.title+'</h6><div>'+stat.description+'</div>';
    }
  });
  