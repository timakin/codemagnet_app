'use strict';

describe('Filter: dailyLoop', function () {

  // load the filter's module
  beforeEach(module('codemagnetAppApp'));

  // initialize a new instance of the filter before each test
  var dailyLoop;
  beforeEach(inject(function ($filter) {
    dailyLoop = $filter('dailyLoop');
  }));

  it('should return the input prefixed with "dailyLoop filter:"', function () {
    var text = 'angularjs';
    expect(dailyLoop(text)).toBe('dailyLoop filter: ' + text);
  });

});
