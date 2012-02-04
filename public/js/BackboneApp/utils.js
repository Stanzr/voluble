(function(win){
  var root = win.Voluble = win.Voluble || {};

  win.Backbone.socket = win.socket = win.io.connect('http://109.254.16.25');
    win.socket.emit('whoAmI?',{});
    win.socket.on('youAre',function(me){
      root.currentUser = me;    
    });
    var Templater = function () {
    self = this;
    this.cache = {};
    this.listeners = {};
    this.ready = function (template) {
      if (self.listeners[template]) {
        _.each(self.listeners[template], function (listener, idx) {
          listener(self.cache[template]);
          self.listeners[template].splice(idx, 1);
        });
      }
    };
    this.preCache = function(template){
      self.getTemplate(template,function(data){
        self.cache[template] = _.template(data);
      });
    };
    this.getTemplate = function (template, callback) {
      $.get('/templates/' + template, function (data) {
        callback(data);
      });
    };
    this.render = function (template, callback) {
      if (self.cache[template] && self.cache[template] !== true) {
        callback(self.cache[template]);
      } else if (self.cache[template] === true) {
        if (self.listeners[template]) {
          self.listeners[template].push(callback);
        } else {
          self.listeners[template] = [callback];
        }
      } else {
        self.cache[template] = true;
        self.getTemplate(template, function (templ) {
          self.cache[template] = _.template(templ);
          callback(self.cache[template]);
          self.ready(template);
        });
      }
    };
  };
  root.Templater = new Templater();

})(this);
