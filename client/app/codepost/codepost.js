'use strict';

angular.module('codemagnetAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('codepost', {
        url: '/codepost',
        templateUrl: 'app/codepost/codepost.html',
        controller: 'CodepostCtrl'
      })
      .state('new', {
        url: '/codepost/new',
        templateUrl: 'app/codepost/new.html',
        controller: 'CodepostCtrl'
      });
  });
