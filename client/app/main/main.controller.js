'use strict';

angular.module('codemagnetAppApp')
  .controller('MainCtrl', function ($scope, $http, socket, Auth/*, User*/) {
    $scope.awesomeThings = [];
    $scope.days = [];
    $scope.isAdmin = Auth.isAdmin;

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      $scope.days = allDays();
      $scope.langs = ['C', 'C#', 'C++', 'Clojure', 'CSS', 'D', 'Erlang', 'F#', 'Go', 'Haskell', 'HTML', 'J', 'Java', 'JavaScript', 'Lisp', 'Objective-C', 'Perl', 'PHP', 'Python', 'R', 'Ruby', 'Scala', 'SQL', 'Swift','Python'];
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if (!$scope.newThingName || !$scope.newThingUrl || !$scope.newThingInfo) {
        return;
      } else {
        $http.post('/api/things', {
            name: $scope.newThingName,
            url:  $scope.newThingUrl,
            language: $scope.newThingLanguage,
            info: $scope.newThingInfo,
            createdAt: Date.now()
          });
        $scope.newThingName = '';
        $scope.newThingUrl = '';
        $scope.newThingLanguage = '';
        $scope.newThingInfo = '';
      }
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

    var allDays = function() {
      // Today
      var today = new Date();
      var tYear = today.getFullYear();
      var tMonth = today.getMonth();
      var tDate = today.getDate();

      var days = [];
      for (var i = 0; i < 3; i++) {
        var oneDay = new Date(tYear, tMonth, tDate - i);
        days.push(oneDay);
      }
      return days;
    };
  });
