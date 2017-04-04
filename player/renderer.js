const playerMsgConfig = require('./player/playerMsgConfig')
const { ipcRenderer } = require('electron')
const videojs = window.videojs || require('video.js')
const vjsOptions = {
  techOrder: ['youtube'],
  youtube: {
    autoplay: 1
  }
}
const test = {
  a: 'https://www.youtube.com/watch?v=vxnPxJ1jUxc',
  b: 'https://youtu.be/kP3oo08kfis'
}

const player = videojs('player', vjsOptions)

player.ready(function() {
  playerMsgConfig(player)
})


