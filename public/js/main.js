(function(win){
  $(document).ready(function(){

    var socket;
    Backbone.socket = socket = win.socket = win.io.connect('http://109.254.16.25');
    var Templater = function(){
      var self = this;
      this.cache = {};
      this.listeners = {};
      this.ready = function(template){
        if (self.listeners[template]){
          _.each(self.listeners[template], function(listener, idx){
            listener(self.cache[template]);
            self.listeners[template].splice(idx, 1);
          });
        }
      };
      this.getTemplate = function(template, callback){
        $.get('/templates/' + template, function(data){
          callback(data);
        });

      };
      this.render = function(template, callback){
        if (self.cache[template] && self.cache[template] !== true){
          callback(self.cache[template]);
        } else if (self.cache[template] === true){
          if (self.listeners[template]){
            self.listeners[template].push(callback);
          } else{
            self.listeners[template] = [callback];
          }
        } else{
          self.cache[template] = true;
          self.getTemplate(template, function(templ){
            self.cache[template] = _.template(templ);
            callback(self.cache[template]);
            self.ready(template);
          });
        }

      };
    };
    var templates = new Templater();
    var Voluble = win.Voluble || {};

    Voluble.Chat = Backbone.Model.extend({
      'urlRoot' :'chat',
      'noIoBind': false,
      'socket': Backbone.socket,
      'defaults' :{
        'name' :"",
        'user' :""
      },
      'initialize':function(){
        _.bindAll(this,'serverChange','serverDelete','modelCleanup');
        this.ioBind('update',Backbone.socket,this.serverChange,this);
        this.ioBind('delete',Backbone.socket,this.serverDelete,this);
      },
      'serverChange':function(data){
        data.fromServer = true;
        this.set(data);
      },
      'serverDelete':function(data){
        if(this.collection){
          this.collection.remove(this);
        }else{
          this.trigger('remove',this);
        }
        this.modelCleanup();
      },
      'modelCleanup':function(){
        this.ioUnbindAll();
        return this;
      }
    });


    /*Voluble.ChatMessage = Backbone.Model.extend({*/
    /*'urlRoot' :'/chat/',*/
    /*'defaults' :{*/
    /*'msg' :"",*/
    /*'user' :""*/
    /*},*/
    /*'initialize':function(){*/
    /*_.bindAll(this,'serverChange','serverDelete','modelCleanup');*/
    /*this.ioBind('update',Backbone.socket,this.serverChange,this);*/
    /*this.ioBind('delete',Backbone.socket,this.serverDelete,this);*/
    /*}*/
    /*});*/




    /*Voluble.ChatMessageCollection = Backbone.Collection.extend({*/
    /*'model': Voluble.ChatMessage,*/
    /*'url':'/chat/',*/
    /*'initialize':function(){*/
    /*_.bindAll(this,'serverCreate','collectionCleanup');*/
    /*this.ioBind('create',Backbone.socket,this.serverCreate,this);*/
    /*}*/
    /*});*/

    Voluble.ChatCollection = Backbone.Collection.extend({
      'model' :Voluble.Chat,
      'url' :"chats",
      'socket':Backbone.socket,
      'noIoBind':false,
      initialize: function () {
        _.bindAll(this, 'serverCreate', 'collectionCleanup');
        this.ioBind('create', Backbone.socket, this.serverCreate, this);
      },
      serverCreate: function (data) {
        var exists = this.get(data.id);
        if (!exists) {
          this.add(data);
        } else {
          data.fromServer = true;
          exists.set(data);
        }
      },
      collectionCleanup: function (callback) {
        this.ioUnbindAll();
        this.each(function (model) {
          model.modelCleanup();
        });
        return this;
      }

    });

    Voluble.ChatListView = Backbone.View.extend({
      'id':'chatList',
      'el' :$('.center_mid'),
      'initialize' :function(chats){
        this.chats = chats.model;
        this.chats.bind('reset', this.render);
        this.chats.bind('add', this.addChat);
        this.render();
      },
      'render' :function(eventName){
        var list = this;
        templates.render('events', function(template){
          $('.center_mid').html(template({}));
          $('#newEventCreation').live('click', list.newEvent.bind(list));
        });
        return this;
      },
      'addChat': function(chat){
            $('ul.event_listings').append(
              new Voluble.ChatListItemView({model :chat}).render().el);
          
      
      },
      'newEvent' :function(){
        var model = new this.model.model();
        model.set({
          name :$('#newEventName').val(),
          'user' :'ololo'
        });
        if (model.isNew()){
          this.model.add(model);
          app.chatList.create(model);
          app.chatList.fetch();
        }

        return false;
      },
      'close' :function(){
        $(this.el).unbind();
        $(this.el).empty();
      }
    });

    /*Voluble.ChatMessageListView = Backbone.View.extend({*/
    /*'el' :$('.center_mid'),*/
    /*'initialize' :function(){*/
    /*console.log(arguments);*/
    /*this.model.bind("reset", this.render, this);*/
    /*},*/
    /*'render' :function(eventName){*/
    /*var list = this;*/
    /*templates.render('chat', function(template){*/
    /*$(list.el).html(template({}));*/

    /*_.each(list.model.models, function(chat){*/
    /*$('ul.event_listings').append(*/
    /*new Voluble.ChatListItemView({model :chat}).render().el);*/
    /*}, this);*/

    /*});*/
    /*return this;*/
    /*},*/
    /*'newEvent' :function(){*/
    /*var model = new this.model.model();*/
    /*model.set({*/
    /*name :$('#newEventName').val(),*/
    /*'user' :'ololo'*/
    /*});*/
    /*if (model.isNew()){*/
    /*this.model.add(model);*/
    /*app.chatList.create(model);*/
    /*app.chatList.fetch();*/

    /*}*/

    /*return false;*/
    /*},*/
    /*'close' :function(){*/
    /*$(this.el).unbind();*/
    /*$(this.el).empty();*/
    /*}*/
    /*});*/
    Voluble.ChatMessageItemView = Backbone.View.extend({
      'tagName' :"li",
      'initialize' :function(){

        this.model.bind("change", this.render, this);
        this.model.bind("destroy", this.close, this);
        this.model.bind("like", this.like, this);
      },
      'render' :function(eventName){
        var self = this;
        templates.render('pubChatMsg', function(template){
          $(self.el).html(template({'message' :self.model.toJSON()}));
        });
        return this;
      },
      'like':function(name){
        alert('like');
      },
      'close' :function(){
        $(this.el).unbind();
        $(this.el).remove();
      }
    });

    Voluble.ChatListItemView = Backbone.View.extend({
      'tagName' :"li",
      'initialize' :function(){
        this.model.bind("change", this.render, this);
        this.model.bind("destroy", this.close, this);
      },
      'render' :function(eventName){
        var self = this;
        templates.render('one_event', function(template){
          $(self.el).html(template({'event' :self.model.toJSON()}));
        });
        return this;
      },
      'close' :function(){
        $(this.el).unbind();
        $(this.el).remove();
      }
    });

    var AppRouter = Backbone.Router.extend({
      'routes' :{
        "" :"list",
        '/chat/:id' :'chat'
      },

      'list' :function(){
        this.chatList = new Voluble.ChatCollection();
        this.chatListView = new Voluble.ChatListView({model :this.chatList});
        this.chatList.fetch();
      },
      'chat' :function(id){

        /*this.chatList = new Voluble.ChatMessageCollection({'id':id});*/
        /*//this.chatList.url +=id;*/
        /*this.chatListView = new Voluble.ChatMessageListView({model :this.chatList});*/
        /*this.chatList.fetch();*/
      }
    });

    var app = new AppRouter();

    Backbone.history.start();

  });
})(this);
