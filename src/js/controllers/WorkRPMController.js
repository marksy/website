// WorkRPMController.js

var fandango = angular.module('fandango');

fandango.controller('WorkRPMController', ['$scope', '$log', '$sce', '$state', 'WorkSubmenuService', function($scope, $log, $sce, $state, WorkSubmenuService) {

  var vm = $scope;

  document.body.scrollTop = document.documentElement.scrollTop = 0;
  
//
  // vm.latestJob;
  // vm.previousJob = 'credit-suisse';

  vm.jobname = 'RPM Ltd.';
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
  vm.skills = ['Sass', 'Gulp', 'HTML5', 'jQuery', 'AngularJS', 'Cordova', 'Apple iOS distribution' ];
  vm.myrole = '<p>Freelance work for RPM Ltd, starting in February 2015 I worked on a project for Smart Energy. They have created smart meters which will be installed in every home in the UK in the future. The game was initially based on the old Whack-a-mole type of game, where the point of the game was to keep the appliances under control (and save money doing so). However the client wanted to distance them from any monetry values, in case it mislead anyone. It was built in AngularJS (used localStorage), FT fastclick, HTML5, Sass/CSS3 (sprite animations) and JavaScript (jQuery). I then also wrapped the game up into a iOS iPad app using Cordova, to be used by staff on the floor at the event.</p><p> After that I created an iPad app for Sky Rides (bicycle events) which allowed the administrators to check riders into each gate. The app was again, Angular and Cordova (with QR reader plugin) and distributed via a private server (enterprise app). View a demo here:</p><iframe src="https://player.vimeo.com/video/174381573?title=0&byline=0&portrait=0" width="480" height="639" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><p>About a year later, I came back to work on a few small projects one being the Fosters Cricket competition webapp. Developed in React, and cobbled together, I was brought in to tidy it up the styling, animations, automation. and get it finished. </p>';
  vm.bindThis = $sce.trustAsHtml(vm.myrole);

}]);