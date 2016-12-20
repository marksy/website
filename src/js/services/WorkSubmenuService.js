var fandango = angular.module('fandango');

fandango.factory('WorkSubmenuService', [function(menuBool) {

  var submenuOpen = false;

  return {
    set: function(menuBool) {
      submenuOpen = menuBool;
      return submenuOpen;
    },
    get: function() {
      return submenuOpen;
    }
  };

}]);