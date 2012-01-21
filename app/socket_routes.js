var models = require('./models.js');
var session_store = models.session;

exports.configure = function(io){
    io.sockets.on('connection', function(socket){
        socket.on('reqForChatJoin', function(chatId){
            //TODO:handle auth

            socket.set('chatId', chatId);
            socket.emit('resForChatJoin', true);
            socket.join(chatId);
        });
        socket.on('chatMsg', function(msg){
            var chatMessage = {};
            chatMessage.msg = msg || '';
            chatMessage.sender = {
                'profile_url' :socket.handshake.user.user.profile_url,
                'name' :socket.handshake.user.user.name,
                'profile_pic_url' :socket.handshake.user.user.profile_pic_url
            };
            socket.get('chatId', function(chat){
                socket.broadcast.to(chat).emit('chatMsg', chatMessage)
            });
        });
    });
};
