var util = require( 'util' );
var config = require( 'config' );
var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var connect = require( 'connect' );
var ExpressSession = require( 'express' ).session;
var _ = require( 'underscore' );

var sessionStore = new Schema( {
    sessionId : String,
    lastAccess : Date
} );

var Session = function (options) {
    options = options || {};
    ExpressSession.Store.call( this, options );
    this.model = mongoose.model( 'Session', sessionStore );
};

util.inherits( Session, ExpressSession.Store );

Session.prototype.get = function (sid, fn) {
    var cb = typeof fn === 'function' ? fn : function () {
    };
    this.model.findOne( { sessionId : sid }, function (err, doc) {
        doc = doc || {};
        cb( err, _.extend( doc, { cookie : config.session.cookie } ) );
    } );
};

Session.prototype.set = function (sid, expressSession, fn) {
    var sessionDocument = new this.model( {
        sessionId : sid,
        lastAccess : expressSession.lastAccess
    } );
    sessionDocument.save( fn );
};

Session.prototype.destroy = function (sid, fn) {
    var cb = typeof fn === 'function' ? fn : function () {
    };
    this.model.findOne( {sessionId : sid}, function (err, doc) {
        if (err) {
            cb( err );
            return;
        }
        if (!doc) {
            cb( null, true );
        } else {
            doc.remove( cb );
        }
    } )
};

module.exports = Session;