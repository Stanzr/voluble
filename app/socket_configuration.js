var config = require('config');
var session_store = require('./models.js').session;
var connect = require('connect');
var parseCookie = connect.utils.parseCookie;


exports.configure = function(io){
    io.configure(function(){
        io.set('authorization', function(handshakeData, callback){
            var cookie = parseCookie(handshakeData.headers.cookie);
            session_store.get(cookie['connect.sid'],function(err,user){
                handshakeData.user = user;
                callback(null, user&&user.hasOwnProperty('user'));
            });
        });
    });
    return io;
};


