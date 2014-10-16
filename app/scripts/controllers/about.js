'use strict';

/**
 * @ngdoc function
 * @name ngtalkApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngtalkApp
 */
angular.module('ngtalkApp')
  .controller('AboutCtrl', function ($scope, PeopleFactory, $rootScope, lodash) {

      $rootScope.appTabs.activeTab = 'about';

      PeopleFactory.getList().then(function(people) {
          $scope.people = people;
      });

      $scope.showImages = function(id) {
          var index = lodash.findIndex($scope.people, {id:id});

          $scope.activeImages = $scope.people[index].images;
      };
  });
