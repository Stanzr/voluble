var models = require('../../models.js');
var _ = require('underscore');
var options = {};

var api = {};
api.index = function(req, res){
    if (req.query && req.query.action === 'list' && req.query.term){
        models.user.findByNameRegexp(req.query.term, function(err, results){
            var resArr = _.map(results,function(result){
                return {
                    'label':result.name,
                    'value':result._id
                };
            });
            res.render('layout.html', resArr);
        });
    } else{
        res.end('hi from user' + JSON.stringify(req.query));

    }
};
api['new'] = function(req, res){
};
api.create = function(req, res){
};
api.show = function(req, res){

};
api.edit = function(req, res){

};
api.update = function(req, res){
};
api.destroy = function(req, res){
};

function setOptions (opts){
    options = opts;
    return api;

}
exports.configure = setOptions;
