/**
 * This app requires instantiated Electron window to start.
 */

const express = require('express');
const app = express();
const server = require('http').createServer(app);

// Routers!
const youtubeRouter = require('./routers/youtubeRouter');

/**
 * Returns server to be started whenever
 */
module.exports = function(windowMessenger) {
  /////////////////////////////////////////////////////////////////////////////
  // Config routing and middleware -- move configuration to it's own module? //
  /////////////////////////////////////////////////////////////////////////////
  app.use('/yt', youtubeRouter(windowMessenger))


  return server
}