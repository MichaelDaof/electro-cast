/**
 * All this bullshit should be lifted and dropped into a proper client-side application
 */

const { ipcRenderer } = require('electron')

module.exports = function(player) {

  // Action creator for client state
  // ipcRenderer seems to only be expected to be used on round trip events
  // that start with icpMain as ipcRenderer.emit doesn't exist and but kinda 
  // available in the callback of ipcMain.on
  ipcRenderer.on('newVid', function(event, src) {
    // Video component controller execution in... video player child! (maybe? try that first)
    const builtSrc = `https://www.youtube.com/watch?v=${src}`
    player.src({
      type: 'video/youtube',
      src: builtSrc
    })
  })

}