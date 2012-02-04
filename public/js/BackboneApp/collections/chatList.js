
(function (win) {
  var $ = win.$;
    var Backbone = win.Backbone, Voluble = win.Voluble = win.Voluble || {};
    Voluble.Chat = Backbone.Model.extend({
      'urlRoot': 'chat',
      'noIoBind': false,
      'socket': Backbone.socket,
      'defaults': {
        'name': "",
        'user': ""
      },
      'initialize': function () {
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
    Voluble.PastChat = Backbone.Model.extend({
      'urlRoot': 'pastChat',
      'noIoBind': false,
      'socket': Backbone.socket,
      'defaults': {
        'name': "",
        'user': ""
      },
      'initialize': function () {
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
    Voluble.PastChatCollection = Backbone.Collection.extend({
      'model': Voluble.PastChat,
      'url': "pastChats",
      'socket': Backbone.socket,
      'noIoBind': false,
      initialize: function () {
        _.bindAll(this, 'collectionCleanup');
      },
      collectionCleanup: function (callback) {
        this.ioUnbindAll();
        this.each(function (model) {
          model.modelCleanup();
        });
        return this;
      }
    });
    Voluble.ChatCollection = Backbone.Collection.extend({
      'model': Voluble.Chat,
      'url': "chats",
      'socket': Backbone.socket,
      'noIoBind': false,
      'initialize': function () {
        _.bindAll(this, 'serverCreate', 'collectionCleanup');
        this.ioBind('create', Backbone.socket, this.serverCreate, this);
      },
      'serverCreate': function (data) {
        var exists = this.get(data.id);
        if (!exists) {
          this.add(data);
        } else {
          data.fromServer = true;
          exists.set(data);
        }
      },
      'collectionCleanup': function (callback) {
        this.ioUnbindAll();
        this.each(function (model) {
          model.modelCleanup();
        });
        return this;
      }
    });

})(this);
