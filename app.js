var express = require('express');
var CONFIG = require('config');
var res = require('express-resource');
var auth = require('./app/authentication.js');
var express_configuration = require('./app/express_configuration.js');
var app = express.createServer();
var io = require('socket.io');
var express_routes = require('./express_routes.js');
var socket_routes = require('./app/socket_routes.js');

/**
 * app settings
 */
 
app = express_configuration.configure(app);




/**
 * Routes
 */

app = express_routes.configure(app);
socket_routes.configure(io);

app.get('/a',function(req,res){
    res.render('dashboard',{'data':{'events':undefined,'past_events':undefined},'title':'hi'});
})

exports.express = app;
exports.io = io;
