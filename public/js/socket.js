var socket = io.connect(document.location.origin);
socket.on('systemMsg', function(data){
    console.log('systemMsg!', data);
});

var chat = document.location.pathname;
var chatContainer;

socket.on('userLeave', function(uid){
    $('div.people>ul>li#' + uid.id).remove();
    $('#peopleCounter').html(parseInt($('#peopleCounter').html(), 10) - 1);
});
socket.emit('reqForChatJoin', chat);
socket.on('resForChatJoin', function(isAllowed){
    if (!isAllowed){
        alert('cant join ' + chat);
    } else{
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
        var msg = _.escape($.trim($('#chatMsg').val()));
        if (msg.length > 1){
            socket.emit('chatMsg', msg);
            $('#chatMsg').val('');

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
    $("#chatMsg").autocomplete({
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
                ui.item.value;

            triggered = false;

            return false;
        },
        focus :function(){
            return false;
        },
        minLength :2
    }).bind("keyup", function(){
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
    /*
     $('#chatMsg').autocomplete({
     'source':peoples
     });
     */

    $("#chatMsg").autocomplete("option", "minLength", 1);

    $('#chatMsg').blur(function(){
        if ($(this).val().trim() === ''){
            $(this).val(DEFAULT_TEXTAREA_VALUE);
        }

    });
    $('#chatMsg').keydown(function(evt){
        if (evt.keyCode == 13 && !evt.metaKey){
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

socket.on('chatMsg', function(data){
    getTemplate('pubChatMsg', function(template){
        chatContainer.getContentPane().append(
            template({'message' :data})
        );
        chatContainer.reinitialise();
        chatContainer.scrollToBottom(true);
        $("abbr.timeago").timeago();
    });
});

$('.okay').live('click', function(evt){
    evt.stopPropagation();
    var id = $(this).parent().parent().parent().parent().parent().attr('id');
    socket.emit('likeMsg', {'id' :id});
    return false;
});
