var async = require('async');
var options = {};

var api = {};
api.index = function(req, res){
    options.model.event.find({},function(err,results){
        res.render('dashboard.html', results);
    });
  /*
    async.parallel([
        function(callback){
            options.model.event.findCurrentEvents(callback);
        },
        function(callback){
            options.model.event.findPastEvents(callback);
        }
    ], function(err, results){
      res.render('dashboard.html', results[1]);
    });
    */
};
api['new'] = function(req, res){
    res.end('new');
};
api.create = function(req, res){
    var params = req.body||{};
    if(params.user&&params.name){
        var evt = {
            'user':params.user,
            'name':params.name
        };
        (new options.model.event(evt)).save(function(){
            res.send('OK');
        });
    }else{
        res.end('',403);
    }
};
api.show = function(req, res){
    async.parallel([
        function(callback){
            options.model.event.findEvent(req.params.id, callback);

        },
        function(callback){
            options.model.chatMsg.findByChat('/'+req.params.id, callback);
        },
        function(callback){
            options.model.chatMsg.findMostLiked('/' + req.params.id,callback);
        }
    ], function(err, results){
        res.render('event.html', {
            'title' :"Welcome to " + req.params.id,
            'chatName' :req.params.id,
            'data' :{
                'messages' :results[1],
                'event' :results[0],
                'most_liked':results[2]

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

