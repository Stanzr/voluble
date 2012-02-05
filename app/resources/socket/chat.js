var ChatMsg = require('../../models.js').chatMsg;
var _ = require('underscore')._;
exports.configure = function(socket,io){
  var global = io;
  socket.on('chatMsgs:read',function(data,callback){
    ChatMsg.findByChat(data[0].chatId, function(err,data){
      callback(null,data);
    });
  });
  socket.on('chatMsgs:create',function(data,callback){
    if(!socket.handshake||!socket.handshake.user|| socket.handshake.user.user.name==='Guest'){
      return false;
    }
    ChatMsg.processMessage(data,socket.handshake.user,function(err,msg){
      callback(err,msg); 
    });
  });
};

