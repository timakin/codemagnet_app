'use strict';

angular.module('codemagnetAppApp')
  .filter('dailyLoop', function () {
    return function (thing, day) {
      function toDateFormat(date) {
        return date.toDateString();
      }

      if (typeof thing !== 'undefined' && typeof day !== 'undefined') {
        var rawCreated = new Date(thing.createdAt);
        var created = toDateFormat(rawCreated);
        var date = toDateFormat(day);
        if (created === date) {
          return true; 
        }
      }
    };
  });
