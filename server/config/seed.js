/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

  Thing.create({
    name: 'High speed search with ag',
    url: 'https://github.com/ggreer/the_silver_searcher/blob/5e491d7211b0f77d03befd842ca5d6bd44ad244c/src/util.c#L140',
    info: 'The substitute of grep command, "ag" is super quick to search. BM algorithm is the reason. Boyer-Moore String Search Algorithm is an efficient string searching.  The key feature of the algorithm is to match on the tail of the pattern rather than the head, and to skip along the text in jumps of multiple characters rather than searching every single character in the text.',
    active: 1,
    upvotes: 5,
    createdAt: Date.now()
  }, {
    name: 'Twitter API limit best practice',
    url: 'https://github.com/sferik/twitter/commit/0c9f9d6a15835a0260a5a56a8aaffdc3f3e39eed',
    info: "It's best to code defensively and not hit the limit. Hitting the limit too much could get you blacklisted by Twitter according to their API docs. This code was recently added to sferik's twitter Ruby gem for this purpose.",
    active: 1,
    upvotes: 5,
    createdAt: Date.now()
  }, {
    name: 'How Hacker News ranking algorithm works',
    url: 'http://amix.dk/blog/post/19574',
    info: 'Basically: (votes - 1) / (item_hour_age+2)**gravity',
    active: 1,
    upvotes: 5,
    createdAt: Date.now()
  }, {
    name: 'Disabling garbage collector improved PHP performance over 70%',
    url: 'https://github.com/composer/composer/commit/ac676f47f7bbc619678a29deae097b6b0710b799',
    info: "PHP garbage collector use enormous amount of memory.",
    active: 1,
    upvotes: 5,
    createdAt: Date.now()
  }, function() {
    console.log('finished populating things');
  });

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
