angular.
  module('app').
  service('achievementsService', function(translateFilter) {
    this.achievements = ['attack', 'magic', 'armor', 'cooldown', 'range', 'movementspd'];
  });
  