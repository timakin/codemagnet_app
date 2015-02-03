'use strict';

angular.module('codemagnetAppApp')
  .controller('NavbarNotransparentCtrl', function ($scope, $location, Auth) {
//    $scope.menu = [{
//      'title': 'Home',
//      'link': '/'
//    }];
    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/gogoadmin');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
