var socket = io.connect( document.location.origin );
socket.on( 'systemMsg', function (data) {
   console.log('systemMsg!',data);
} );
var chat = 'testSMOChat';
socket.emit('reqForChatJoin', chat);
socket.on('resForChatJoin',function(isAllowed){
    if(!isAllowed){
        alert('cant join ' + chat);
    }else{
        alert('joined to ' + chat)
    }
});

socket.on('chatMsg',function(data){
   console.log('chat msg!',data);
});

setInterval(function(){
    socket.emit('chatMsg',{'msg':'hell yeah'});
},5000);