var _ = require('underscore')._;
var models = require('./app/models.js');
var resourceOptions = {
    "model":models
};
var resources = {
    'user_chat':{
        'path':'chat',
        'resource':require('./app/resources/chat/user_chat.js').configure(resourceOptions)
    },
    'users':{
        'path':'user',
        'resource':require('./app/resources/users/user.js').configure(resourceOptions),
        'using':'user_chat'
    }
};
var readyResources = {};

var defaultData = {
    'title':'Welcome to the Voluble',
    'data':{
        'events':undefined,
        'past_events':undefined
    }
    
    
};

var handlers = {
    'index':{
        'method':'get',
        'path':'/',
        'title':'hello',
        'handler':function(req,res){
            res.render('dashboard',defaultData);
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
        app[route.method](route.path,route.handler);
    }
    /**
     * setting resources handling
     */
    for(iterator in resources){
        route = resources[iterator];
        readyResources[iterator]=app.resource(route.path,route.resource);
        if(route.using&& readyResources[route.using]){
            readyResources[route.using].add(readyResources[iterator]);
        }
    }
    return app;
};