const { ipcRenderer } = require('electron')

module.exports = function(player) {

  ipcRenderer.on('newVid', function(event, src) {
    // Youtube
    const builtSrc = `https://www.youtube.com/watch?v=${src}`
    player.src({
      type: 'video/youtube',
      src: builtSrc
    })
  })
}