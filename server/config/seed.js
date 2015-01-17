/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

Thing.find({}).remove(function() {
  Thing.create({
    name: 'High speed search with ag',
    url: 'https://github.com/ggreer/the_silver_searcher/blob/5e491d7211b0f77d03befd842ca5d6bd44ad244c/src/util.c#L140',
    info: 'test',
    active: 1,
    upvotes: 5,
    created_at: Date.now()
  }, {
    name: 'Twitter API limit best practice',
    url: 'https://github.com/sferik/twitter/commit/0c9f9d6a15835a0260a5a56a8aaffdc3f3e39eed',
    info: 'test',
    active: 1,
    upvotes: 5,
    created_at: Date.now()-1000*60*60*24*1
  }, {
    name: 'Recursion payment in Rails',
    url: 'https://www.omniref.com/ruby/gems/webpay/3.1.2/symbols/WebPay::Recursion',
    info: 'test',
    active: 1,
    upvotes: 5,
    created_at: Date.now()-1000*60*60*24*1
  }, {
    name: 'google',
    url: 'http://google.com',
    info: 'test',
    active: 1,
    upvotes: 5,
    created_at: Date.now()-1000*60*60*24*2
  }, {
    name: 'google',
    url: 'http://google.com',
    info: 'test',
    active: 1,
    upvotes: 5,
    created_at: Date.now()-1000*60*60*24*2
  }, {
    name: 'google',
    url: 'http://google.com',
    info: 'test',
    active: 1,
    upvotes: 5,
    created_at: Date.now()-1000*60*60*24*3
  }, {
    name: 'google',
    url: 'http://google.com',
    info: 'test',
    active: 1,
    upvotes: 5,
    created_at: Date.now()-1000*60*60*24*3
  }, {
    name: 'google',
    url: 'http://google.com',
    info: 'test',
    active: 1,
    upvotes: 5,
    created_at: Date.now()-1000*60*60*24*3
  }, function() {
    console.log('finished populating things');
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});
