var _ = require('underscore')._;
var models = require('./app/models.js');
var fs = require('fs');
var path = require('path');
var TEMPLATE_EXTENSION ='.html';
var TEMPLATE_FOLDER = './views/client_side/';
var jade = require('jade');
var resourceOptions = {
    "model":models
};
var resources = {
    'user_chat':{
        'path':'chat',
        'resource':require('./app/resources/chat/user_chat.js').configure(resourceOptions)
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
    'templateCache':{
        'method':'get',
        'path':'/templates/:templateId',
        'handler':function(req,res){
            var template = TEMPLATE_FOLDER+req.params.templateId+TEMPLATE_EXTENSION;
            path.exists(template,function(exist){
               if(!exist){
                   res.end('',404);
               }else{
                   fs.readFile(template,function(err,fileContent){
                       res.send(fileContent);
                   });
               }
            });
        }
    },
    'index':{
      'method':'get',
      'path':"/",
      'handler':function(req,res){
          res.render('layout.html',{});
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
