var async = require('async');
var options = {};

var api = {};
api.index = function(req, res){
    async.parallel([
        function(callback){
            options.model.event.findCurrentEvents(callback);
        },
        function(callback){
            options.model.event.findPastEvents(callback);
        }
    ], function(err, results){
        res.render('dashboard.html', {
            'title' :'Available chats',
            'data' :{
                'events' :results[0],
                'past_events' :results[1]
            }});
    });
};
api['new'] = function(req, res){
    res.end('new');
};
api.create = function(req, res){
    res.end('create');
};
api.show = function(req, res){
    async.parallel([
        function(callback){
            options.model.event.findEvent(req.params.id, callback);

        },
        function(callback){
            options.model.chatMsg.findByChat('/'+req.params.id, callback);
        }
    ], function(err, results){
        res.render('event.html', {
            'title' :"Welcome to " + req.params.id,
            'data' :{
                'messages' :results[1],
                'event' :results[0]
            }
        });
    });

};
api.edit = function(req, res){
    res.end('edit');
};
api.update = function(req, res){
    res.end('update');
};
api.destroy = function(req, res){
    res.end('destroy');
};

function setOptions (opts){
    options = opts;
    return api;

}
exports.configure = setOptions;