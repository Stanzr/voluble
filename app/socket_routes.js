var models = require('./models.js');
var _ = require('underscore')._;
var session_store = models.session;

exports.configure = function(io){
    io.sockets.on('connection', function(socket){
        socket.on('reqForChatJoin', function(chatId){
            //TODO:handle auth

            socket.set('chatId', chatId,function(){
                socket.emit('resForChatJoin', true);
                socket.join(chatId);

                var usr = {
                    'profile_url' :socket.handshake.user.user.profile_url,
                    'name' :socket.handshake.user.user.name,
                    'profile_pic_url' :socket.handshake.user.user.profile_pic_url,
                    'socket_id':socket.id
                };
                socket.broadcast.to(chatId).emit('newcomer', usr);
            });

        });
        socket.on('chatMsg', function(msg){
            if(!socket.handshake||!socket.handshake.user|| socket.handshake.user.user.name==='Guest'){
                return false;
            }
            var chatMessage = {};
            chatMessage.msg = msg || '';
            chatMessage.sender = {
                'profile_url' :socket.handshake.user.user.profile_url,
                'name' :socket.handshake.user.user.name,
                'profile_pic_url' :socket.handshake.user.user.profile_pic_url
            };
            socket.get('chatId', function(err,chat){
                (new models.chatMsg({
                    'user':chatMessage.sender,
                    'chatId':chat,
                    'message':chatMessage.msg,
                    'type':'user'
                    })).save(function(err,msg){
                    chatMessage.id = msg._id;
                    chatMessage.created_at = msg.created_at;
                    io.sockets['in'](chat).emit('chatMsg', chatMessage);
                });


            });
        });
        socket.on('disconnect',function(){
            socket.get('chatId',function(err,chatId){
               if(chatId){
                   io.sockets['in'](chatId).emit('userLeave', {'id':socket.id});
               }
           });
        });
        socket.on('likeMsg',function(msgId){
            socket.get('chatId',function(err,chatId){
                models.chatMsg.like(msgId,socket.handshake.user.user,function(err,results){
                    models.chatMsg.findMostLiked(chatId,function(err,result){
                        var mostLiked = _.map(result,function(liked){
                           return {
                               'message':liked.message,
                               'user':{
                                   'name':liked.user.name
                               },
                               'likes':liked.likeCount
                           };
                        });
                        io.sockets['in'](chatId).emit('newMostLiked', mostLiked);
                    });
                });
            });
        });
        socket.on('getChatParticipants',function(){
            socket.get('chatId',function(err,chat){
               if(chat){
                   if(io.sockets.manager.rooms['/' + chat]){
                       var clients = io.sockets.clients(chat);
                       var clients_info = _.map(clients,function(client){
                           return {
                               'name':client.handshake.user.user.name,
                               'profile_pic_url':client.handshake.user.user.profile_pic_url,
                               'socket_id':client.id
                           };
                       });
                       console.log(clients_info);
                       socket.emit('peoplesInRoom', clients_info);
                   }
                   console.log(io.sockets.manager.rooms['/'+chat].length);
               }else{
                   console.log('cant count peoples in chat '+chat);
               }

           })
        });
    });
};
