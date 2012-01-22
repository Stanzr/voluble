var socket = io.connect( document.location.origin );
socket.on( 'systemMsg', function (data) {
   console.log('systemMsg!',data);
} );

var chat = document.location.pathname;
socket.emit('reqForChatJoin', chat);
socket.on('resForChatJoin',function(isAllowed){
    if(!isAllowed){
        alert('cant join ' + chat);
    }else{
        setTimeout(function(){
            socket.emit('getChatParticipants')
        },100);

    }
});

$(window).ready(onReady);


function onReady(){
    $('#chatForm').submit(function(evt){
        evt.stopPropagation();
        var msg = _.escape($('#chatMsg').val());
        if (msg){
            socket.emit('chatMsg', msg);
            $('#chatMsg').val('');

        }
        return false;
    });
}


var readyTemplates = {};
function getTemplate(template,callback){
    if(!readyTemplates[template]){
        console.log('getting /templates/' + template);
        $.get('/templates/' + template, function(data){
            if (data){
                readyTemplates[template] = _.template(data);
                console.log(readyTemplates);
                callback && callback(readyTemplates[template]);
            }
        });
    }else{
        callback&&callback(readyTemplates[template]);
    }

}

socket.on('peoplesInRoom',function(data){
    $('#peopleCounter').html(data.length);
    getTemplate('chatParticipant',function(template){
       _.each(data,function(user){
            $('div.people>ul').append(template({'user':user}));
       });
    });
});

socket.on('newMostLiked',function(liked){
    $('.most_likes>.likes_container').remove();
    getTemplate('likes',function(template){
        _.each(liked, function(like){
            $('.most_likes').append(template({"data":like}));
        });
    });
});


socket.on('newcomer',function(newUser){
    $('#peopleCounter').html(parseInt($('#peopleCounter').html(),10)+1);
    getTemplate('chatParticipant',function(template){
        $('div.people>ul').append(template({'user' :newUser}));
    })
});


socket.on('chatMsg',function(data){
    getTemplate('pubChatMsg',function(template){
        $('div.jspPane').append(template({'message' :data}));
    });
});
