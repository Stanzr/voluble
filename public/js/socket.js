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
/*
$('.send').live('click',function(){
    var msg = $('#chatMsg').val();
    if(msg){
        socket.emit('chatMsg',msg);
    }
});
*/
$(window).ready(function(){
    $('#chatForm').submit(function(evt){
        evt.stopPropagation();
        var msg = $('#chatMsg').val();
        if (msg){
            socket.emit('chatMsg', msg);
            $('#chatMsg').val('');
        }
        return false;
    });
});


socket.on('chatMsg',function(data){
   console.log('chat msg!',data);
});
