angular.
  module('equipment').
  component('equipment', {
    templateUrl: '/app/equipment/equipment.component.html',
    controller: function($rootScope, $scope, classesService, itemsService, statsService, equipmentService) {
        $scope.itemsService = itemsService;
        $scope.statsService = statsService;
        $scope.equipmentService = equipmentService;
        $rootScope.greybg = false;

        var $equipment = $("#equipment");

        var freeInventorySlotSelector = '#inventory .slot:not(:has(*))';

        var getEquippedDraggable = function(item) { return $($("#equipment #"+item.name)[0]); }
        var getFreeInventorySlot = function() { return $($(freeInventorySlotSelector)[0]); }
        var getDraggableItemId = function(draggable) { return draggable.attr('id'); }

        var equip = function(slot, draggable) { updateEquip(slot, draggable, true); }
        var unequip = function(slot, draggable, noApply) { updateEquip(slot, draggable, false, noApply); }

        var updateEquip = function(slot, draggable, add, noApply) {
            // TODO: Add cases with two-handed and feeted to remove the other one and move it back to the inventory
            var id = getDraggableItemId(draggable);
            var item = itemsService.byName(id);

            slot.append(draggable);
            draggable.css('top', '');
            draggable.css('left', '');

            if ((add && !equipmentService.equip(item)) || (!add && !equipmentService.unequip(item))) return;
            if (!noApply) $scope.$apply();
        }

        var initDroppable = function(scope) {
            $('.slot').droppable({
                accept: function(draggable) {
                    const $this = $(this);
                    if ($this.children().length > 0) return false;
                    const slotType = $this.attr('data-type');
                    const draggableType = draggable.attr('data-type');
                    const draggableClasses = draggable.attr('classes').split(/\s/).filter(Boolean);
                    if (slotType != undefined && itemsService.reverseEquipmentMapping[slotType] != draggableType) return false;
                    if (draggableClasses.length > 0 && draggableClasses.indexOf(classesService.currentClass.name) == -1) return false;
                    return true;
                },
                drop: function(ev, ui) {
                    const $this = $(this);
                    if ($.contains($equipment.get(0), $this.get(0))) {
                        equip($this, ui.draggable);
                    } else {
                        unequip($this, ui.draggable, scope);
                    }
                }
            });
        }

        var initDraggable = function() {
            for (const stat in itemsService.equipmentMapping) {
                const slotType = itemsService.equipmentMapping[stat];
                const selector = '#equipment .slot[data-type="'+slotType+'"]:not(:has(*)), '+freeInventorySlotSelector;

                $('[data-type='+stat+']').draggable({
                    revert: 'invalid',
                    revertDuration: 125,
                    snap: selector,
                    snapMode: 'inner',
                    stack: '#inventory',
                    snapTolerance: 24,
                    scroll: false,
                    start: function() {
                        const $this = $(this);
                        const item = itemsService.byName($this.attr('id'));
                        $(selector).addClass('border border-warning');
                        if (item.half) $this.addClass('half');
                    },
                    stop: function(ev, ui) {
                        const $this = $(this);
                        const item = itemsService.byName($this.attr('id'));
                        $('.slot.border.border-warning').removeClass('border border-warning');
                        if (!$.contains($equipment.get(0), $(ev.target).get(0))) $(this).removeClass('half');
                    }
                });
            }
        }

        var unequipIncompatibleStuff = function() {
            var itemNames = equipmentService.itemNames();
            for (const itemName of itemNames) {
                var item = itemsService.byName(itemName);
                if (!equipmentService.isEquippable(item)) {
                    var slot = getFreeInventorySlot();
                    var draggable = getEquippedDraggable(item);
                    unequip(slot, draggable, true);
                }
            }
        }; 

        $(window).ready(function() {
            initDroppable();
            initDraggable();
        });

        $scope.$on("classChanged", unequipIncompatibleStuff);
    }
  });