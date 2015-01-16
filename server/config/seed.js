/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

Thing.find({}).remove(function() {
  Thing.create({
    name: 'google',
    url: 'http://google.com',
    info: 'test',
    active: 1,
    upvotes: 5,
    created_at: Date.now()
  }, {
    name: 'google',
    url: 'http://google.com',
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
