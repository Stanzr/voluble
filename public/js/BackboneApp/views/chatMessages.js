(function (win) {
  var Voluble = win.Voluble = win.Voluble || {};
  var Backbone = win.Backbone, templates = Voluble.Templater;
  templates.preCache('chat'); 

  Voluble.ChatView = Backbone.View.extend({
    'id': 'chat',
    'el': $('.center_mid'),
    'initialize': function (chats) {
      this.chatId = chats.chatId;
      this.chatInfo = chats.chatInfo;
      this.msgModel = chats.msgModel;
      this.msgModel.bind('reset', this.render, this);
      this.msgModel.bind('add', this.addMsg, this);
      this.chatInfo.bind('change', this.setChatInfo,this);
      this.render();
    },
    'render': function (eventName) {
      var list = this;
      $('div.center').hide();
      templates.render('chat', function (template) {
        var obj = {
          'user':Voluble.currentUser,
          'chatInfo':{
            'chatName':list.chatId
          }
        };
        $('.center_mid').html(template(obj));
        $('div.center').fadeIn('slow');
      });
      return this;
    },
    'addMsg':function(msg){
      console.log('adding msg');
    },
    'setChatInfo':function(info){
      (new Voluble.ChatInfoView({'model':info})).render();
    },
    'close': function () {
      $(this.el).unbind();
      $(this.el).empty();
    }
  });

  Voluble.ChatInfoView = Backbone.View.extend({
    'tagName': "li",
    'initialize': function () {
      this.model.bind("change", this.render, this);
      this.model.bind("destroy", this.close, this);
    },
    'render': function () {
      var chatInfo = this.model.toJSON();
      if(chatInfo.questions.length===0){
        $('div.ques_nav').html(''); 
      }else{
        var questionIdx = parseInt(chatInfo.question||0,10);
        var question = chatInfo.questions[questionIdx>1? questionIdx-1:0];
        if(question===undefined){
          return false;
        }
        $('div.question>h2').html(question+'&nbsp;'); 
        $('div.question>p').html(question);
        $('#qcnt').html(chatInfo.questions.length);
        var urlRoot = '#/chat/'+chatInfo.name+'/q';
        questionIdx = questionIdx||1;
        var prev = questionIdx <= 1 ? 1 : questionIdx-1;
        var next = questionIdx >= chatInfo.questions.length ? chatInfo.questions.length : questionIdx+1;
        $('div.ques_nav > span.prev > a').attr('href',urlRoot+prev);
        $('div.ques_nav > span.next > a').attr('href',urlRoot+next);
        $('#currentQuestionPos').html(questionIdx);
      }
      return this;
    },
    'close': function () {
      $(this.el).unbind();
      $(this.el).remove();
    }


  });

  Voluble.ChatMsg = Backbone.View.extend({
    'tagName': "li",
    'initialize': function () {
      this.model.bind("change", this.render, this);
      this.model.bind("destroy", this.close, this);
    },
    'render': function (eventName) {
      var self = this;
      return this;
    },
    'close': function () {
      $(this.el).unbind();
      $(this.el).remove();
    }
  });
})(this);

