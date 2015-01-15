'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
  name: String,
  url: String,
  info: String,
  active: Boolean,
  upvotes: {type: Number, default: 0},
  created_at: Date
});

ThingSchema.methods.upvote = function(ts) {
  this.upvotes += 1;
  this.save(ts);
}

module.exports = mongoose.model('Thing', ThingSchema);