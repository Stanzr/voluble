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

socket.on('chatMsg',function(data){
   console.log('chat msg!',data);
});
