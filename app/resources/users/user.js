var options = {};

var api = {};
api.index = function (req, res) {
    res.end('hi from user'+JSON.stringify(req.params));
};
api['new'] = function (req, res) {
};
api.create = function (req, res) {
};
api.show = function (req, res) {

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