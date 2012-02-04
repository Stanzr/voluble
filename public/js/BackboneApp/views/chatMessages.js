(function (win) {
  var Voluble = win.Voluble = win.Voluble || {};
  var Backbone = win.Backbone, templates = Voluble.Templater;
  /*templates.preCache('one_event');  */

  Voluble.ChatView = Backbone.View.extend({
    'id': 'chat',
    'el': $('.center_mid'),
    'initialize': function (chats) {
      this.chatId = chats.chatId;
      this.model = chats.model;
      this.model.bind('reset', this.render, this);
      this.model.bind('add', this.addMsg, this);
      this.render();
    },
    'render': function (eventName) {
      var list = this;
      templates.render('chat', function (template) {
        var obj = {
          'user':Voluble.currentUser,
          'chatInfo':{
            'chatName':list.chatId
          }
        };
        $('.center_mid').html(template(obj));
      });
      return this;
    },
    'addMsg':function(msg){
      console.log('adding msg');
    },
    'close': function () {
      $(this.el).unbind();
      $(this.el).empty();
    }
  });



  Voluble.ChatMsg = Backbone.View.extend({
    'tagName': "li",
    'initialize': function () {
      this.model.bind("change", this.render, this);
      this.model.bind("destroy", this.close, this);
    },
    'render': function (eventName) {
      var self = this;
      return this;
    },
    'close': function () {
      $(this.el).unbind();
      $(this.el).remove();
    }
  });
})(this);

