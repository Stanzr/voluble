var ChatMsg = require('../../models.js').chatMsg;
var _ = require('underscore')._;
exports.configure = function(socket,io){
  var global = io;
  socket.on('chatMsgs:read',function(data,callback){
      callback(null,false);
  });
};
