var options = {};

function setOptions(opts) {
    options = opts;
    return api;

}
exports.configure = setOptions;
var api = {};
api.index = function (req, res) {
    res.end('hi from chat');
};
api.new = function (req, res) {
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
