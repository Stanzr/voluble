namespace( 'db', function () {
    var db = require( './db/seed.js' );
    desc( "seed db with values" );
    task( 'seed', function () {
        db.run(function(){
            console.log('done');
            process.exit(0);
        })
    } );
} );