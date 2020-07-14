angular.
  module('app').
  service('talentsService', function(translateFilter) {
    var dictionary = {
      "birth": {
        icon: "apple",
        name: "birth"
      },
      "bsc": {
        icon: "scroll",
        name: "bsc"
      },
      "msc": {
        icon: "scroll",
        name: "msc"
      },
      "promoisen": {
        icon: "gem",
        name:"promoisen"
      },
      "maitrise": {
        icon: "scroll",
        name: "maitrise"
      },
      "promouqac": {
        icon: "gem",
        name: "promouqac"
      },
      "phd": {
        icon: "scroll",
        name: "phd",
        disabled: true
      },
      "assistant": {
        icon: "bag",
        name: "assistant"
      },
      "bcom": {
        icon: "bag",
        name: "bcom"
      },
      "ifremer": {
        icon: "bag",
        name: "ifremer"
      },
      "tymate": {
        icon: "bag",
        name: "tymate"
      }
    };

    this.byName = function(name) {
      return dictionary[name];
    }

    this.tooltip = function(talent) {
      var html = '<h6 class="text-info">'+translateFilter('talents.'+talent.name+'.title')+'</h6>';
      html += '<div>'+translateFilter('talents.'+talent.name+'.effect')+'</div>';
      html += '<div class="text-muted">'+translateFilter('talents.'+talent.name+'.description')+'</div>';
      return html;
    }
  });
  