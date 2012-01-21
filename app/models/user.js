var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var User = new Schema( {
    'name':String,
    'profile_pic_url':String,
    'level' : {'type' : Number, 'min' : 0, 'max' : 3},
    'email':String, //TODO: replace with mongoose-types email type(adds free validation)
    'profile_url':String,
    'auth':{
        'twitter':{
            'token':String,
            'userId':Number,
            'metadata':{}
        },
        'facebook':{
            'accessToken':String,
            'userId':Number,
            'metadata':{}
        },
        'password':{
            'login':String,
            'psw':String
        }
    }
} );

User.statics.findByAuthProvider = function(type,token,cb){
    switch(type){
        case 'twitter':this.findOne({'auth.twitter.token':token}).run(cb);
            break;
        case 'facebook':this.findOne({'auth.facebook.accessToken':token}).run(cb);
            break;
        case 'password':this.findOne({'auth.password.login':token.login,'auth.password.psw':token.psw}).run(cb);
            break;
        default:cb(new Error('unknown auth type'));
            break;
    }
};

module.exports = User;



