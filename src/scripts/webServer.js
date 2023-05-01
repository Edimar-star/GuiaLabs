const http = require('http');
const { requestListener } = require('./urlModule');
const server = http.createServer(requestListener);
const { PORT } = require('../config');

server.listen(PORT, () => console.log(`server is running ${PORT}`));
