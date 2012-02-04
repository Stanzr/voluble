var config = require('config');
var session_store = require('./models.js').session;
var connect = require('connect');
var parseCookie = connect.utils.parseCookie;

exports.configure = function(io){
  io.configure(function(){
    io.set('authorization', function(handshakeData, callback){
      if(!handshakeData.headers.cookie){
        handshakeData.user = false;  
        return callback(null,true);
      }
      var cookie = parseCookie(handshakeData.headers.cookie);
      session_store.get(cookie['connect.sid'],function(err,user){
        handshakeData.user = user&&user.hasOwnProperty('user')? user : guest;
        callback(null, true);
      });
    });
  });
  return io;
};

