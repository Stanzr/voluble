var chatList = require('../../models.js').chatList;
var _ = require('underscore')._;
exports.configure = function(socket,io){
  var global = io;
  socket.on('chatInfo:read',function(data,callback){
    if(data.chatId){
      chatList.getCurrentChatInfo(data.chatId,function(err,results){
        if(!err&&results){
          socket.join(data.chatId);
          socket.set('chatId',data.chatId);
        }
        callback(null,results);
      });
    }
  });
};

