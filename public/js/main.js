(function (win) {
  var $ = win.$;
  $(win.document).ready(function () {
    var Backbone = win.Backbone, Voluble = win.Voluble;
    console.dir(Voluble);
    AppRouter = Backbone.Router.extend({
      'routes': {
        "": "list",
        '/chat/:id': 'chat'
      },
      'list': function () {
        this.chatList = new Voluble.ChatCollection();
        this.chatListPast = new Voluble.PastChatCollection();
        this.chatListView = new Voluble.ChatListView({
          model: {
            'upcoming': this.chatList,
            'past': this.chatListPast
          }
        });
        this.chatListPast.fetch();
        this.chatList.fetch();
        var self = this;
      },
      'chat': function (id) {
      }
    });
    app = new AppRouter();
    Backbone.history.start();
  });
})(this);
