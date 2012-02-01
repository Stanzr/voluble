(function (win) {
    var $ = win.$;
    $(win.document).ready(function () {
        var Backbone = win.Backbone, app, socket, Templater, self, _ = win._, templates, Voluble, AppRouter;
        Backbone.socket = socket = win.socket = win.io.connect('http://109.254.16.25');
        Templater = function () {
            self = this;
            this.cache = {};
            this.listeners = {};
            this.ready = function (template) {
                if (self.listeners[template]) {
                    _.each(self.listeners[template], function (listener, idx) {
                        listener(self.cache[template]);
                        self.listeners[template].splice(idx, 1);
                    });
                }
            };
            this.getTemplate = function (template, callback) {
                $.get('/templates/' + template, function (data) {
                    callback(data);
                });
            };
            this.render = function (template, callback) {
                if (self.cache[template] && self.cache[template] !== true) {
                    callback(self.cache[template]);
                } else if (self.cache[template] === true) {
                    if (self.listeners[template]) {
                        self.listeners[template].push(callback);
                    } else {
                        self.listeners[template] = [callback];
                    }
                } else {
                    self.cache[template] = true;
                    self.getTemplate(template, function (templ) {
                        self.cache[template] = _.template(templ);
                        callback(self.cache[template]);
                        self.ready(template);
                    });
                }

            };
        };
        templates = new Templater();
        Voluble = win.Voluble || {};

        Voluble.Chat = Backbone.Model.extend({
            'urlRoot': 'chat',
            'noIoBind': false,
            'socket': Backbone.socket,
            'defaults': {
                'name': "",
                'user': ""
            },
            'initialize': function () {
                _.bindAll(this, 'serverChange', 'serverDelete', 'modelCleanup');
                this.ioBind('update', Backbone.socket, this.serverChange, this);
                this.ioBind('delete', Backbone.socket, this.serverDelete, this);
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

        Voluble.PastChat = Backbone.Model.extend({
            'urlRoot': 'pastChat',
            'noIoBind': false,
            'socket': Backbone.socket,
            'defaults': {
                'name': "",
                'user': ""
            },
            'initialize': function () {
                _.bindAll(this, 'serverChange', 'serverDelete', 'modelCleanup');
                this.ioBind('update', Backbone.socket, this.serverChange, this);
                this.ioBind('delete', Backbone.socket, this.serverDelete, this);
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


        Voluble.PastChatCollection = Backbone.Collection.extend({
            'model': Voluble.PastChat,
            'url': "pastChats",
            'socket': Backbone.socket,
            'noIoBind': false,
            initialize: function () {
                _.bindAll(this, 'collectionCleanup');
            },
            collectionCleanup: function (callback) {
                this.ioUnbindAll();
                this.each(function (model) {
                    model.modelCleanup();
                });
                return this;
            }
        });


        Voluble.ChatCollection = Backbone.Collection.extend({
            'model': Voluble.Chat,
            'url': "chats",
            'socket': Backbone.socket,
            'noIoBind': false,
            'initialize': function () {
                _.bindAll(this, 'serverCreate', 'collectionCleanup');
                this.ioBind('create', Backbone.socket, this.serverCreate, this);
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
            'collectionCleanup': function (callback) {
                this.ioUnbindAll();
                this.each(function (model) {
                    model.modelCleanup();
                });
                return this;
            }

        });

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
                    $('#newEventCreation').live('click', list.newEvent.bind(list));
                    $('ul.event_listings').html('');
                    list.chats.each(function (chat) {
                        list.addChat(chat);
                    });
                });
                return this;
            },
            'addChat': function (chat) {
                $('ul.event_listings').append(new Voluble.ChatListItemView({
                    model: chat
                }).render().el);
            },
            'addPastChat': function (chat) {
              //TODO:render past eventName
            },
            'newEvent': function () {
                var model = new this.model.upcoming.model();
                //TODO: replace with current user
                model.set({
                    name: $('#newEventName').val(),
                    'user': 'ololo'
                });
                if (model.isNew()) {
                    this.model.upcoming.add(model);
                    app.chatList.create(model);
                    app.chatList.fetch();
                }
                return false;
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
                templates.render('one_event', function (template) {
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
                alert('not implemented');
            }
        });

        app = new AppRouter();

        Backbone.history.start();

    });
})(this);