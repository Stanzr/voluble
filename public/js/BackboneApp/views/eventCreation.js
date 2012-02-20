(function (win) {
  var Voluble = win.Voluble = win.Voluble || {};
  var Backbone = win.Backbone, templates = Voluble.Templater;
  var $ = win.$;
  templates.preCache('eventCreateInvite');  
  templates.preCache('eventCreateDetails');  
  templates.preCache('eventCreateSend');  
  templates.preCache('eventCreateHeader');  
  var keeper = {
    'details': {
      'id': 'one',
      'template': 'eventCreateDetails'
    },
    'invite': {
      'id': 'two',
      'template': 'eventCreateInvite'
    },
    'send': {
      'id': 'three',
      'template': 'eventCreateSend'
    }
  };
  Voluble.EventCreationView = Backbone.View.extend({
    'id': 'eventCreation',
    'el': $('.center_mid'),
    'initialize': function (eventName) {
      /*this.chats.bind('reset', this.render, this);*/
      /*this.chats.bind('add', this.addChat, this);*/
      this.render(eventName);
    },
    'render': function (eventName) {
      var list = this;
      var renderObj = {
        'freshEvent': {
          'id': eventName.id,
          'fullName': eventName.id
        }
      };
      templates.render('eventCreateHeader', function (template) {
        $(list.el).html(template(renderObj));
        templates.render(keeper[eventName.action].template, function (template) {
          $('#main_send').html(template(renderObj));
          $('#' + keeper[eventName.action].id).addClass('active');
          $('a.date_cal').click(function () {
            $(this).datepicker();
            return false;
          });
        });
      });
      return this;
    },
    'close': function () {
      $(this.el).unbind();
      $(this.el).empty();
    }
  });
}(this));
