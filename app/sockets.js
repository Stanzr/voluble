var io = require('socket.io');


exports.io = io;
exports.configure = function(options){
    var opts = {};


};



io.configure(function () {
    io.set('authorization', function (handshakeData, callback) {

        callback(null,true);
        /*
         var unauthorized = false;
         if(!handshakeData||!handshakeData.headers||!handshakeData.headers.cookie){
         callback(null,unauthorized);
         return;
         }
         var cookie_string = handshakeData.headers.cookie;
         var parsed_cookies = parseCookie(cookie_string);
         if(!parsed_cookies['connect.sid']){
         callback(null,unauthorized);
         return;
         }
         var connect_sid = parsed_cookies['connect.sid'];
         if (connect_sid) {
         session_store.get(connect_sid, function (error, session) {
         handshakeData.session = session;
         callback(null,!error&&session&&session.auth&&session.auth.loggedIn===true);
         });
         }else{
         callback(null,unauthorized);
         }
         */
    });
});

io.sockets.on('connection', function (socket) {

});

