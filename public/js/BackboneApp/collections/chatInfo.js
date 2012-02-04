
(function (win) {
  var $ = win.$;
  var Backbone = win.Backbone, Voluble = win.Voluble = win.Voluble || {};
  Voluble.ChatInfo = Backbone.Model.extend({
    'urlRoot': 'chatInfo',
    'noIoBind': false,
    'socket': Backbone.socket,
    'initialize': function () {
    },
    'modelCleanup': function () {
      this.ioUnbindAll();
      return this;
    }
  });
})(this);
