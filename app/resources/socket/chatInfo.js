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

  /**
 * chat participants
*/
  socket.on('chatParticipants:read',function(data,callback){
    socket.get('chatId',function(err,chat){
      if(chat){
        if(global.sockets.manager.rooms['/' + chat]){
          var clients = global.sockets.clients(chat);
          var clients_info = _.map(clients,function(client){
            return {
              'name':client.handshake.user.user.name,
              'profile_pic_url':client.handshake.user.user.profile_pic_url,
              'id':client.id
            };
          });
          callback(null,clients_info); 
        }
      }else{
        console.log('cant count peoples in chat '+chat);
      }
      var usr = socket.handshake.user.user;
      usr.id = socket.id;
    socket.broadcast.to(chat).emit('chatParticipants:create', usr);
    });
  });




};

