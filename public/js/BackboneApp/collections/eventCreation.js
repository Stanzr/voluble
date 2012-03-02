(function (win) {
  var $ = win.$;
  var Backbone = win.Backbone, Voluble = win.Voluble = win.Voluble || {};
  Voluble.ChatInfoModel= Backbone.Model.extend({
    'urlRoot': 'eventCreate',
    'noIoBind': false,
    'socket': Backbone.socket,
    'defaults': {
      'chatId': "",
      'description':0,
      'startDate': new Date(),
      'startHours': '00:00',
      'chatHashTag': "",
      'chatTopic': []
    },
    'initialize': function (id) {
      this.chatId = id;
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

