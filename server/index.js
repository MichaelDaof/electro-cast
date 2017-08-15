/**
 * This app requires instantiated Electron window to start.
 */

const express = require('express');
const app = express();
const server = require('http').createServer(app);
const path = require('path')

// Routers!
const homeRouter = require('./routers/homeRouter')
const youtubeRouter = require('./routers/youtubeRouter');

/**
 * Returns server to be started whenever
 */
module.exports = function(windowMessenger) {
  /////////////////////////////////////////////////////////////////////////////
  // Config routing and middleware -- move configuration to it's own module? //
  /////////////////////////////////////////////////////////////////////////////
  app.use(express.static(path.join(__dirname, '../client/build')))
  app.use('/', homeRouter(windowMessenger))
  app.use('/yt', youtubeRouter(windowMessenger))


  return server
}