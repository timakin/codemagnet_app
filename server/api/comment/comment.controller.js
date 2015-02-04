/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Comment = require('./comment.model');

// Get list of things
exports.index = function(req, res) {
  Comment.find(function (err, things) {
    if(err) { return handleError(res, err); }
    return res.json(200, things);
  });
};

// Get a single thing
exports.show = function(req, res) {
  console.log("params-",req.params.id);
  Comment.find({'thingId':req.params.id}, function (err, comments) {
    if(err) { return handleError(res, err); }
    if(!comments) { return res.send(404); }
    return res.json(comments);
  });
};

// Creates a new thing in the DB.
exports.create = function(req, res) {
  console.log("create",req.body);
  Comment.create(req.body, function(err, thing) {
    console.log("create-callback",err,thing);
    if(err) { return handleError(res, err); }
    return res.json(201, thing);
  });
};

// Updates an existing thing in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Comment.findById(req.params.id, function (err, thing) {
    if (err) { return handleError(res, err); }
    if(!thing) { return res.send(404); }
    var updated = _.merge(thing, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, thing);
    });
  });
};

// Deletes a thing from the DB.
exports.destroy = function(req, res) {
  Comment.findById(req.params.id, function (err, thing) {
    if(err) { return handleError(res, err); }
    if(!thing) { return res.send(404); }
    thing.remove(function (err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

exports.upvote = function(req, res) {
  Comment.findById(req.params.id, function (err, thing) {
    if(err) { return handleError(res, err); }
    if(!thing) { return res.send(404); }
    thing.upvote(function (err) {
      if(err) { return handleError(res, err); }
      return res.send(200, thing);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
