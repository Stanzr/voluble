var express = require( 'express' );
var config = require( 'config' );
var auth = require( './authentication.js' );
var Session = require( './models.js' ).session;
var session_store = new Session();

exports.configure = function (app) {
    app.use( express.bodyParser() );
    app.use( function (req, res, next) {
        var ajax = 'x-requested-with';
        if (req.headers[ajax] && req.headers[ajax] === 'XMLHttpRequest') {
            res.setHeader( 'Content-type', 'application/json' );
            res.render = function (template, responseText) {
                res.send( JSON.stringify( responseText ) );
            }
        }

        next();
    } );

    app.use( express.cookieParser() );
    app.use( express.session( {"store" : session_store, "secret" : config.session.secret} ) );
    app.use( auth.middleware() );
    app.use(express.favicon());
    app.use( express.static( process.cwd() + '/public' ) );
    app.dynamicHelpers( {
        session : function (req) {
            return req.session;
        }
    } );

    /**
     * app.set directives
     */
    app.set( 'view engine', 'jade' );
    return app;
};


