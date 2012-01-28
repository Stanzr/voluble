var app = require('./app.js').express;
var io = require('./app.js').io;
var CONFIG = require('config');



app.listen(CONFIG.server.port,function(){
  console.log('server launched in "'+(process.env.NODE_ENV||'development')+'" enviroment on port '+CONFIG.server.port);
});

