var io = require('socket.io');
exports.configure = function(data){
    if(data.auth){
        io.configure(function(){
            io.set('authorization',data.auth);
        });
    }
    return io;
};

