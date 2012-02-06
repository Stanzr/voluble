exports.configure=function(mongoose){
  var Schema = mongoose.Schema;
  var ObjectId = Schema.ObjectId;

  var ChatMsgSender = new Schema({
    'name': String,
    'uid': ObjectId,
    'profile_pic_url':String
  });

  var ChatMsg = new Schema({
    'user' : {
      'name': String,
      'uid': ObjectId,
      'profile_pic_url':String
    },
    'created_at' : {'type': Date, 'default': Date.now},
    'chatId': {'type': String, required: true},
    'message' : {'type': String, required: true},
    'likes': [],
    'replies': [],
    'likeCount': {'type': Number, 'default': 0},
    'type': {'type': String, 'enum': ['system','user','attention']}
  } );
  ChatMsg.statics.findByChat= function(chatId,cb){
    this.find({'chatId':chatId}).desc('created_at').limit(10).run(function(err,results){
      cb(err,results.reverse());      
    });
  };


  ChatMsg.statics.like = function(msg,user,cb){
    this.findById(msg.id,function(err,result){
      result.likes.push(user);
      result.likeCount+=1;
      result.save(cb);
    });
  };

  ChatMsg.statics.findMostLiked = function(chat,cb){
    this.find({'chatId':chat,'likeCount':{'$gt':0}}).sort('likeCount',-1).limit(4).run(cb);
  };

  ChatMsg.statics.processMessage = function(msgData,user,cb){
    if(msgData.user._id == user.user._id){
      var msg = new this();
      msg.user.name = user.user.name;
      msg.user.uid = user.user._id;
      msg.user.profile_pic_url = user.user.profile_pic_url;
      msg.message = msgData.message;
      msg.chatId = msgData.chatId;
      msg.type = 'user';
      msg.save(cb);
    }else{
      cb(new Error('unauthorized'));
    }
  };
  return mongoose.model('chat_messages',ChatMsg);
};

