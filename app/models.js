var config = require('config');
var mongoose = require('mongoose');
mongoose.connect(config.database.host, config.database.name);

module.exports = {
    'session':require('./session.js')
}