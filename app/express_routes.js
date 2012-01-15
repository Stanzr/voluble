var _ = require('underscore')._;

var resourceOptions = {
    "option":true
};
var resources = {
    'user_chat':{
        'path':'/chat',
        'resource':require('./resources/chat/user_chat.js').configure(resourceOptions)
    }
};


var defaultData = {
    'title':'Welcome to the Voluble',
    'data':[]
};

var handlers = {
    'index':{
        'method':'get',
        'path':'/',
        'title':'hello',
        'handler':function(req,res){
            res.render('dashboard.jade',defaultData);
        }
    }
};




exports.configure = function(app){
    var iterator,route;
    /**
     * setting custom routes
     */
    for(iterator in handlers){
       route =  handlers[iterator];
       console.log('setting app '+route.method+' with path '+route.path);
        app[route.method](route.path,route.handler);
        console.log(app.routes);
    }
    /**
     * setting resources handling
     */
    for(iterator in resources){
        route = resources[iterator];
        app['resource'](route.path,route.resource);
    }
};