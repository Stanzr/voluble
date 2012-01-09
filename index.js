var express = require('express');
var CONFIG = require('config');
var res = require('express-resource');
var auth = require('./authentication.js');
var app = express.createServer();
var io = require('socket.io').listen(app);
var MemoryStore = require('./node_modules/express/node_modules/connect/lib/middleware/session/memory');
var session_store = new MemoryStore();

/**
 * app.use directives
 */
app.use(express.bodyParser());
app.use(function(req,res,next){
    console.log(req.url);
    var ajax = 'x-requested-with';
    if(req.headers[ajax]&&req.headers[ajax]==='XMLHttpRequest'){
        res.setHeader('Content-type','application/json');
        res.render = function(template,responseText){
            res.send(JSON.stringify(responseText));
        }
    }

    next();
});
app.use(express.cookieParser());
app.use(express.session({ store: session_store, secret:CONFIG.Session.secret}));
app.use(auth.middleware());
app.use(express.static(__dirname + '/public'));
app.dynamicHelpers({
    session:function (req, res) {
        return req.session;
    }
});

/**
 * app.set directives
 */
app.set('view engine', 'jade');


/**
 * app.resource directives
 */


/**
 * Routes
 */
app.get('/', function (req, res) {
    res.render('main.jade');
});

app.get('/privacy',function(req,res){
    res.render('')
});





var parseCookie = function (str) {
    var obj = {}
        , pairs = str.split(/[;,] */);
    for (var i = 0, len = pairs.length; i < len; ++i) {
        var pair = pairs[i]
            , eqlIndex = pair.indexOf('=')
            , key = pair.substr(0, eqlIndex).trim().toLowerCase()
            , val = pair.substr(++eqlIndex, pair.length).trim();

        // quoted values
        if ('"' == val[0]) val = val.slice(1, -1);

        // only assign once
        if (undefined == obj[key]) {
            val = val.replace(/\+/g, ' ');
            try {
                obj[key] = decodeURIComponent(val);
            } catch (err) {
                if (err instanceof URIError) {
                    obj[key] = val;
                } else {
                    throw err;
                }
            }
        }
    }
    return obj;
};





io.configure(function () {
    io.set('authorization', function (handshakeData, callback) {
        var unauthorized = false;
        if(!handshakeData||!handshakeData.headers||!handshakeData.headers.cookie){
            callback(null,unauthorized);
            return;
        }
        var cookie_string = handshakeData.headers.cookie;
        var parsed_cookies = parseCookie(cookie_string);
        if(!parsed_cookies['connect.sid']){
            callback(null,unauthorized);
            return;
        }
        var connect_sid = parsed_cookies['connect.sid'];
        if (connect_sid) {
            session_store.get(connect_sid, function (error, session) {
                handshakeData.session = session;
                callback(null,!error&&session&&session.auth&&session.auth.loggedIn===true);
            });
        }else{
            callback(null,unauthorized);
        }
    });
});

io.sockets.on('connection', function (socket) {
    //console.log(socket);
    socket.on('chatMessage', function (data) {
        data.sender = socket.handshake.uInfo.user_name;
        socket.broadcast.emit('chatMessage', data);
    });
    socket.on('availableChats',function(){
        console.log(socket.handshake);
    })
});


app.listen(CONFIG.App.port);
