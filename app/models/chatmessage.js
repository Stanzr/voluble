var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var ChatMsg = new Schema( {
    'user' : {},
    'created_at' : {'type':Date,'default':Date.now},
    'chatId':String,
    'message' : String,
    'likes':[],
    'replies':[],
    'likeCount':{'type':Number,'default':0},
    'type' : {'type':String, 'enum':['system','user','attention']}
} );
ChatMsg.statics.findByChat= function(chatId,cb){
    this.find({'chatId':chatId}).sort('created_at',1).limit(10).run(cb);
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

module.exports = ChatMsg;

