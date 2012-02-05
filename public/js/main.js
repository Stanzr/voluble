(function (win) {
  var $ = win.$;
  $(win.document).ready(function () {
    var Backbone = win.Backbone, Voluble = win.Voluble;
    AppRouter = Backbone.Router.extend({
      'routes': {
        "": "list",
        '/chat/:id': 'chat',
        '/chat/:id/q:number': 'chat'
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
      'chat': function (id,question) {
        win.socket.emit('join',{'id':id,'question':question},function(err,permission){
          this.chatInfo = new Voluble.ChatInfoModel({'chatId':id,'question':question});
          this.chatMsgs = new Voluble.ChatMsgCollection({'chatId':id});
          this.chatLayout = new Voluble.ChatView({
            'msgModel': this.chatMsgs,
            'chatId':id,
            'chatInfo':this.chatInfo
          });
          this.chatInfo.fetch();
          this.chatMsgs.fetch();
        });
      }
    });
    app = new AppRouter();
    Backbone.history.start();
  });
})(this);
