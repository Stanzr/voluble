var app = require('./app.js').express;
var io = require('./app.js').io;
var CONFIG = require('config');



app.listen(CONFIG.server.port);

console.log('current env is '+process.env['NODE_ENV']);
console.log('server listening on '+CONFIG.server.port);
