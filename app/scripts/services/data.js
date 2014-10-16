'use strict';
angular.module('ngtalkApp')
    .factory('PeopleFactory', function($http, $log, $rootScope, $q, lodash, $timeout) {
        var people;

        $rootScope.dataService = {};

        function getJson() {
            var deferred = $q.defer();

            $rootScope.dataService.people = 'loading';

            $timeout(function() {
                $http.get('people.json').then(function(response) {
                    deferred.resolve(response.data);
                }).finally(function() {
                    $rootScope.dataService.people = null;
                });
            }, 1);
            return deferred.promise;
        }

        return {
            getList: function() {
                var promise = getJson();

                promise.then(function(returnedPeople) {
                    people = returnedPeople;
                    // Add a computed property to the data before it gets handed to the controller
                    lodash.forEach(people, function(person) {
                        person.idx2 = person.id * 2;
                        person.images = [
                            {
                                name: person.name + ' Img',
                                id: Math.random()
                            },
                            {
                                name: person.name + ' Img2',
                                id: Math.random()
                            }
                        ];
                    });
                });
                return promise;
            },
            put: function(person) {
                var index = lodash.findIndex(people, {id: person.id});
                if(index >= 0) {
                    angular.copy(person, people[index]);
                } else {
                    people.push(person);
                }
            }
        };
    });
