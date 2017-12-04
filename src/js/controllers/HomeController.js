// HomeController.js
var fandango = angular.module('fandango');

fandango.controller('HomeController', ['$scope', '$log', 'WorkSubmenuService', function($scope, $log, WorkSubmenuService) {

  var vm = $scope;
  var body = document.getElementsByTagName('body');
  var counter = 0;
    
  vm.name = {
    "first": "Mark",
    "last": "Chambers."
  };

  vm.mattjames = function() {
    counter += 1;
    if(counter == 7) {
      document.getElementsByTagName('body')[0].className+=" mattjamesishere";
      vm.name = {
        "first": "Matt",
        "last": "James 😎"
      };
    }
  };



}]);
