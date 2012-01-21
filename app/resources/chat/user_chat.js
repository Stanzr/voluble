var async = require('async');
var options = {};


var api = {};
api.index = function (req, res) {
    async.parallel([
        function(callback){
            options.model.event.findCurrentEvents(callback);
        },
        function(callback){
            options.model.event.findPastEvents(callback);
        }
    ],function(err,results){
        res.render( 'dashboard', {
            'title' : 'Available chats',
            'data' : {
                'events' : results[0],
                'past_events' : results[1]
            }} );
    });
};
api['new'] = function (req, res) {
    res.end('new');
};
api.create = function (req, res) {
    res.end('create');
};
api.show = function (req, res) {
    options.model.chatMsg.findByChat(req.params.chat,function(err,results){
        console.log(arguments);
        res.render( 'CUloggedin', {
            'title' : "Welcome to " + req.params.chat,
            'data' : {
                'messages':results
            }
        } );
    });

};
api.edit = function (req, res) {
    res.end('edit');
};
api.update = function (req, res) {
    res.end('update');
};
api.destroy = function (req, res) {
    res.end('destroy');
};

function setOptions (opts) {
    options = opts;
    return api;

}
exports.configure = setOptions;