// WorkRPMController.js

var fandango = angular.module('fandango');

fandango.controller('LottoLogicController', ['$scope', '$log', '$sce', '$state', 'WorkSubmenuService', function($scope, $log, $sce, $state, WorkSubmenuService) {

  var vm = $scope;

  document.body.scrollTop = document.documentElement.scrollTop = 0;

  vm.jobname = 'Lotto Logic';
  vm.dates = [
    {
      start: 'August 2016',
      end: 'September 2016'
    }
  ];
  vm.skills = ['Sass', 'Gulp', 'ES6 (with Babel)', 'HTML5' ];
  vm.myrole = '<p>Lotto Logic required a series of HTML templates to be generated using HTML, Sass and JavaScript. The templates were to be used on a gambling website which bet against various countries lotto results. I created a set of reusable components from a PSD style-guide allowing the client to reuse the components throughout their PHP based CMS.</p><p>The also required a few JS components such as, number pickers, random number generator, carousels, triggering CSS animations.</p><p>The client was happy with the work, and has requested to work again at some point.</p>';
  vm.bindThis = $sce.trustAsHtml(vm.myrole);
  vm.screens = [
    {
      name: 'US state, main page',
      url: '../images/client/lottologic-01.jpg'
    },
    {
      name: 'Number generator',
      url: '../images/client/lottologic-02.jpg'
    },
    {
      name: 'Number checker',
      url: '../images/client/lottologic-03.jpg'
    },
    {
      name: 'Lotto game types',
      url: '../images/client/lottologic-04.jpg' 
    }
  ];

}]);
