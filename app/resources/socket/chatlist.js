var chatList = require('../../models.js').chatList;
var _ = require('underscore')._;
exports.configure = function(socket,io){
  var global = io;
  socket.on('chatLists:read',function(data,callback){
      chatList.findCurrentEvents(function(err,results){
        callback(null,results);
      });
  });
  socket.on('pastChatLists:read',function(data,callback){
    chatList.findPastEvents(function(err,results){
        callback(null,results);
    });
  });
  socket.on('chatLists:create',function(data,callback){
    //TODO: replace this lines when template for creating project will arrive
    data.end_date = data.end_date || (new Date((new Date()).setDate((new Date()).getDate()+5)));
    data.questions = ['q1','q2','q3'];    
    (new chatList(data)).save(function(err,freshChat){
      if(err){
        console.log(err);
        return;
      }
      socket.emit('chatLists:create', freshChat);
      socket.broadcast.emit('chatLists:create', freshChat);
    });
  });
};
