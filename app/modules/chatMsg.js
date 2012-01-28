var ChatMsg = function(){

};
ChatMsg.prototype.processMessage = function(msg,chatId,callback){
 if(!this._isValid(msg)){
  callback(new Error('Cant process message'));
  return false;
 } 
};
ChatMsg.prototype._isValid = function(msg){
  return msg&&msg.msg&&msg.sender;
};

/*var msg = {*/
/*"msg":,*/
/*"replies":[],*/
/*"id":"4f24294caa046b0000000023",*/
/*"created_at":"2012-01-28T16:58:52.046Z",*/
/*"sender":{*/
/*"profile_url":"https://twitter.com/#!/rbolgov",*/
/*"name":"Bolgov Roman",*/
/*"profile_pic_url":"http://a3.twimg.com/profile_images/1284608872/ava_normal.jpg"*/
/*}*/
/*}; */
module.exports = ChatMsg;
