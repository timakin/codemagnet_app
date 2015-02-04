'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CommentSchema = new Schema({
  thingId: String,
  description: String,
  createdAt: Date
});

module.exports = mongoose.model('Comment', CommentSchema);
