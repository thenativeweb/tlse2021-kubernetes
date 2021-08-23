'use strict';

const http = require('http');

const { flaschenpost } = require('flaschenpost');
const { processenv } = require('processenv');

const logger = flaschenpost.getLogger();

const server = http.createServer((req, res) => {
  const { method, url } = req;

  logger.info('Received request.', { method, url });
  res.end('Hallo Kubernetes!');
});

const port = processenv('PORT', 3000);

server.listen(port, () => {
  logger.info('Server started.', { port });
});
