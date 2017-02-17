// WorkRPMController.js

var fandango = angular.module('fandango');

fandango.controller('TheTinController', ['$scope', '$log', '$sce', '$state', 'WorkSubmenuService', function($scope, $log, $sce, $state, WorkSubmenuService) {

  var vm = $scope;

  document.body.scrollTop = document.documentElement.scrollTop = 0;

  vm.jobname = 'The TIN';
  vm.dates = [
    {
      start: 'November 2016',
      end: 'December 2016'
    }
  ];
  vm.skills = ['Angular 1.6', 'Ionic', 'TypeScript', 'Sass', 'Gulp', 'HTML5' ];
  vm.myrole = '<p>I was brought into The TIN to build the Front End for an Ionic iOS enterprise application for PwC. The backend was built in .net Umbraco and served the Front End with JSON to consume.</p><p>I built out the components from a style-guide, so they could be used across the application. Then for each state, built the view up based on the design.</p><p>Ionic was good to use as the design was designed to be used with Ionic, however there were a few design elements which weren\'t, which posed a challenge and solution.</p><p>As it was an enterprise application, I cannot share the app link or provide screenshots.</p> ';
  vm.bindThis = $sce.trustAsHtml(vm.myrole);
  vm.screens = [
    {
      name: 'Landing page',
      url: '../images/client/pwc-1.jpg',
      mobile: true
    },
    {
      name: 'Onboarding 1',
      url: '../images/client/pwc-2.jpg',
      mobile: true
    },
    {
      name: 'Onboarding 2',
      url: '../images/client/pwc-3.jpg',
      mobile: true
    },
    {
      name: 'Onboarding 3',
      url: '../images/client/pwc-4.jpg',
      mobile: true
    },
    {
      name: 'My feed',
      url: '../images/client/pwc-5.jpg',
      mobile: true
    },
    {
      name: 'My preferences (edit)',
      url: '../images/client/pwc-6.jpg',
      mobile: true
    },
    {
      name: 'Article page',
      url: '../images/client/pwc-7.jpg',
      mobile: true
    },
    {
      name: 'Article page (scrolling down changes subnav)',
      url: '../images/client/pwc-8.jpg',
      mobile: true
    },
    {
      name: 'Article page (dynamic graphics on page)',
      url: '../images/client/pwc-9.jpg',
      mobile: true
    },
    {
      name: 'Favourites and Collections (groups)',
      url: '../images/client/pwc-10.jpg',
      mobile: true
    },
    {
      name: 'Creating a new favourite or collection',
      url: '../images/client/pwc-11.jpg',
      mobile: true
    },
    {
      name: 'Collections',
      url: '../images/client/pwc-12.jpg',
      mobile: true
    }
  ];

}]);
