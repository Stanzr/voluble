(function (win) {
  var Voluble = win.Voluble = win.Voluble || {};
  var Backbone = win.Backbone, templates = Voluble.Templater;
  var _ = win._;
  templates.preCache('chat'); 
  templates.preCache('pubChatMsg'); 
  var DEFAULT_TEXTAREA_VALUE = 'Type your comment...';
  Voluble.ChatView = Backbone.View.extend({
    'id': 'chat',
    'el': $('.center_mid'),
    'initialize': function (chats) {
      this.chatId = chats.chatId;

      this.msgModel = chats.msgModel;
      this.msgModel.bind('reset', this.renderMsgs, this);
      this.msgModel.bind('add', this.renderMsg, this);
      this.msgModel.bind('change', this.renderMsgs,this);
      
      this.chatInfo = chats.chatInfo;
      this.chatInfo.bind('change', this.setChatInfo,this);

      this.participants  = chats.chatParticipants;
      this.participants.bind('change', this.renderParticipants,this);
      this.participants.bind('add', this.renderParticipantSingle,this);
      this.participants.bind('reset', this.renderParticipants,this);

      this.render();
    },
    'renderParticipantSingle': function (user) {
      //update counter 
      var counter = $('#peopleCounter');
      counter.html(parseInt(counter.html(),10)+1);
      $('div.people > ul').append(new Voluble.ChatParticipantsSingleView({ 'model':user }).render().el);
    },
    'renderParticipants': function (usrs) {
      $('#peopleCounter').html(usrs.length);
      usrs.each(function(user){
        $('div.people > ul').append(new Voluble.ChatParticipantsSingleView({ 'model':user }).render().el);
      });
    },
    'render': function (msgs) {
      var list = this;
      $('div.center').hide();
      $('#chatForm').live('submit',list.addMsg.bind(list));
      templates.render('chat', function (template) {
        var obj = {
          'user':$('#uid').val(),
          'chatInfo':{
            'chatName':list.chatId
          }
        };
        $('.center_mid').html(template(obj));

        list.chatContainer = ($('ul.jspScrollable').jScrollPane({'contentWidth':500})).data('jsp');
        list.chatContainer.scrollToBottom(true);
        list.chatContainer.reinitialise(true);
        $('#chatMsg').val(DEFAULT_TEXTAREA_VALUE);
        
        $('#chatMsg').blur(function(){
          if ($(this).val().trim() === ''){
            $(this).val(DEFAULT_TEXTAREA_VALUE);
          }

        });
        $('#chatMsg').keydown(function(evt){
          if (evt.keyCode == 13){
            list.addMsg.call(list);
          }
        });
        $('#chatMsg').focus(function(evt){
          if ($(this).val() == DEFAULT_TEXTAREA_VALUE){
            $(this).val('');
          }
          evt.stopPropagation();
          return false;
        });

        $('div.center').fadeIn('slow');

      });
      return this;
    },
    'addMsg':function(){
      var model = new this.msgModel.model();
      var message = $('#chatMsg').val();
      if(!message||message==DEFAULT_TEXTAREA_VALUE){
        return false;
      }
      model.set({
        'chatId':this.chatId,
        'message': message,
        'postTo':$('#postToTwitter').attr('checked'),
        'user':Voluble.currentUser
      });
      $('#chatMsg').val('');
      this.msgModel.create(model);
      return false;
    },
    'reinitChatLayout':function(){
      this.chatContainer.reinitialise();
      this.chatContainer.scrollToBottom(true);
      return this;
    },
    'renderMsgs':function(msgs){
      var self = this;
      msgs.each(function(msg){
        self.renderMsg(msg); 
      });
    },
    'renderMsg':function(msg){
      var content =new Voluble.ChatMsg({'model':msg}).render().el ;
      this.chatContainer.getContentPane().append(content);
      this.reinitChatLayout();
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
        questionIdx = questionIdx||1;
        var prev = questionIdx <= 1 ? 1 : questionIdx-1;
        var next = questionIdx >= chatInfo.questions.length ? chatInfo.questions.length : questionIdx+1;
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
      templates.render('pubChatMsg',function(template){
        $(self.el).html(template({'message':self.model.toJSON()}));
      }); 
      return this;
    },
    'close': function () {
      $(this.el).unbind();
      $(this.el).remove();
    }
  });
})(this);

