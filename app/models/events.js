var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;


var Event = new Schema( {
    'name' : {'type':String,'required':true},
    'info' : {'type' : String},//, 'required' : true
    'summary' : {'type' : String},//, 'required' : true
    'start_date':{'type':Date,'default':Date.now},
    'end_date':{'type':Date,'default':Date.now},
    'questions':[{}]
} );

Event.statics.findCurrentEvents = function(cb){
  var currentDate = new Date();
  this.find({'start_date':{'$lte':currentDate},'end_date':{'$gte':currentDate}}).sort('start_date',1).run(cb);
};
Event.statics.findPastEvents = function(cb){
  var currentDate = new Date(); 
  this.find({'end_date':{'$lte':currentDate}}).sort('end_date',1).limit(10).run(cb);
};
Event.statics.findEvent = function(name,cb){
    this.findOne({'name':name},cb);
};
Event.statics.getCurrentChatInfo = function(name,cb){
  var currentDate = new Date(); 
  this.findOne({'name':name,'start_date':{'$lte':currentDate},'end_date':{'$gte':currentDate}}).run(cb);
};

module.exports = Event;




