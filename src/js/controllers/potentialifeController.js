// WorkRPMController.js

var fandango = angular.module('fandango');

fandango.controller('PotentialifeController', ['$scope', '$log', '$sce', '$state', 'WorkSubmenuService', function($scope, $log, $sce, $state, WorkSubmenuService) {

  var vm = $scope;

  document.body.scrollTop = document.documentElement.scrollTop = 0;

  vm.jobname = 'Potentialife';
  vm.dates = [
    {
      start: 'March 2017',
      end: 'May 2017'
    }
  ];
  vm.skills = ['Angular 1.6', 'ES6 syntax', 'Sass', 'HTML5' ];
  vm.myrole = '<p>I was brought in to help build a learning platform using Angular 1.6 with ES6 components, webpack, videojs, d3/c3, Foundation and Sass. Content was served from custom PHP CMS and fed the app with JSON. I built components using ES6 syntax, and each component with unit tests so the code was stable and bugs were caught early. The application was made responsive (based on Foundation framework), for a wide range of devices including Windows 10 handset, iOS and desktop.</p><p>I used c3 for data driven charts such as bar, pie and spider charts. For video I used videojs, and customised the video to suit the clients requirements including custom skin, VTT captions and quality settings. This was delivered within the timeframe where we could spare time for user testing, which improved how some of the components worked.</p>';
  vm.bindThis = $sce.trustAsHtml(vm.myrole);

}]);
