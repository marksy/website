(function(){
	'use strict';

	// var angular = require('angular');
	// var uiRouter = require('angular-ui-router');

	var fandango = angular.module('fandango', ['ui.router']);

	var WorkSubmenuService = require('./js/services/WorkSubmenuService.js');

	var HomeController = require('./js/controllers/HomeController.js');

	var WorkController = require('./js/controllers/WorkController.js');//

	var WorkTMWController = require('./js/controllers/WorkTMWController.js');
	var WorkRPMController = require('./js/controllers/WorkRPMController.js');
	var WorkCreditSuisseController = require('./js/controllers/WorkCreditSuisseController.js');
	var WorkAlpariController = require('./js/controllers/WorkAlpariController.js');
	var WorkirisController = require('./js/controllers/WorkirisController.js');
	var WorkSummerBreakController = require('./js/controllers/WorkSummerBreakController.js');
	var LottoLogicController = require('./js/controllers/LottoLogicController.js');
	var TfSparkController = require('./js/controllers/TfSparkController.js');
	var TheTinController = require('./js/controllers/TheTinController.js');
	var PotentialifeController = require('./js/controllers/PotentialifeController.js');

	var ContactController = require('./js/controllers/ContactController.js');


	fandango.config(function($stateProvider, $urlRouterProvider, $compileProvider,$locationProvider) {

		$compileProvider.debugInfoEnabled(false);
		$locationProvider.html5Mode(true);

	    $urlRouterProvider.otherwise('/');

	    $stateProvider
			.state('home', {
	      url: '/',
	      templateUrl: 'partials/home.html',
				controller: 'HomeController'
	    })
      .state('work', {
				url: '/work',
				controller: 'WorkController',
				templateUrl: 'partials/work.html'
      })
	        .state('tmw', {
	        	url: '/work/tmw',
	        	controller: 'WorkTMWController',
	        	templateUrl: 'partials/client.html'
	        })
	        .state('rpm', {
	        	url: '/work/rpm',
	        	controller: 'WorkRPMController',
	        	templateUrl: 'partials/client.html'
	        })
	        .state('credit-suisse', {
	        	url: '/work/credit-suisse',
	        	controller: 'WorkCreditSuisseController',
	        	templateUrl: 'partials/client.html'
	        })
	        .state('alpari', {
	        	url: '/work/alpari',
	        	controller: 'WorkAlpariController',
	        	templateUrl: 'partials/client.html'
	        })
	        .state('iris', {
	        	url: '/work/iris',
	        	controller: 'WorkirisController',
	        	templateUrl: 'partials/client.html'
	        })
	        .state('summer-break', {
	        	url: '/notreallywork/summer-break',
	        	controller: 'WorkSummerBreakController',
	        	templateUrl: 'partials/client.html'
	        })
					.state('lotto', {
						url: '/work/lotto',
	        	controller: 'LottoLogicController',
	        	templateUrl: 'partials/client.html'
					})
					.state('tfspark', {
						url: '/work/tfspark',
	        	controller: 'TfSparkController',
	        	templateUrl: 'partials/client.html'
					})
					.state('thetin', {
						url: '/work/the-tin',
	        	controller: 'TheTinController',
	        	templateUrl: 'partials/client.html'
					})
					.state('potentialife', {
						url: '/work/potentialife',
	        	controller: 'PotentialifeController',
	        	templateUrl: 'partials/client.html'
					})
      .state('contact', {
				url: '/contact',
				templateUrl: 'partials/contact.html',
				controller: 'ContactController'
      });
	});

})();
