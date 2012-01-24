var config = require('config');
var _ = require('underscore');
var twitter = require('twitter');
var Twitter = function(){
  this.useStreamingApi = true;
  this.trackedTags = {};
  this.lastTrackedTagId = {};
  this.api = new twitter({
    'consumer_key':config.auth.twitter.consumerKey,
    'consumer_secret':config.auth.twitter.consumerSecret,
    'access_token_key':config.auth.twitter.accessTokenKey,
    'access_token_secret': config.auth.twitter.accessTokenSecret
  });
  this.frequency = 10000; // 3 secs
  this.pause = 1000;
  this.started = false;
  this.timer;
  this.initialize();
};
Twitter.prototype.getPause = function(){
  var additionalPause = 0;  
  if(!this.started){
      additionalPause+=this.pause
    return additionalPause;  
  }else{
    return this.pause;
  }
};
Twitter.prototype.initialize = function(){
   var self = this;
   _.each(Object.keys(this.trackedTags),function(hash){
      setTimeout(function(){
          self.getTwittsByHashTag(hash);
      },self.getPause());
   });
   this.started = true;
   this.timer = setTimeout(function(){
      self.initialize();
   },this.frequency);

};
Twitter.prototype.trackTag = function(tag,callback){
  if(!this.trackedTags[tag]){
    this.trackedTags[tag]=[callback];
  }else{
    this.trackedTags[tag].push(callback);
  }
};
Twitter.prototype.getTwittsByHashTag = function(hash){
  console.log('looking for '+hash);
  if(this.trackedTags[hash]){
    var self = this;
    var sinceId = this.lastTrackedTagId[hash]||'';
    this.api.search(hash,{'since_id':sinceId},function(data){
        console.log('found for '+hash+' '+data.results.length);
        self.lastTrackedTagId[hash]=data.max_id_str;
        _.each(self.trackedTags[hash],function(listener){
          listener(null,data.results);
        });
    });
  }
};
module.exports = new Twitter();

