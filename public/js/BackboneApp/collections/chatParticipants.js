(function (win) {
  var $ = win.$;
  var Backbone = win.Backbone, Voluble = win.Voluble = win.Voluble || {};
  Voluble.ChatParticipants= Backbone.Model.extend({
    'urlRoot': 'chatParticipants',
    'noIoBind': false,
    'socket': Backbone.socket,
    'defaults': {
      'chatId': "",
      'participants': []
    },
    'initialize': function (id,questionId) {
      this.defaults.chatId = id;
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
