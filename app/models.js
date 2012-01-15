var config = require( 'config' );
var mongoose = require( 'mongoose' );
mongoose.connect( config.database.host, config.database.name );

module.exports = {
    'session' : require( './session.js' ),
    'user' : mongoose.model( 'users', require( './models/user.js' ) ),
    'event' : mongoose.model( 'events', require( './models/events.js' ) ),
    'chatMsg' : mongoose.model( 'chat_messages', require( './models/chatmessage.js' ) )
};