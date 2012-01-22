var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;


var Event = new Schema( {
    'name' : {'type':String,'required':true},
    'info' : {'type' : String, 'required' : true},
    'summary' : {'type' : String, 'required' : true},
    'status':{'type':String,'enum':['planned','started','finished']},
    'start_date':{'type':Date,'default':Date.now},
    'attendees' : [ObjectId],
    'questions':[{}]
} );

Event.statics.findCurrentEvents = function(cb){
    this.find({'start_date' : {'$gte' : new Date()}}).limit(10).run(cb);
};
Event.statics.findPastEvents = function(cb){
   this.find({'start_date':{'$lt':new Date()}}).limit(10).run(cb);
};
Event.statics.findEvent = function(name,cb){
    this.findOne({'name':name},cb);
};

module.exports = Event;




