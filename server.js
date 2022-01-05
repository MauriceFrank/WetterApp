//http package import
const http = require('http');
const app = require('./backend/app');
const port = process.env.PORT || 3000;
const debug = require("debug")("node-angular");
app.set('port', port);
const server = http.createServer(app);

server.listen(port);
