angular.
  module('app').
  service('statsService', function(itemsService, translateFilter) {
    this.items = ['attack', 'magic', 'armor', 'cooldown', 'range', 'movementspd'];

    var total = {};
    var itemsByStat = {};
    for (const stat of this.items) {
        total[stat] = 0;
        itemsByStat[stat] = [];
    }

    for (const item of itemsService.items) {
        for (const effect in item.effects) {
            total[effect] += item.effects[effect];
            itemsByStat[effect].push(item);
        }
    }

    this.statTotal = function(name) { return total[name]; };
    this.statItems = function(name) { return itemsByStat[name]; }

    this.tooltip = function(stat) {
      return '<h6 class="text-info">'+translateFilter('stats.'+stat+'.title')+'</h6><div>'+translateFilter('stats.'+stat+'.description')+'</div>';
    }
  });
  