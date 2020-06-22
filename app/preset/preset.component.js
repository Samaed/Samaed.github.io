angular.
  module('preset').
  component('preset', {
    templateUrl: '/app/preset/preset.component.html',
    controller: function($scope, classesService, itemsService, statsService) {
        $scope.itemsService = itemsService;
        $scope.statsService = statsService;
        $scope.equippedTotal = {};

        // TODO: Set default gear based on class

        var equipment = [];

        var total = {};
        var itemsByStat = {};
        for (const stat of statsService.stats) {
            total[stat.shortName] = 0;
            $scope.equippedTotal[stat.shortName] = 0;
            itemsByStat[stat.shortName] = [];
        }

        for (const item of itemsService.items) {
            for (const effect in item.effects) {
                total[effect] += item.effects[effect];
                itemsByStat[effect].push(item);
            }
        }

        // TODO: Compute the items per effect

        $scope.statTotal = function(name) {
            return total[name];
        };

        $scope.statItems = function(name) {
            return itemsByStat[name];
        }

        var getDraggableItemId = function(draggable) {
            return draggable.attr('id');
        }

        var equip = function(draggable) {
            updateEquip(draggable, true);
        }

        var unequip = function(draggable) {
            updateEquip(draggable, false);
        }

        var updateEquip = function(draggable, add) {
            var id = getDraggableItemId(draggable);
            var index = equipment.indexOf(id);

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

        	$('.slot').droppable({
        		accept: function(draggable) {
                    const $this = $(this);
                    if ($this.children().length > 0) return false;
                    const slotClass = $this.attr('class').split(/\s+/).find(cl => cl.startsWith('eqpt-'));
                    const draggableClass = draggable.attr('class').split(/\s+/).find(cl => cl.startsWith('eqpt-'));
                    if (slotClass && itemsService.reverseEquipmentMapping[slotClass].indexOf(draggableClass) == -1) return false;
                    return true;
                },
                drop: function(ev, ui) {
                    const $this = $(this);
                    // TODO: Add cases with two-handed and feeted to remove the other one and move it back to the inventory
                    $this.append(ui.draggable);
                    ui.draggable.css('top', '');
                    ui.draggable.css('left', '');
                    if ($.contains($equipment.get(0), $this.get(0))) {
                        equip(ui.draggable);
                    } else {
                        unequip(ui.draggable);
                    }
                }
        	});

            for (const stat in itemsService.equipmentMapping) {
                const slotClass = '.'+itemsService.equipmentMapping[stat];
                $('.'+stat).draggable({
                    revert: 'invalid',
                    revertDuration: 125,
                    snap: '.slot'+slotClass,
                    snapMode: 'inner',
                    stack: '#inventory',
                    snapTolerance: 24,
                    scroll: false,
                    start: function() {
                        $(slotClass+':not(:has(*))').addClass('border border-warning');
                    },
                    stop: function(ev, ui) {
                        $(slotClass+'.border.border-warning').removeClass('border border-warning');
                    }
                });
            }
        });
    }
  });