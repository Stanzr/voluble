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
          $('input.datepicker').datepicker();
           
          $('#hoursSetter').keydown(function(evt){
            if(evt.keyCode > 64){
              return false;
            }
            var symbol = parseInt(String.fromCharCode(evt.keyCode), 10);
            var value = $(this).val();
            if(value.length === 5 && evt.keyCode > 20) {
              return false;
            }
            if (!isNaN(symbol)) {
              if(value.length === 1){
                value+=symbol+':'; 
                $(this).val(value);
                return false;
              }
              if(value.length === 2){
                value+=':'+symbol; 
                $(this).val(value);
                return false;
              }
              if(value.length === 0 && symbol > 1){
                 value = '0'+symbol+':';
                 $(this).val(value);
                 return false;
              }
              evt.stopPropagation();
            }
          });
          $('a.send').click(function () {
            $('div.topic-container').append('<br/><div class="setting_input"><input type="text" value="" class="voluble-input" name="chatTopic[]" /></div>');
            return false;
          });
          $('a.next_btn').click(function() {
            $('form.evt-create-details').submit();
          });
          $('a.date_cal').click(function () {
            $('p.chat_date').datepicker();
            return false;
          });
          $('p.am_text').click(function () {
            $(this).html($(this).html() === 'am' ? 'pm': 'am');
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
