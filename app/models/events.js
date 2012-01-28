var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;


var Event = new Schema( {
    'name' : {'type':String,'required':true},
    'info' : {'type' : String, 'required' : true},
    'summary' : {'type' : String, 'required' : true},
    'start_date':{'type':Date,'default':Date.now},
    'end_date':{'type':Date,'default':Date.now},
    'attendees' : [ObjectId],
    'questions':[{}]
} );

Event.statics.findCurrentEvents = function(cb){
  var currentDate = new Date();
  this.find({'start_date':{'$lte':currentDate},'end_date':{'$gte':currentDate}}).run(cb);
};
Event.statics.findPastEvents = function(cb){
  var currentDate = new Date(); 
  this.find({'end_date':{'$lte':currentDate}}).limit(10).run(cb);
};
Event.statics.findEvent = function(name,cb){
    this.findOne({'name':name},cb);
};

module.exports = Event;




