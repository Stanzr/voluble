(function (win) {
  var $ = win.$;
  $(win.document).ready(function () {
    var Backbone = win.Backbone, Voluble = win.Voluble;
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
      },
      'chat': function (id) {
          this.chatMsgs = new Voluble.ChatMsgCollection(id);
          this.chatInfo = new Voluble.chatInfo(id);
          this.chatLayout = new Voluble.ChatView({
            model: this.chatMsgs,
            'chatId':id,
            'chatInfo':this.chatInfo
          });
          this.chatMsgs.fetch();
      }
    });
    app = new AppRouter();
    Backbone.history.start();
  });
})(this);
