'use strict';

var _ = require('lodash');
var Codepost = require('./codepost.model');

// Get list of codeposts
exports.index = function(req, res) {
  Codepost.find(function (err, codeposts) {
    if(err) { return handleError(res, err); }
    return res.json(200, codeposts);
  });
};

exports.new = function(req, res) {
  Codepost.find(function (err, codeposts) {
    if(err) { return handleError(res, err); }
    return res.json(200, codeposts);
  });
};

// Get a single codepost
exports.show = function(req, res) {
  Codepost.findById(req.params.id, function (err, codepost) {
    if(err) { return handleError(res, err); }
    if(!codepost) { return res.send(404); }
    return res.json(codepost);
  });
};

// Creates a new codepost in the DB.
exports.create = function(req, res) {
  Codepost.create(req.body, function(err, codepost) {
    if(err) { return handleError(res, err); }
    return res.json(201, codepost);
  });
};

// Updates an existing codepost in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Codepost.findById(req.params.id, function (err, codepost) {
    if (err) { return handleError(res, err); }
    if(!codepost) { return res.send(404); }
    var updated = _.merge(codepost, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, codepost);
    });
  });
};

// Deletes a codepost from the DB.
exports.destroy = function(req, res) {
  Codepost.findById(req.params.id, function (err, codepost) {
    if(err) { return handleError(res, err); }
    if(!codepost) { return res.send(404); }
    codepost.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}