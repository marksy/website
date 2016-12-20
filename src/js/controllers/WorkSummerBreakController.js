// WorkRPMController.js
// WorkController.js

var fandango = angular.module('fandango');

fandango.controller('WorkSummerBreakController', ['$scope', '$log', '$sce', function($scope, $log, $sce) {

  var vm = $scope;
  
  document.body.scrollTop = document.documentElement.scrollTop = 0;


  vm.jobname = 'Summer break';
  vm.dates = [
    {
      start: 'May 2016',
      end: 'June 2016'
    }
  ];
  vm.skills = [ 'Gardening', 'Shed building', 'Painting', 'Plastering', 'Shelf installation' ];
  vm.myrole = '<p>Over the past 15 years, I have pretty much been working, so this year (before childrens) I wanted to take some time off and do some DIY. We bought a flat earlier in the year which turns out needs renovation. One surprise was a hole in the bathroom wall, wallpapered over. Another was multiple water systems in the flat (which meant either scalding hot or freezing cold showers). The biggest problem is probably the lack of insulation between us and the barefloors in the flat upstairs. </p> <p>Built a man shed, it may be on a funny angle. Plastered the hole and painted the bathroom, which you may say is a lot darker than expected. Planted some delicious South American fruit trees that haven\'t died yet. </p> ';
  vm.bindThis = $sce.trustAsHtml(vm.myrole);


}]);