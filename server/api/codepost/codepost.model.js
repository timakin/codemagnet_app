'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CodepostSchema = new Schema({
  title: String,
  introduction: String,
  code: String,
  language: String,
  active: Boolean
});

module.exports = mongoose.model('Codepost', CodepostSchema);