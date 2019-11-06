const http = require('http');
const app = require('./app');
const envConfig = require('./utils/env-config');


const server = http.createServer(app);

server.listen(envConfig.PORT, () => {
  console.log(`Server running on port ${envConfig.PORT}`);
});
