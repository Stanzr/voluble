var models = require( './models.js' );
exports.configure = function (io) {
    io.sockets.on( 'connection', function (socket) {
        socket.on( 'reqForChatJoin', function (chatId) {
            //TODO:handle auth
            socket.set('chatId',chatId);
            socket.emit('resForChatJoin',true);
            socket.join(chatId);
        } );
        socket.on('chatMsg',function(msg){
           socket.get( 'chatId',function(chat){
               socket.broadcast.to( chat ).emit( 'chatMsg', msg )
           });
        });
    } );
};
