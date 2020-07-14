angular.
  module('app').
  service('equipmentService', function(itemsService, statsService, classesService) {
  	var statEquipped = {};

    for (const stat of statsService.items) {
        statEquipped[stat] = 0;
    }

    var equipment = {};

    this.itemNames = function() { return Object.keys(equipment) };

    this.totalStatEquipped = function(name) { return statEquipped[name]; };

    this.isEquippable = function(item) {
        return item.classes.length == 0 || item.classes.indexOf(classesService.currentClass.name) != -1;
    }

    this.isEquipped = function(itemName) {
    	return equipment[itemName] != true;
    }

    this.equip = function(item) {
    	if (equipment[item.name]) return false;
    	equipment[item.name] = true;

        for (const effect in item.effects) {
            statEquipped[effect] += item.effects[effect];
        }

    	return true;
    }

    this.unequip = function(item) {
    	if (!equipment[item.name]) return false;
    	delete equipment[item.name];

        for (const effect in item.effects) {
            statEquipped[effect] -= item.effects[effect];
        }

    	return true;
    }  
});
  