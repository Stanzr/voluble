var chatMsgModel = require('../models.js').chatMsg;
var ChatMsg = function(){
  this.model = chatMsgModel;
};
ChatMsg.prototype.processMessage = function(msg,chatId,callback){
  if(!this._isValid(msg)){
    callback(new Error('Cant process message'));
    return false;
  }
  (new this.model(msg)).save(callback); 
};
ChatMsg.prototype.create = function(msg){
  if(!this._isValid(msg)){
    return false;
  }
  return (new this.model(msg));
};

ChatMsg.prototype._isValid = function(msg){
  return msg&&msg.msg&&msg.sender;
};

module.exports = ChatMsg;
