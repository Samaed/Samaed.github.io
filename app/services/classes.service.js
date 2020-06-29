angular.
  module('app').
  service('classesService', function() {
    this.classIndex = 0;
    this.currentClass = undefined;

    var dictionary = {
      wizard: {
        name: 'wizard',
        spells: [],
        items: ['cloaks','book','boots','gloves','pants','helmets']
      },
      archer: {
        name: 'archer',
        spells: [],
        items: []
      },
      knight: {
        name: 'knight',
        spells: [],
        items: []
      },
      hobbyist: {
        name: 'hobbyist',
        spells: [],
        items: []
      }
    }

    this.items = Object.values(dictionary);

    this.byName = function(name) {
        return dictionary[name];
    };

    this.nextClass = function() {
      this.classIndex = this.incrementClass(this.classIndex, this.items, 1);
      this.refreshClass();
    };

    this.previousClass = function() {
      this.classIndex = this.incrementClass(this.classIndex, this.items, -1);
      this.refreshClass();
    };

    this.incrementClass = function(value, array, increment) {
      return (value + increment + array.length) % array.length;
    };

    this.refreshClass = function() {
      this.currentClass = this.items[this.classIndex];
    };

    this.refreshClass();
  });
  