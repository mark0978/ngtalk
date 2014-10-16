'use strict';

/**
 * @ngdoc function
 * @name ngtalkApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngtalkApp
 */
angular.module('ngtalkApp')
  .controller('AboutCtrl', function ($scope, PeopleFactory, $rootScope) {

      $rootScope.appTabs.activeTab = 'about';

      PeopleFactory.getList().then(function(people) {
          $scope.people = people;
      });
  });
