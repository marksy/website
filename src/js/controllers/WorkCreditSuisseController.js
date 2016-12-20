// WorkRPMController.js
// WorkController.js

var fandango = angular.module('fandango');

fandango.controller('WorkCreditSuisseController', ['$scope', '$log', '$sce', function($scope, $log, $sce) {

  var vm = $scope;

  document.body.scrollTop = document.documentElement.scrollTop = 0;
  

  vm.jobname = 'Credit Suisse';
  vm.dates = [
    {
      start: 'June 2015',
      end: 'May 2016'
    }
  ];
  vm.skills = ['Sass', 'Grunt', 'AngularJS', 'd3', 'Jasmine', 'Teamcity', 'Webpack', 'React' ];
  vm.myrole = '<p>I started at Credit Suisse halfway through 2015, working on Risk Aggregator. The base framework was AngularJS in which the Risk Aggregator module was loaded into a global application dynamically. It allowed to have many small apps load in and out, however came with many problems (mostly tied to the module loading base application). We were also tied to using an outdated version of AngularJS, which made it hard to progress with ease. Technical limitations were also a challenge workin in such a strict environment. I restructured the Risk Aggregator, allowed the app to consume a stream of data which was piped into an HTML5 grid (mostly a virtualised datagrid/table), switchable settings (such as theme, environments), filter and reorder the data. </p> <p>I added a test framework with some tests, and added it to our TeamCity builds so we could see CodeCoverage (and keep our coding honest).</p> <p>We also branched away from our version 1.0 app and started anew by using Webpack and ReactJS. We (myself and another developer) built most of the app within a week, recycling some code but also harnessing the power of new technology.</p> <p>In May this year, there were some company restructures, pay cuts and I was put onto another team, which were doing exactly the same but using a Javascript preprocessor ClosureScript. I thought it would make a good time to part ways and take a month off to hone some DIY skills over the summer, around the house.</p><p>I can\'t share much of what I did due to the tight security some financial insitutions hold, however an early demo of the app i built can be seen here (note: the datagrid doesn\'t show because the nameserver was down):</p><div class="embed-container"><iframe src="https://player.vimeo.com/video/174428494" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>';
  vm.bindThis = $sce.trustAsHtml(vm.myrole);

}]);