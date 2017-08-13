/**
 * Youtube app! Needs window messenger!
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
