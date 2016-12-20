// WorkRPMController.js
// WorkController.js

var fandango = angular.module('fandango');

fandango.controller('WorkirisController', ['$scope', '$log', '$sce', function($scope, $log, $sce) {

  var vm = $scope;

  document.body.scrollTop = document.documentElement.scrollTop = 0;
  

  vm.jobname = 'iris';
  vm.dates = [
    {
      start: '2009',
      end: 'September 2014'
    }
  ];
  vm.skills = [ 'Sass', 'HTML5', 'jQuery', '.net/Umbraco', 'Team Mentoring' ];
  vm.myrole = '<p>I worked as a permanent member of staff at iris worldwide for over 5 years. I was involved with many projects and here are a few good ones I remember.</p><p>The MINI Aftersales project was one of my latest, and most enjoyable projects to work on. We were tasked to create a vehicle registration lookup and display a list of services available for upgrade or renew if they qualify.</p> <p>The project had to fit into MINI\'s existing site, which meant we had to include it as an iFrame. However it\'s likely that the project will be included natively in future revisions of the MINI site.</p> <p>I took care of the front-end and was the technical lead for project.</p> <p>MINI Aftersales was created in mind of all devices, not just desktop.</p> <p>Hue is a wireless RGB colour bulb set, which can be controlled over the internet. The client requested the site to be responsive and be localised in initially five languages.</p> <p>Whilst mentoring younger team members, I oversaw the front-end for the main site and tech-led the ifTTT and huecan projects to make sure everything was running they way it should. Other than that, I created the animations and media queries, helped with the integration into Umbraco and support the mid-front-end developer. </p>';
  vm.bindThis = $sce.trustAsHtml(vm.myrole);
  vm.screens = [
    {
      name: 'MINI',
      url: '../images/client/mini-01.png'
    },
    {
      name: 'Philips Hue',
      url: '../images/client/hue-01.png'
    }
  ];

}]);