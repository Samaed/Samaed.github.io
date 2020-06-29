angular.
  module('app').
  service('statsService', function(translateFilter) {
    this.stats = ['attack', 'magic', 'armor', 'cooldown', 'range', 'movementspd'];

    this.tooltip = function(stat) {
      return '<h6 class="text-info">'+translateFilter('stats.'+stat+'.title')+'</h6><div>'+translateFilter('stats.'+stat+'.description')+'</div>';
    }
  });
  