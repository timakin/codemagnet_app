/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Codepost = require('./codepost.model');

exports.register = function(socket) {
  Codepost.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Codepost.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('codepost:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('codepost:remove', doc);
}