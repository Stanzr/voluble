var chatList = require('../../models.js').chatList;
var _ = require('underscore')._;
exports.configure = function(socket,io){
  var global = io;
  socket.on('chats:read',function(data,callback){
      chatList.findCurrentEvents(function(err,results){
        callback(null,results);
      });
  });
  socket.on('pastChats:read',function(data,callback){
    chatList.findPastEvents(function(err,results){
        callback(null,results);
    });
  });
  socket.on('chats:create',function(data,callback){
    //TODO: replace this lines when template for creating project will arrive
    data.end_date = data.end_date || (new Date((new Date()).setDate((new Date()).getDate()+5)));
     
    (new chatList(data)).save(function(err,freshChat){
      if(err){
        console.log(err);
        return;
      }
      socket.emit('chats:create', freshChat);
      socket.broadcast.emit('chats:create', freshChat);
    });
  });
};
