angular.
  module('equipment').
  component('equipment', {
    templateUrl: '/app/equipment/equipment.component.html',
    controller: function($scope, classesService, itemsService, statsService) {
        $scope.itemsService = itemsService;
        $scope.statsService = statsService;
        $scope.equippedTotal = {};

        // TODO: Set default gear based on class
        // TODO: On class change, unequip everything that is not compatible

        var equipment = [];

        var total = {};
        var itemsByStat = {};
        for (const stat of statsService.stats) {
            total[stat] = 0;
            $scope.equippedTotal[stat] = 0;
            itemsByStat[stat] = [];
        }

        for (const item of itemsService.items) {
            for (const effect in item.effects) {
                total[effect] += item.effects[effect];
                itemsByStat[effect].push(item);
            }
        }

        $scope.statTotal = function(name) {
            return total[name];
        };

        $scope.statItems = function(name) {
            return itemsByStat[name];
        }

        $scope.isEquippable = function(item) {
            return item.classes.length == 0 || item.classes.indexOf(classesService.currentClass.name) != -1;
        }

        var getDraggableItemId = function(draggable) {
            return draggable.attr('id');
        }

        var equip = function(slot, draggable) {
            updateEquip(slot, draggable, true);
        }

        var unequip = function(slot, draggable) {
            updateEquip(slot, draggable, false);
        }

        var updateEquip = function(slot, draggable, add) {
            // TODO: Add cases with two-handed and feeted to remove the other one and move it back to the inventory
            var id = getDraggableItemId(draggable);
            var index = equipment.indexOf(id);

            slot.append(draggable);
            draggable.css('top', '');
            draggable.css('left', '');

            if ((add && index != -1) || (!add && index == -1)) return;


            var item = itemsService.byName(id);
            item.equipped = add;

            if (add) { equipment.push(id); }
            else { equipment.splice(index, 1); }
            
            for (const effect in item.effects) {
                $scope.equippedTotal[effect] += (add ? 1 : -1) * item.effects[effect];
            }
            $scope.$apply();
        }

        $(window).ready(function() {

            var $equipment = $("#equipment");
            for (const itemName of classesService.currentClass.items) {
                const item = itemsService.byName(itemName);
            }

        	$('.slot').droppable({
        		accept: function(draggable) {
                    const $this = $(this);
                    if ($this.children().length > 0) return false;
                    const slotType = $this.attr('type');
                    const draggableType = draggable.attr('type');
                    const draggableClasses = draggable.attr('classes').split(/\s/).filter(Boolean);
                    if (slotType && itemsService.reverseEquipmentMapping[slotType].indexOf(draggableType) == -1) return false;
                    if (draggableClasses.length > 0 && draggableClasses.indexOf(classesService.currentClass.name) == -1) return false;
                    return true;
                },
                drop: function(ev, ui) {
                    const $this = $(this);
                    if ($.contains($equipment.get(0), $this.get(0))) {
                        equip($this, ui.draggable);
                    } else {
                        unequip($this, ui.draggable);
                    }
                }
        	});

            for (const stat in itemsService.equipmentMapping) {
                const slotType = itemsService.equipmentMapping[stat];
                const selector = '#equipment .slot[type="'+slotType+'"]:not(:has(*)), #inventory .slot:not(:has(*))';

                $('[type='+stat+']').draggable({
                    revert: 'invalid',
                    revertDuration: 125,
                    snap: selector,
                    snapMode: 'inner',
                    stack: '#inventory',
                    snapTolerance: 24,
                    scroll: false,
                    start: function() {
                        $(selector).addClass('border border-warning');
                    },
                    stop: function(ev, ui) {
                        $('.slot.border.border-warning').removeClass('border border-warning');
                    }
                });
            }
        });
    }
  });