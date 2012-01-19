var options = {};


var api = {};
api.index = function (req, res) {
    options.model.event.findCurrentEvents(function(err,evts){
        res.render('dashboard',{
            'title' : 'Available chats',
            'data' : {
                'events' : evts,
                'past_events' : undefined
            }});
    })
};
api['new'] = function (req, res) {
};
api.create = function (req, res) {
};
api.show = function (req, res) {
    res.render('CUloggedin',{
        'title':"Welcome to "+req.params.chat
    });
};
api.edit = function (req, res) {

};
api.update = function (req, res) {
};
api.destroy = function (req, res) {
};

function setOptions (opts) {
    options = opts;
    return api;

}
exports.configure = setOptions;