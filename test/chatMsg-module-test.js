var assert = require('assert');
var chatMessage = require('../app/modules/chatMsg.js');
var chatMessageModel = require('../app/models.js').chatMsg;

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
  
  it('should create msg model',function(done){
    var msg = {'msg':'test1','sender':{'user':'test'}};
    var testMsg = chatMsg.create(msg);
    assert.ok(testMsg);
    assert.ok(testMsg._id);
    assert.ok(testMsg instanceof chatMessageModel);
    done();
  
  });

  it('should add message to db',function(done){
    var msg = {
      'msg':'test1',
      'sender':{
        'profile_url':'google.com',
        'name':'test user',
        'profile_pic_url':'default.jpg'
      }
    };
    chatMsg.processMessage(msg,chatId,function(err,message){
      assert.equal(err,null);
      chatMessageModel.findById(message._id,function(err,msg){
        assert.ok(msg);
        done();
      });

    });


  });
});
