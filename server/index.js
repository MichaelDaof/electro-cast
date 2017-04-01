const express = require('express');
const expressApp = express();
const server = require('http').createServer(expressApp);

module.exports = {
  server,
  expressApp
}
