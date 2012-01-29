var chatList = require('../../models.js').chatList;
var _ = require('underscore')._;
exports.configure = function(socket){
  socket.on('chats:read',function(callback){
    console.log('asking for chats');
      chatList.findCurrentEvents(function(err,results){
        _.each(results,function(chat){
          socket.emit('chats:read',chat);
        });
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
      socket.emit('chats:create',freshChat);
    });    
  });
};
