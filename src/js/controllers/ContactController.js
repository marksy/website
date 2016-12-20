// HomeController.js
var fandango = angular.module('fandango');

fandango.controller('ContactController', ['$scope', '$log', 'WorkSubmenuService', function($scope, $log, WorkSubmenuService) {

  var vm = $scope;

  vm.test = 'test';


  // WorkSubmenuService.set(true);
  // $log.info('WorkSubmenuService.submenuOpen', WorkSubmenuService.get());

  // vm.test = WorkSubmenuService.get();

}]);
