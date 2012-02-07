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
        var self = this;
        win.socket.emit('join',id,function(err,permission){
          if(!permission){
            return self.navigate('');
          }
          self.chatParticipants = new Voluble.ChatParticipants();
          /*self.chatParticipantsView = new Voluble.ChatParticipantsView(self.chatParticipants);*/
          self.chatMsgs = new Voluble.ChatMsgCollection({'chatId':id});
          self.chatInfo = new Voluble.ChatInfoModel({'chatId':id});
          self.chatLayout = new Voluble.ChatView({
            'msgModel': self.chatMsgs,
            'chatId':id,
            'chatInfo':self.chatInfo,
            'chatParticipants':self.chatParticipants
          });

          self.chatParticipants.fetch();
          self.chatInfo.fetch();
          self.chatMsgs.fetch();
        });
      }
    });
    app = new AppRouter();
    Backbone.history.start();
  });
})(this);
