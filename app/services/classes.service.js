angular.
  module('app').
  service('classesService', function() {
    this.classIndex = 0;
    this.currentClass = undefined;

    this.classes = [
      {
      name: "Web Wizard",
      shortName: "wizard",
      spells: [
        {
          name: "AngularJS",
          shortName: "angular"
        },
        {
          name: "jQuery",
          shortName: "jquery"
        },
        {
          name: "HTML5",
          shortName: "html5"
        },
        {
          name: "CSS3",
          shortName: "css3"
        },
        {
          name: "Bootstrap",
          shortName: "bootstrap"
        }
      ],
      items: [
        {
          name: "corentin.haidon.fr",
          shortName: "site",
          url: "index.html"
        }
        ]
      },
      {
        name: "Backend Archer",
        shortName: "archer"
      },
      {
        name: "Video Game Knight",
        shortName: "knight",
        spells: [
          {
            name: "UE4",
            shortName: "ue4",
            url: "https://www.unrealengine.com"
          },
          {
            name: "Unity",
            shortName: "unity",
            url: "https://unity3d.com/"
          }
        ],
        items: [
          {
            name: "Anarcube",
            shortName: "anarcube"
          },
          {
            name: "404",
            shortName: "404"
          }
        ]
      },
      {
        name: "Hobbyist",
        shortName: "hobbyist",
        spells: [
          {
            name: "League of Legends",
            shortName: "lol"
          },
          {
            name: "Public Service Broadcasting",
            shortName: "psb",
            url: "https://www.youtube.com/user/PSBHQ"
          },
          {
            name: "Minecraft",
            shortName: "minecraft"
          }
        ],
        items: [
          {
            name: "W40K Tyrannides",
            shortName: "tyranids"
          },
          {
            name: "Sushis (& All Food)",
            shortName: "sushis"
          }
        ]
      }
    ];

    this.nextClass = function() {
      this.classIndex = this.incrementClass(this.classIndex, this.classes, 1);
      this.refreshClass();
    };

    this.previousClass = function() {
      this.classIndex = this.incrementClass(this.classIndex, this.classes, -1);
      this.refreshClass();
    };

    this.incrementClass = function(value, array, increment) {
      return (value + increment + array.length) % array.length;
    };

    this.refreshClass = function() {
      this.currentClass = this.classes[this.classIndex];
    };

    this.refreshClass();
  });
  