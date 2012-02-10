
(function (win) {
  var Voluble = win.Voluble = win.Voluble || {};
  var Backbone = win.Backbone, templates = Voluble.Templater;
  templates.preCache('one_event');  

  Voluble.ChatListView = Backbone.View.extend({
    'id': 'chatList',
    'el': $('.center_mid'),
    'initialize': function (chats) {
      this.past = chats.model.past;
      this.chats = chats.model.upcoming;
      this.chats.bind('reset', this.render, this);
      this.chats.bind('add', this.addChat, this);
      this.render();
    },
    'render': function (eventName) {
      var list = this;
      templates.render('events', function (template) {
        $('.center_mid').html(template({}));
        $('ul.event_listings').html('');
        list.chats.each(function (chat) {
          list.addChat(chat);
        });
        list.past.each(function(pastChat){
          list.addPastChat(pastChat);
        });
      });
      return this;
    },
    'addChat': function (chat) {
      $('.center_mid_left > ul.event_listings').append(new Voluble.ChatListItemView({
        model: chat
      }).render().el);
    },
    'addPastChat': function (chat) {
      $('.center_mid_right > ul.event_listings').append(new Voluble.ChatListItemView({
        model: chat
      }).render().el);
    },
    'close': function () {
      $(this.el).unbind();
      $(this.el).empty();
    }
  });
  Voluble.PastChatListItemView = Backbone.View.extend({
    'tagName': "li",
    'initialize': function () {
      this.model.bind("change", this.render, this);
      this.model.bind("destroy", this.close, this);
    },
    'render': function (eventName) {
      var self = this;
      templates.render('one_event1', function (template) {
        $(self.el).html(template({
          'event': self.model.toJSON()
        }));
      });
      return this;
    },
    'close': function () {
      $(this.el).unbind();
      $(this.el).remove();
    }
  });
  Voluble.ChatListItemView = Backbone.View.extend({
    'tagName': "li",
    'initialize': function () {
      this.model.bind("change", this.render, this);
      this.model.bind("destroy", this.close, this);
    },
    'render': function (eventName) {
      var self = this;
      var model = this.model.toJSON();
      model.start_date = model.start_date ? $.timeago(model.start_date):new Date();
      model.end_date = model.end_date? $.timeago(model.end_date):new Date();
      templates.render('one_event', function (template) {
        $(self.el).html(template({
          'event': model
        }));
      });
      return this;
    },
    'close': function () {
      $(this.el).unbind();
      $(this.el).remove();
    }
  });
})(this);
