// WorkRPMController.js
// WorkController.js

var fandango = angular.module('fandango');

fandango.controller('WorkAlpariController', ['$scope', '$log', '$sce', function($scope, $log, $sce) {

  var vm = $scope;

  document.body.scrollTop = document.documentElement.scrollTop = 0;


  vm.jobname = 'Alpari';
  vm.dates = [
    {
      start: 'October 2014',
      end: 'January 2015'
    }
  ];
  vm.skills = [ 'Sass', 'html5', 'jQuery', '.net/Umbraco' ];
  vm.myrole = '<p>Freelance work for Alpari involved day-to-day maintenance of their website (localised in eight languages), consulting on technologies and methods for future work, and new production on various sections of the site such as the new Client Updates. The Client Updates section was a complete rebuild of the existing blog-type post of news updates. It was built in .Net Umbraco, HTML5, CSS3 and jQuery. Subtle use of CSS3 animation was used for rollovers and effects.</p> <p>Unfortunately, Alpari UK became insolvent due to the Swiss Franc that unpinned from the Euro. This is why their website no longer has a trading office in the UK.</p>';
  vm.bindThis = $sce.trustAsHtml(vm.myrole);
  vm.screens = [
    {
      name: '',
      url: '../images/client/alpari-01.png'
    }
  ];

}]);