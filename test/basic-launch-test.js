var config = require( 'config' );

describe( "Application", function () {

    describe( "http", function () {
        it( "should be listening by http", function (done) {
            var app = require( '../app' ).express;
            app.listen( config.server.port, function () {
                app.close();
                done();
            } );
        } );
    } );
    describe( "socket.io", function () {
        it( "should listen to socket connection", function (done) {
            var app = require( '../app' ).io;
            app.listen( config.server.port, function () {
                done();
            } );
        } )
    } )

} );