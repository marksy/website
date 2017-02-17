// WorkRPMController.js

var fandango = angular.module('fandango');

fandango.controller('TfSparkController', ['$scope', '$log', '$sce', '$state', 'WorkSubmenuService', function($scope, $log, $sce, $state, WorkSubmenuService) {

  var vm = $scope;

  document.body.scrollTop = document.documentElement.scrollTop = 0;

  vm.jobname = 'The Frameworks Spark';
  vm.dates = [
    {
      start: 'October 2016',
      end: 'November 2016'
    }
  ];
  vm.skills = ['Sass', 'Gulp', 'Nunjucks templating', 'HTML5' ];
  vm.myrole = '<p>TF Spark asked me to come in and build a static site for Oracle using Nunjucks and (static) JSON. The JSON contained all of the text and image content, so it would be easy for them to update at a later day, as well as provide localised content for different languages.</p><p>It was a pretty basic build, requiring a full range of devices and viewports to be supported.</p>';
  vm.bindThis = $sce.trustAsHtml(vm.myrole);
  vm.screens = [
    {
      name: 'Landing page',
      url: '../images/client/oracle-1.jpg'
    },
    {
      name: 'Landing page (mobile)',
      url: '../images/client/oracle-3.jpg',
      mobile: true
    },
    {
      name: 'Download page',
      url: '../images/client/oracle-2.jpg'
    },
    {
      name: 'Download page (mobile)',
      url: '../images/client/oracle-4.jpg',
      mobile: true
    }
  ];

}]);
