var assert = require('assert');
var ChatMsg = require('../app/models.js').chatMsg;
var async = require('async');


describe('chatMessage',function(){
  beforeEach(function(done){
    async.parallel([
                   function(cb){
      cb(null,null);
    },
    function(cb){
      (new ChatMsg({'user':{'name':'Tony'},'chatId':'test','message':'Tony says hi','type':'user'})).save(cb);
    },
    function(cb){
      (new ChatMsg({'user':{'name':'Jake'},'chatId':'test','message':'Jake says hi','type':'user'})).save(cb);

    },
    function(cb){
      (new ChatMsg({'user':{'name':'Unknown'},'chatId':'not exists','message':'Unknow says hi','type':'user'})).save(cb);

    }
    ],done);      

  });

  afterEach(function(done){
    ChatMsg.collection.remove({},done); 
  });

  it('in room test should be exist 2 messages from Tony and Jake in correct order',function(done){
    ChatMsg.findByChat('test',function(err,messages){
      assert.equal(messages.length,2);
      assert.equal(messages[0].user.name,'Tony');
      assert.equal(messages[1].user.name,'Jake');
      done();
    });
    describe("sorting",function(){
      beforeEach(function(done){

        async.parallel([
                       function(cb){
          cb(null,null);
        },
        function(cb){
          (new ChatMsg({'user':{'name':'Tony'},'chatId':'sorting','message':'message1','type':'user'})).save(cb);
        },
        function(cb){
          (new ChatMsg({'user':{'name':'Jake'},'chatId':'sorting','message':'message2','type':'user'})).save(cb);

        },

        function(cb){
          (new ChatMsg({'user':{'name':'Jake'},'chatId':'sorting','message':'message3','type':'user'})).save(cb);

        },

        function(cb){
          (new ChatMsg({'user':{'name':'Jake'},'chatId':'sorting','message':'message4','type':'user'})).save(cb);

        },

        function(cb){
          (new ChatMsg({'user':{'name':'Jake'},'chatId':'sorting','message':'message5','type':'user'})).save(cb);

        }],done);
      });
      it('should correct order when pulled from DB',function(done){
        ChatMsg.findByChat('sorting',function(err,messages){
          assert.equal(err,null);
          assert.equal(messages[0].message,'message1');
          assert.equal(messages[1].message,'message2');
          assert.equal(messages[2].message,'message3');
          assert.equal(messages[3].message,'message4');
          assert.equal(messages[4].message,'message5');
          done(); 
        });

      });

    });
  });
  describe('#like functionality',function(){
    var message;
    beforeEach(function(done){
      ChatMsg.findOne({'chatId':'test','message':'Tony says hi'},function(err,TonyMessage){
        message = TonyMessage;   
        done();
      });

    }); 

    it('should exists',function(done){
      assert.ok(message._id); 
      done();
    });

    it('can be liked',function(done){
      ChatMsg.like({'id':message._id},{'name':'UserWhoLike'},function(err,likedMsg){
        assert.equal(err,null);
        assert.equal(likedMsg.likes.length,1);
        assert.equal(likedMsg.likes[0].name,'UserWhoLike');
        assert.equal(likedMsg.likeCount,1);
        done();      
      });    
    });
    describe('#most liked',function(){

      beforeEach(function(done){
        ChatMsg.like({'id':message._id},{'name':'UserWhoLike'},function(err,likedMsg){
          done();      
        });    
      });

      it('get most liked messages',function(done){
        ChatMsg.findMostLiked('test',function(err,mostLiked){

          assert.equal(err,null);
          assert.equal(mostLiked.length,1);
          assert.equal(mostLiked[0].user.name,'Tony');
          assert.equal(mostLiked[0].likes[0].name,'UserWhoLike');
          assert.equal(mostLiked[0].likeCount,1);
          done();
        });    

      });
    });

  });
});
