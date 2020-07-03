angular.
  module('app').
  service('classesService', function() {
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
      sessionStorage.setItem('classIndex', this.classIndex);
    };

    var sessionStorageClassIndex = parseInt(sessionStorage.getItem('classIndex'));
    this.classIndex = isNaN(sessionStorageClassIndex) || sessionStorageClassIndex < 0 || sessionStorageClassIndex >= this.items.length ?
      0 : sessionStorageClassIndex;

    this.currentClass = undefined;
    this.refreshClass();
  });
  