'use strict';

angular.module('codemagnetAppApp')
  .controller('CodepostNewCtrl', function ($scope, User, Auth) {
    $scope.errors = {};
  })
  .directive('Comment', function(reactDirective) {
      return reactDirective(Comment);
  })
  .directive('Share', function(reactDirective) {
      return reactDirective(Share);
  })
  .directive('Codepost', function(reactDirective) {
      return reactDirective(Codepost);
  });
