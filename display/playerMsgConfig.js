/**
 * All this bullshit should be lifted and dropped into a proper client-side application
 */

const { ipcRenderer } = require('electron')

module.exports = function(player) {

  // Move to action creator for client state
  ipcRenderer.on('newVid', function(event, src) {
    // Video component controller execution in... video player child! (maybe? try that first)
    const builtSrc = `https://www.youtube.com/watch?v=${src}`
    player.src({
      type: 'video/youtube',
      src: builtSrc
    })
  })

}