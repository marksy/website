// WorkController.js

var fandango = angular.module('fandango');

fandango.controller('WorkController', ['$scope', '$log', 'WorkSubmenuService', function($scope, $log, WorkSubmenuService) {

  var vm = $scope;

  vm.workset = [
    {
      id: 0,
      name: 'iris worldwide',
      link: 'iris',
      startDate: '2009',
      endDate: 'Sep 2014',
      vacation: false
    },{
      id: 1,
      name: 'Alpari',
      link: 'alpari',
      startDate: 'October 2014',
      endDate: 'January 2015',
      vacation: false
    },
    {
      id: 2,
      name: 'RPM',
      link: 'rpm',
      startDate: 'February 2015',
      endDate: 'July 2015',
      vacation: false
   },
    {
      id: 3,
      name: 'Credit Suisse',
      link: 'credit-suisse',
      startDate: 'June 2015',
      endDate: 'May 2016',
      vacation: false
    },
    {
      id: 4,
      name: 'Summer Break',
      link: 'summer-break',
      startDate: 'May 2016',
      endDate: 'June 2016',
      vacation: true
    },
    {
      id: 5,
      name: 'RPM',
      link: 'rpm',
      startDate: 'June 2016',
      endDate: 'July 2016',
      vacation: false
    },
    {
      id: 6,
      name: 'TMW Unlimited',
      link: 'tmw',
      startDate: 'July 2016',
      endDate: 'August 2016',
      vacation: false
    },
    {
      id: 7,
      name: 'Lotto Logic',
      link: 'lotto',
      startDate: 'August 2016',
      endDate: 'September 2016',
      vacation: false
    },
    {
      id: 8,
      name: 'Paternity leave',
      link: 'paternity-leave',
      startDate: 'September 2016',
      endDate: 'October 2016',
      vacation: true
    },
    {
      id: 9,
      name: 'The Frameworks Spark',
      link: 'tfspark',
      startDate: 'October 2016',
      endDate: 'present',
      vacation: false
    }
  ];


//  vm.menuOpen = WorkSubmenuService.get();




}]);
