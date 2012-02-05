(function (win) {
  var $ = win.$;
  var Backbone = win.Backbone, Voluble = win.Voluble = win.Voluble || {};
  Voluble.ChatInfoModel= Backbone.Model.extend({
    'urlRoot': 'chatInfo',
    'noIoBind': false,
    'socket': Backbone.socket,
    'defaults': {
      'chatId': "",
      'question':0
    },
    'initialize': function (id,questionId) {
      this.defaults.chatId = id;
      this.defaults.question = questionId;
      _.bindAll(this, 'serverChange', 'serverDelete', 'modelCleanup');
      this.ioBind('update', Backbone.socket, this.serverChange, this);
      this.ioBind('delete', Backbone.socket, this.serverDelete, this);
    },
    'serverChange': function (data) {
      data.fromServer = true;
      this.set(data);
    },
    'serverDelete': function (data) {
      if (this.collection) {
        this.collection.remove(this);
      } else {
        this.trigger('remove', this);
      }
      this.modelCleanup();
    },
    'modelCleanup': function () {
      this.ioUnbindAll();
      return this;
    }
  });
})(this);

