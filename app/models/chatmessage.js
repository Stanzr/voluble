var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Event = new Schema( {
    'user' : {},
    'created_at' : {'type':Date,'default':Date.now},
    'message' : String,
    'status' : {'type':String, 'enum':['system','user','attention']}
} );

module.exports = Event;




