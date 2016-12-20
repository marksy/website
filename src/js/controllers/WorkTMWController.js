// WorkRPMController.js

var fandango = angular.module('fandango');

fandango.controller('WorkTMWController', ['$scope', '$log', '$sce', '$state', 'WorkSubmenuService', function($scope, $log, $sce, $state, WorkSubmenuService) {

  var vm = $scope;

  document.body.scrollTop = document.documentElement.scrollTop = 0;

  vm.jobname = 'TMW Unlimited';
  vm.dates = [
    {
      start: 'June 2016',
      end: 'July 2016'
    },
    {
      start: 'February 2015',
      end: 'June 2015'
    }
  ];
  vm.skills = ['Sass', 'Grunt', 'HTML5' ];
  vm.myrole = '<p>I was brought in to help with an internal website for one of TMW\'s clients, Nissan. Unfortunately there were some miscommunications about job roles and the person they outsourced the Drupal build to was under the impression they were also doing the front end. So my contract length was reduced but they found another (small but very quick turn around) registration site for Nissan. The backend was built in .net umbraco by their developer here and I built the frontend in a day using just HTML, Sass and grunt. <a href="https://leafpartnerships.co.uk" rel="noopener" target="_blank">https://leafpartnerships.co.uk</a></p>';
  vm.bindThis = $sce.trustAsHtml(vm.myrole);

}]);