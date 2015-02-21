'use strict';

angular.module('codemagnetAppApp')
  .controller('CodepostCtrl', function ($scope) {
    $scope.message = 'Hello';
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
