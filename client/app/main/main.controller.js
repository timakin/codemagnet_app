'use strict';

angular.module('codemagnetAppApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThingName === '' || $scope.newThingUrl === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThingName, url: $scope.newThingUrl, created_at: Date.now() });

      $scope.newThingName = '';
      $scope.newThingUrl = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.incrementUpvotes = function(thing) {
      $http.put('/api/things/' + thing._id + '/upvote');
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
