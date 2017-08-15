/**
 * Youtube app! Needs reference to an instance of BrowserWindow.
 */
const router = require('express').Router();

module.exports = function(windowMessenger) {

  router.get('/:video', function(req, res) {
    const video = req.params.video;
    console.log(`app received video: ${video}`)
    res.send(`App Received ${video}`)
    windowMessenger.send('newVid', video)
  })

  return router
};  
