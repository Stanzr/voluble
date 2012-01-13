var express = require('express');
var CONFIG = require('config');
var res = require('express-resource');
var auth = require('./authentication.js');
var app = express.createServer();
var io = require('socket.io').listen(app);
var MemoryStore = require('./node_modules/express/node_modules/connect/lib/middleware/session/memory');
var session_store = new MemoryStore();
var jade = require('jade');
var evt = require('fs').readFileSync('./views/client_side/past_event.jade', 'utf8')
var showEvt = jade.compile(evt,{'filename':'./views/client_side/past_event.jade','pretty':true});

/**
 * app.use directives
 */
app.use(express.bodyParser());
app.use(function(req,res,next){
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


/**
 * dummy data
 */
    var iter = 0;
var upcomingEvents = [
    {
        'name':'Event name '+(++iter),
        'info':'Event info '+(++iter),
        'summary':'',
        'date':(new Date()).toString()

    }, {
        'name':'Event name '+(++iter),
        'info':'Event info '+(++iter),
        'summary':'',
        'date':(new Date()).toString()

    }, {
        'name':'Event name '+(++iter),
        'info':'Event info '+(++iter),
        'summary':'',
        'date':(new Date()).toString()

    }, {
        'name':'Event name '+(++iter),
        'info':'Event info '+(++iter),
        'summary':'',
        'date':(new Date()).toString()

    }, {
        'name':'Event name '+(++iter),
        'info':'Event info '+(++iter),
        'summary':'',
        'date':(new Date()).toString()

    }, {
        'name':'Event name '+(++iter),
        'info':'Event info '+(++iter),
        'summary':'',
        'date':(new Date()).toString()

    }, {
        'name':'Event name '+(++iter),
        'info':'Event info '+(++iter),
        'summary':'',
        'date':(new Date()).toString()

    }, {
        'name':'Event name '+(++iter),
        'info':'Event info '+(++iter),
        'summary':'',
        'date':(new Date()).toString()

    }, {
        'name':'Event name '+(++iter),
        'info':'Event info '+(++iter),
        'summary':'',
        'date':(new Date()).toString()

    }, {
        'name':'Event name '+(++iter),
        'info':'Event info '+(++iter),
        'summary':'',
        'date':(new Date()).toString()

    }
];

app.get('/', function (req, res) {
    res.render('dashboard.jade',{'title':"hi!",'data':{'events':upcomingEvents}});
});
app.get('/login',function(req,res){
    res.render('loggedin.jade');
});
app.get('/evt',function(req,res){
   res.send(showEvt({'past_event':{'name':'past evt 1','data':'1 Jan 2012','summary':'it was cool!'}}));
});
app.get('/test/:render',function(req,res){
    res.render(req.params.render,{'layout':false});
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

        callback(null,true);
        /*
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
        */
    });
});

io.sockets.on('connection', function (socket) {
   setInterval(function(){
       socket.emit('pastevt',showEvt({'past_event':{'name':'past evt 1','data':'1 Jan 2012','summary':'it was cool!'}}));
   },20000)
});


app.listen(CONFIG.App.port);
