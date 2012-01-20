var models = require( "../app/models.js" );
var Faker = require( 'Faker' );
var objIdGen = require( 'mongoose' ).Types.ObjectId;
var Seeder = require( './seeder.js' );

function FutureEvent (callback) {
    (new models.event( {
        'name' : Faker.Name.firstName(),
        'info' : Faker.Lorem.sentence( 8 ),
        'status' : 'planning',
        'start_date' : new Date( Date.now() + ((24*60*60) * 1000 ) ),
        'summary' : Faker.Lorem.sentence( 8 ),
        'attendees' : [new objIdGen()]
    } )).save( callback );
}

function CurrentEvent (callback) {
    (new models.event( {
        'name' : Faker.Name.firstName(),
        'info' : Faker.Lorem.sentence( 8 ),
        'status' : 'started',
        'start_date' :  Date.now() - Faker.Helpers.randomNumber( 100 ) ,
        'summary' : Faker.Lorem.sentence( 8 ),
        'attendees' : [new objIdGen()]
    } )).save( callback );
}

function PastEvent (callback) {
    (new models.event( {
        'name' : Faker.Name.firstName(),
        'info' : Faker.Lorem.sentence( 8 ),
        'status' : 'finished',
        'start_date' : new Date( Date.now() - Faker.Helpers.randomNumber( 10 * 1000 ) ),
        'summary' : Faker.Lorem.sentence( 8 ),
        'attendees' : [new objIdGen()]
    } )).save( callback );
}

var users = [];

function User(callback){
    (new models.user({
        'name' : Faker.Name.firstName(),
        'profile_pic_url' : '/images/user_001.png',
        'level' : Faker.Helpers.randomNumber(3),
        'email' : Faker.Internet.email(), //TODO: replace with mongoose-types email type(adds free validation)
        'profile_url' : Faker.Internet.domainName()
    })).save(function(err,usr){
        users.push(usr);
        callback();
    });
}
function ChatMsg(callback){
    var user = Faker.Helpers.randomize(users);
    (new models.chatMsg({
        'user' : {
            'slug':user.name,
            'name':user.name
        },
        'chatId' : 'Jovanny',
        'message' : Faker.Lorem.sentences(3),
        'type' : 'user'
    })).save(callback);
}

var seed = new Seeder();

exports.run = function (cb) {
    seed.create().next( 15, FutureEvent ).next(20,PastEvent).next(10, CurrentEvent).next(50,User).next(100,ChatMsg).run( cb );
};

