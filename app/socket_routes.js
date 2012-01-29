var models = require('./models.js');
var _ = require('underscore')._;

var chatList = require('./resources/socket/chatlist.js');

var session_store = models.session;
var streams = require('./datastream.js');

var twitterStreams = {};
exports.configure = function(io){
  io.sockets.on('connection', function(socket){
    chatList.configure(socket);
    
    socket.on('reqForChatJoin', function(chatId){
      //TODO:handle auth

      socket.set('chatId', chatId,function(){
        if(!twitterStreams[chatId]){
          twitterStreams[chatId]=true;
          console.log('#'+chatId.replace('/',''));
          streams.twitter.trackTag('#'+chatId.replace('/',''),function(err,data){
            var msgs = _.map(data,function(twit){
              return {
                'sender':{
                  'name':twit.from_user,
                  'profile_pic_url':twit.profile_image_url
                },
                'created_at':twit.created_at,
                'msg':twit.text,
                'id':twit.id,
                'replies':{
                  'to':twit.to_user
                }
              };
            });
            socket.emit('chatMsg',msgs);
          });
        }
        var usr = {
          'profile_url' :socket.handshake.user.user.profile_url,
          'name' :socket.handshake.user.user.name,
          'profile_pic_url' :socket.handshake.user.user.profile_pic_url,
          'socket_id':socket.id
        };
        socket.emit('resForChatJoin', usr);
        socket.join(chatId);
        socket.broadcast.to(chatId).emit('newcomer', usr);
        models.chatMsg.findByChat(chatId,function(err,results){
          var messages = _.map(results,function(chatMsg){
            return {
              'sender':chatMsg.user,
              'replies':chatMsg.replies,
              'created_at':chatMsg.created_at,
              'msg':chatMsg.message,
              'id':chatMsg._id
            }; 
          });
          socket.emit('chatMsg',messages);
        });
      });

    });
    socket.on('chatMsg', function(msg){
      if(!socket.handshake||!socket.handshake.user|| socket.handshake.user.user.name==='Guest'){
        return false;
      }
      var chatMessage = {};
      chatMessage.msg = msg.msg || '';
      var replies = msg.repliesTo.split(';');
      if(replies.length>0){
        replies = _.map(_.compact(replies),function(reply){
          return reply.split(':');
        });
      }

      models.user.find({'_id':{'$in':_.map(replies,function(reply){
        return reply[1];
      })}},{'profile_url':1,'name':1},function(err,results){
        chatMessage.replies = [];
        _.map(results,function(replied){
          var replacer = new RegExp('@'+replied.name,'ig');
          chatMessage.replies.push({'to':replied.name});
          chatMessage.msg = chatMessage.msg.replace(replacer,'<a href="'+replied.profile_url+'">@'+replied.name+'</a>');
        });
        chatMessage.sender = {
          'profile_url' :socket.handshake.user.user.profile_url,
          'name' :socket.handshake.user.user.name,
          'profile_pic_url' :socket.handshake.user.user.profile_pic_url
        };
        socket.get('chatId', function(err, chat){
          if(socket.handshake.user.auth&&socket.handshake.user.auth.twitter&&msg.postToTwitter===true){
            var twitterKeys = socket.handshake.user.auth.twitter;
            streams.twitter.postMessage(twitterKeys.accessToken,twitterKeys.accessTokenSecret,chatMessage.msg+' #'+chat.replace('/',''),function(err,result){
              if(err){
                console.log(err);
                return false;
              }
              if(result){
                console.log(chatMessage.msg+ ' is posted!');
              }
            }); 
          }
          (new models.chatMsg({
            'user' :chatMessage.sender,
            'chatId' :chat,
            'message' :chatMessage.msg,
            'type' :'user',
            'replies': chatMessage.replies
          })).save(function(err, msg){
            chatMessage.id = msg._id;
            chatMessage.created_at = msg.created_at;
            io.sockets['in'](chat).emit('chatMsg', chatMessage);
          });

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
                  'name':liked.user.name,
                  'profile_pic_url':liked.user.profile_pic_url
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

      });
    });
  });
};
