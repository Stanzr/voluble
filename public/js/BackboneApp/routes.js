(function(win,undefined){
	var global = win.Voluble || {};
	var Backbone = global.Backbone, AppRouter, app;
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
			setTimeout(function(){
				console.log(self.chatList);

				},300);
			},
			'chat': function (id) {

			}
		});
		app = new AppRouter();
		Backbone.history.start();


})(this);