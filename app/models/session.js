var util = require('util');
var config = require('config');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var connect = require('connect');
var ExpressSession = require('express').session;
var _ = require('underscore');

var sessionStore = new Schema({
    'sid':String,
    'image_url':String,
    'name':String
});

var Session = function(options) {
    options = options || {};
    ExpressSession.Store.call(this, options);
    this.model = mongoose.model('User', sessionStore);
};

util.inherits(Session, ExpressSession.Store);

Session.prototype.get = function(sid, fn) {
    fn = typeof fn === 'function' ? fn : function() {};
    this.model.findOne({ sessionId: sid }, function(err, doc) {
        fn(err, _.extend(doc, { cookie: config.session.cookie }));
    });
};

Session.prototype.set = function(sid, expressSession, fn) {
    var sessionDocument = new this.model({
        sessionId: sid,
        lastAccess: expressSession.lastAccess
    });
    sessionDocument.save(fn);
};

Session.prototype.destroy = function(sid, fn) {
    var noticeText = "Session#destroy coudn't be called directly";
    console.error("\n" + noticeText);
    fn(new Error(noticeText));
};

module.exports = Session;