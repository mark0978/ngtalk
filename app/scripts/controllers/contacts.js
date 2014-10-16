'use strict';

/**
 * @ngdoc function
 * @name ngtalkApp.controller:ContactsCtrl
 * @description
 * # ContactsCtrl
 * Controller of the ngtalkApp
 */
angular.module('ngtalkApp')
  .controller('ContactsCtrl', function ($scope, PeopleFactory, lodash, dialogs, $timeout, $rootScope) {

      $rootScope.appTabs.activeTab = 'contacts';

      PeopleFactory.getList().then(function(people) {
          $scope.people = people;
      });

      $scope.editPerson = function(id) {
          var index = lodash.findIndex($scope.people, {id:id});
          if(index >= 0) {
              $scope.activePerson = angular.copy($scope.people[index]);
          } else {
              $scope.activePerson = {};
          }
      };

      $scope.saveActivePerson = function() {
          if($scope.personForm.$valid) {
              PeopleFactory.put($scope.activePerson);
          } else {
              dialogs.error('I think you need to fix the form', 'Please get your act together!');
          }
      };
  });
