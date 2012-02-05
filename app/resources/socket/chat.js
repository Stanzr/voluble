var ChatMsg = require('../../models.js').chatMsg;
var _ = require('underscore')._;
exports.configure = function(socket,io){
  var global = io;
  socket.on('chatMsgs:read',function(data,callback){
    socket.get('chatId',function(err,chatId){
      ChatMsg.findByChat(chatId, function(err,data){
        callback(null,data);
      });
    });
  });
  socket.on('chatMsgs:create',function(data,callback){
    if(!socket.handshake||!socket.handshake.user|| socket.handshake.user.user.name==='Guest'){
      return false;
    }
    socket.get('chatId',function(err,chatId){
      ChatMsg.processMessage(chatId,data,socket.handshake.user,function(err,msg){
        socket.broadcast.to(chatId).emit('chatMsgs:create',msg);
        callback(null,msg);
      });
    });
  });
};

