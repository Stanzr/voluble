var socket = io.connect(document.location.origin);
socket.on('systemMsg', function(data){
  console.log('systemMsg!', data);
});

var chat = document.location.pathname;
var chatContainer;
var me;
socket.on('userLeave', function(uid){
  $('div.people>ul>li#' + uid.id).remove();
  $('#peopleCounter').html(parseInt($('#peopleCounter').html(), 10) - 1);
});
socket.emit('reqForChatJoin', chat);
socket.on('resForChatJoin', function(whoAmI){
  if (!whoAmI){
    alert('cant join ' + chat);
  } else{
    me = whoAmI;
    setTimeout(function(){
      socket.emit('getChatParticipants')
    }, 100);
  }
});

$(window).ready(onReady);

var DEFAULT_TEXTAREA_VALUE = 'Type your comment...';
function onReady (){
  $('#chatForm').submit(function(evt){
    evt.stopPropagation();
    var msg = {
      'msg':_.escape($.trim($('#chatMsg').val())),
      'repliesTo': $('#repliesFromMe').val()
    };

    if (msg.msg.length > 1){
      socket.emit('chatMsg', msg);
      $('#chatMsg').val('');
      $('#repliesFromMe').val('');

    }
    return false;
  });

  var getCaretPos = function(id){
    var el = document.getElementById(id);
    var rng, ii = -1;
    if (typeof el.selectionStart == "number"){
      ii = el.selectionStart;
    } else if (document.selection && el.createTextRange){
      rng = document.selection.createRange();
      rng.collapse(true);
      rng.moveStart("character", -el.value.length);
      ii = rng.text.length;
    }
    return ii;
  };
  var triggered = false;
  var trigger = "@";

  function split (val){
    return val.split(/,\s*/);
  }

  function extractLast (term){
    return split(term).pop();
  }
  $("#chatMsg").bind("keydown",
                     function(event){
                       if (event.keyCode === $.ui.keyCode.TAB &&
                           $(this).data("autocomplete").menu.active){
                         event.preventDefault();
                       }
                     }).autocomplete({
                       source : function(request, response){
                         $.getJSON(chat+"/user?action=list", {
                           term :extractLast(request.term)
                         }, response);
                       },
                       search :function(){
                         if (!triggered){
                           return false;
                         }
                       },
                       select :function(event, ui){
                         var text = this.value;
                         var pos = text.lastIndexOf(trigger);

                         this.value = text.substring(0, pos + trigger.length) +
                           ui.item.label;
                         var replies = $('#repliesFromMe').val();
                         replies+=ui.item.label+':'+ui.item.value+';';
                         $('#repliesFromMe').val(replies);
                         triggered = false;
                         return false;
                       },
                       focus :function(evt,object){
                         return false;
                       }
                     }).bind("keyup", function(evt){
                       if(evt.keyCode===40||evt.keyCode=== 38){
                         return false;
                       }
                       var text = this.value;
                       var len = text.length;
                       var last;
                       var query;
                       var index;

                       if (triggered){
                         index = text.lastIndexOf(trigger);
                         query = text.substring(index + trigger.length);
                         $(this).autocomplete("search", query);
                       }
                       else if (len >= trigger.length){
                         last = text.substring(len - trigger.length);
                         triggered = (last === trigger);
                       }
                     });

                     $('#chatMsg').val(DEFAULT_TEXTAREA_VALUE);


                     $('#chatMsg').blur(function(){
                       if ($(this).val().trim() === ''){
                         $(this).val(DEFAULT_TEXTAREA_VALUE);
                       }

                     });
                     $('#chatMsg').keydown(function(evt){
                       if (evt.keyCode == 13 && evt.metaKey){
                         $('#chatForm').submit();
                       }
                     });
                     $('#chatMsg').focus(function(evt){
                       if ($(this).val() == DEFAULT_TEXTAREA_VALUE){
                         $(this).val('');
                       }
                       evt.stopPropagation();
                       return false;
                     });

                     chatContainer = ($('ul.jspScrollable').jScrollPane()).data('jsp');
                     chatContainer.scrollToBottom(true);
                     chatContainer.reinitialise(true);
                     $('#expander').remove();
                     $("abbr.timeago").timeago();
}

var readyTemplates = {};
function getTemplate (template, callback){
  if (!readyTemplates[template]){
    $.get('/templates/' + template, function(data){
      if (data){
        readyTemplates[template] = _.template(data);
        callback && callback(readyTemplates[template]);
      }
    });
  } else{
    callback && callback(readyTemplates[template]);
  }

}
var VolubleMain = function(){
  this.render = getTemplate;
  this.helpers = {};
  this.refreshChat = function(delay){
    if(delay){
      setTimeout(function(){
        $('abbr.timeago').timeago();
        chatContainer.reinitialise();
        chatContainer.scrollToBottom(true);

      },parseInt(delay,10))
    }else{
      $('abbr.timeago').timeago();
      chatContainer.reinitialise();
      chatContainer.scrollToBottom(true);

    }

  };
  var self = this;
  this.handleChatMessage = function(data){
    if(_.isArray(data)){
      _.each(data,self.handleChatMessage);
      return false;
    }
    
    if(data.replies&&data.replies.length>0){
      var replyToMe = _.filter(data.replies,function(reply){
        return reply.to == me.name;
      });
    }
    if(replyToMe&&replyToMe.length>0){
      self.render('summaryReply',function(template){
        $('.replies').append(template({'reply':data}));
      });
    }
    var template = replyToMe&&replyToMe.length>0?'pubChatMsgReply':'pubChatMsg';
    self.render(template, function(template){
      chatContainer.getContentPane().append(
        template({'message' :data})
      );
    });
    self.refreshChat(100);

  }
}
var voluble  = new VolubleMain();

socket.on('peoplesInRoom', function(data){
  $('#peopleCounter').html(data.length);
  getTemplate('chatParticipant', function(template){
    _.each(data, function(user){
      $('div.people>ul').append(template({'user' :user}));
    });
  });
});

socket.on('newMostLiked', function(liked){
  $('.most_likes>.likes_container').remove();
  getTemplate('likes', function(template){
    _.each(liked, function(like){
      $('.most_likes').append(template({"data" :like}));
    });
  });
});

socket.on('newcomer', function(newUser){
  $('#peopleCounter').html(parseInt($('#peopleCounter').html(), 10) + 1);
  getTemplate('chatParticipant', function(template){
    $('div.people>ul').append(template({'user' :newUser}));
  })
});


socket.on('chatMsg', voluble.handleChatMessage);

$('.okay').live('click', function(evt){
  evt.stopPropagation();
  var id = $(this).parent().parent().parent().parent().parent().attr('id');
  socket.emit('likeMsg', {'id' :id});
  return false;
});
