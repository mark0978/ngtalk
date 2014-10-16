'use strict';

/**
 * @ngdoc function
 * @name ngtalkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngtalkApp
 */
angular.module('ngtalkApp')
  .controller('MainCtrl', function ($scope, $rootScope) {

      var something;
      $rootScope.appTabs.activeTab = 'home';

      $scope.awesomeThings = [
          'HTML5 Boilerplate',
          'AngularJS',
          'Karma',
          'Volkswagon'
      ];
      $scope.something = "SOMETHING WONDERFUL";
  });
