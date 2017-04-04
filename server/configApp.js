module.exports = function(expressApp, window) {

  // Config routes
  expressApp.get('/yt/:video', function(req, res) {
      const video = req.params.video;
      console.log(`app received video: ${video}`)
      res.send(`App Received ${video}`)
      window.webContents.send('newVid', video)
  })
}