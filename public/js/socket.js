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
var voluble;
function getTemplate(template,cb){
    $.get('/templates/'+template, function(data){
        if(data){
            voluble.templates[template] = voluble.main.templater.jade.compile(data,{"client":true});
            cb&&cb(voluble.templates[template]);
        }else{
            cb && cb(null);
        }

    });
}
function onReady(){
    voluble = voluble || {};
    voluble.main = {
        "templater" :{
            "jade" :jade
        }
    };
    voluble.templates = {};
    $('#chatForm').submit(function(evt){
        evt.stopPropagation();
        var msg = $('#chatMsg').val();
        if (msg){
            socket.emit('chatMsg', msg);
            $('#chatMsg').val('');
        }
        return false;
    });

}



socket.on('chatMsg',function(data){
    var chatMsgTemplate = 'pubChatMsg';
    getTemplate(chatMsgTemplate, function(template){
        if(template!==null){
             if(typeof template === 'function'){
                 try{
                     template.call({});
                 }catch(e){
                     console.dir(e);
                 }

             }else{
                 console.log('template is not a function');
             }
            //$('ul.discuss').append('<li>'+template(data)+'</li>');
        }
    });
});
