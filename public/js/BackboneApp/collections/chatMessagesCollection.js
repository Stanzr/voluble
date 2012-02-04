(function (win) {
  var $ = win.$;
    var Backbone = win.Backbone, Voluble = win.Voluble = win.Voluble || {};
    Voluble.ChatMsg = Backbone.Model.extend({
      'urlRoot': 'msg',
      'noIoBind': false,
      'socket': Backbone.socket,
      'defaults': {
        'msg': "",
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
    
    Voluble.ChatCollection = Backbone.Collection.extend({
      'model': Voluble.ChatMsg,
      'url': "chatMsgs",
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

