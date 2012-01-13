var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Event = new Schema({
    'name':String,
    'info':String,
    'summary':String,
    'attendees':[ObjectId]
});

module.exports = Event;




