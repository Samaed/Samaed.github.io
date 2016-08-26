var app = angular.module('App', []);

app.controller('Controller', function Controller($scope) {

  $scope.classes = [
    {
      name: "Web Wizard",
      shortName: "wizard"
    },
    {
      name: "Backend Archer",
      shortName: "archer"
    }
  ]
  $scope.currentClass = $scope.classes[0];

  $scope.phones = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];

});