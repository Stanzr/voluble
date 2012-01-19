var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var ChatMsg = new Schema( {
    'user' : {},
    'created_at' : {'type':Date,'default':Date.now},
    'chatId':String,
    'message' : String,
    'type' : {'type':String, 'enum':['system','user','attention']}
} );
ChatMsg.statics.findByChat= function(chatId,cb){
    this.find({'chatId':chatId},cb);
};

module.exports = ChatMsg;




