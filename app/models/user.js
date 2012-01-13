var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var User = new Schema({
    'image_url':String,
    'name':String
});

module.exports = User;



