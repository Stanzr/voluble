var app = require('./app.js');
var CONFIG = require('config');
console.log(app.routes);
app.listen(CONFIG.server.port);
console.log('current env is '+process.env['NODE_ENV']);
console.log('server listening on '+CONFIG.server.port);
