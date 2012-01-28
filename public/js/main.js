(function(win){
    var Templater = function(){
        var self = this;
        this.cache = {};
        this.listeners = {};
        this.ready = function(template){
          if(self.listeners[template]){
             _.each(self.listeners[template],function(listener,idx){
                   listener(self.cache[template]);
                   self.listeners[template].splice(idx,1);
             });
          }
        };
        this.getTemplate = function(template, callback){
            $.get('/templates/' + template, function(data){
                callback(data);
            });

        };
        this.render = function(template, callback){
            if (self.cache[template]&&self.cache[template]!==true){
                callback(self.cache[template]);
            } else if(self.cache[template]===true){
                if(self.listeners[template]){
                    self.listeners[template].push(callback);
                }else{
                    self.listeners[template] = [callback];
                }
            }  else{
                self.cache[template]=true;
                self.getTemplate(template, function(templ){
                    self.cache[template] = _.template(templ);
                    callback(self.cache[template]);
                    self.ready(template);
                });
            }

        };
    };
    var templates = new Templater();
    window.Chat = Backbone.Model.extend();

    window.ChatCollection = Backbone.Collection.extend({
        model :Chat,
        url :"/chat/"
    });

    window.ChatListView = Backbone.View.extend({
        el :$('.center_mid'),
        initialize :function(){
            this.model.bind("reset", this.render, this);
        },
        render :function(eventName){
            var list = this;
            templates.render('events', function(template){
                $(list.el).html(template({}));
                _.each(list.model.models, function(chat){
                    $('ul.event_listings').append(
                        new ChatListItemView({model :chat}).render().el);
                }, this);
            });
            return this;
        }
    });

    window.ChatListItemView = Backbone.View.extend({
        tagName :"li",
        render :function(eventName){
            var self = this;
            templates.render('one_event', function(template){
                $(self.el).html(template({'event' :self.model.toJSON()}));
            });
            return this;
        }
    });

    var AppRouter = Backbone.Router.extend({
        routes :{
            "" :"list"
        },

        list :function(){
            this.chatList = new ChatCollection();
            this.chatListView = new ChatListView({model :this.chatList});
            this.chatList.fetch();
        }
    });

    var app = new AppRouter();
    Backbone.history.start();
})();
