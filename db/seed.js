var models = require( "../app/models.js" );
var Faker = require( 'Faker' );
var objIdGen = require( 'mongoose' ).Types.ObjectId;
var Seeder = require( './seeder.js' );

function FutureEvent (callback) {
    (new models.event( {
        'name' : Faker.Name.firstName(),
        'info' : Faker.Lorem.sentence( 8 ),
        'status' : 'planning',
        'start_date' : new Date( Date.now() + Faker.Helpers.randomNumber( 10 * 1000 ) ),
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

var seed = new Seeder();

exports.run = function (cb) {
    seed.create().next( 15, FutureEvent ).next(20,PastEvent).next(10, CurrentEvent).run( cb );
};

