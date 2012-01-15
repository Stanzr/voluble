var express = require('express');
var CONFIG = require('config');
var auth = require('./authentication.js');
var Session = require('./session.js');
var session_store = new Session();

exports.configure=function(app){
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
    app.use(express.session({ store: session_store, secret:CONFIG.session.secret}));
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
};


