'use strict';

const http = require('http');

const { flaschenpost } = require('flaschenpost');
const { processenv } = require('processenv');

const logger = flaschenpost.getLogger();

const message = processenv('MESSAGE', 'Hello Kubernetes!');
const port = processenv('PORT', 3000);

const server = http.createServer((req, res) => {
  const { method, url } = req;

  logger.info('Received request.', { method, url });
  res.end(message);
});

server.listen(port, () => {
  logger.info('Server started.', { port });
});
