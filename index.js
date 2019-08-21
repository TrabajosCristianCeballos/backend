const express = require('express');
const service = require('./service');
const pkg = require('./package.json');

const logger = console;
const app = express();
service(app);

const server = app.listen(process.env.PORT || 80, () => {
  
  app.get('/', function (req, res) {
  res.send('Funciona')
  })
  
  logger.info(`${pkg.name} service online\n`);
});

module.exports = server;
