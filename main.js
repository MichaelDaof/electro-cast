const electron = require('electron')
const path = require('path')
const url = require('url')
const ip = require('ip')
const { expressApp, server } = require('./server')
const configElectron = require('./electron-app/configElectron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

configElectron(electron, win)
server.listen(3000)
