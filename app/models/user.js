var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var User = new Schema({
    'auth':{
        'twitter':{

        },
        'facebook':{

        } 
    }
    
});

module.exports = User;



