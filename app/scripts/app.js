'use strict';

/**
 * @ngdoc overview
 * @name ngtalkApp
 * @description
 * # ngtalkApp
 *
 * Main module of the application.
 */
angular
  .module('ngtalkApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngLodash', // Third party wrapper for lodash (not needed but shows adding to the DI)
    'ui.bootstrap',
    'dialogs.main',
    'dialogs.default-translations'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contacts', {
        templateUrl: 'views/contacts.html',
        controller: 'ContactsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function($rootScope) {
      // Define these objects so we can add members to them in various controllers
      $rootScope.dataService = {};
      $rootScope.appTabs = {};
  });
