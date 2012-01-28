var assert = require('assert');
var chatMessage = require('../app/modules/chatMsg.js');
var chatMessageModel = require('../app/models.js');

describe('chatMsg',function(){
  var chatMsg,chatId;
  beforeEach(function(done){
    chatMsg = new chatMessage();
    chatId = 'test';
    done();
  });
  it('should return error if message isnt correct',function(done){
    var msg = {'msg':'hi'};
    
    chatMsg.processMessage(msg,chatId,function(err){
      assert.equal(err instanceof Error,true);
      assert.equal(err.message,'Cant process message');
      done();
    });
  
  });


});
