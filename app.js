var express = require('express');
var CONFIG = require('config');
var res = require('express-resource');
var auth = require('./app/authentication.js');
var express_configuration = require('./app/express_configuration.js');
var app = express.createServer();
var io = require('socket.io');
var jade = require('jade');
var express_routes = require('./app/express_routes.js');
var socket_routes = require('./app/socket_routes.js');

/**
 * app settings
 */
express_configuration.configure(app);




/**
 * Routes
 */

express_routes.configure(app);
socket_routes.configure(io);


exports.express = app;
exports.io = io;
