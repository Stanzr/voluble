(function (win) {
  var $ = win.$;
  var Backbone = win.Backbone, Voluble = win.Voluble = win.Voluble || {};
  
  Voluble.ChatParticipantSingle= Backbone.Model.extend({
    'urlRoot': 'chatParticipant',
    'noIoBind': false,
    'socket': Backbone.socket,
    'defaults': {
      'name': "Guest",
      'profile_pic_url': '',
      'id':''
    },
    'initialize': function () {
      _.bindAll(this, 'serverChange', 'serverDelete', 'modelCleanup');
      this.ioBind('update', Backbone.socket, this.serverChange, this);
      this.ioBind('create', Backbone.socket, this.serverCreate, this);
      this.ioBind('delete', Backbone.socket, this.serverDelete, this);
    },
    'serverCreate':function(usr){
      this.set(usr);
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

  Voluble.ChatParticipants = Backbone.Collection.extend({
    'model': Voluble.ChatParticipantSingle,
    'url': "chatParticipants",
    'socket': Backbone.socket,
    'noIoBind': false,
    'initialize': function () {
      _.bindAll(this, 'serverCreate', 'collectionCleanup');
      this.ioBind('create', Backbone.socket, this.serverCreate, this);
      this.ioBind('delete', Backbone.socket, this.serverDelete, this);
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
    'serverDelete':function(person){
      var model = this.get(person.id);
      model.modelCleanup();
      this.ioUnbind(model);
      this.remove(model);
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
