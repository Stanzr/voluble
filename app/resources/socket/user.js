var user = require('../../models.js').user;
var _ = require('underscore')._;

exports.configure = function(socket,io){
  var global = io;
  socket.on('user:read',function(data,callback){
    console.log('asking for usr');
      console.log(socket.handshakeData);
      callback(null,false);

  });
};
