var socket = io.connect( document.location.origin );
socket.on( 'systemMsg', function (data) {
   console.log('systemMsg!',data);
} );

var chat = document.location.pathname;
socket.emit('reqForChatJoin', chat);
socket.on('resForChatJoin',function(isAllowed){
    if(!isAllowed){
        alert('cant join ' + chat);
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
socket.on('chatMsg',function(data){
    getTemplate('pubChatMsg',function(template){
        $('ul.discuss').append(template({'message' :data}));
    })
});
