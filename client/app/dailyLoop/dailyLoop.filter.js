'use strict';

angular.module('codemagnetAppApp')
  .filter('dailyLoop', function () {
    return function (thing, day) {
      console.log(thing);
      console.log(day);
    };
  });
