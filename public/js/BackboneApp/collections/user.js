
(function (win) {
  var $ = win.$;
  var Backbone = win.Backbone, Voluble = win.Voluble = win.Voluble || {};
  Voluble.User = Backbone.Model.extend({
    'urlRoot': 'user',
    'noIoBind': false,
    'socket':Backbone.socket,
    'initialize': function () {
     console.log('init User');
      _.bindAll(this, 'serverChange', 'serverDelete', 'modelCleanup');
      this.ioBind('update', Backbone.socket, this.serverChange, this);
      this.ioBind('delete', Backbone.socket, this.serverDelete, this);
    },
    'serverChange': function (data) {
      data.fromServer = true;
      this.set(data);
    },
    'serverDelete': function (data) {
      this.trigger('remove', this);
      this.modelCleanup();
    },
    'modelCleanup': function () {
      this.ioUnbindAll();
      return this;
    }
  });

})(this);

