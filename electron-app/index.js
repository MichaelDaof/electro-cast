const electron = require('electron')
const { app, BrowserWindow } = electron;
const path = require('path')
const url = require('url')
const makeServerWithWindow = require('../server/index')

module.exports = function(win) {
  
  /**
   * Creates Electron BrowserWindow AND returns API for 
   * controlling global Window
   */
  function createWindow () {
    // Create the browser window.
    // TODO: Make a devMode alternative window
    win = new BrowserWindow({
      // width: 800, 
      // height: 600
      fullscreen: true
    })

    // and load the index.html of the app.
    win.loadURL(url.format({
      pathname: path.join(__dirname, '../display/index.html'),
      protocol: 'file:',
      slashes: true
    }))

    // Open the DevTools.
    win.webContents.openDevTools()

    // Emitted when the window is closed.
    win.on('closed', () => {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      win = null
    })

    // She's ready to go
    // Function wrappers to protect global window during heavy interaction
    return {
      send: function send(...args) {
        win.webContents.send(...args)
      }
    }
  }

  function launchApp() {
    const PORT = 3000
    // Start server with newly created Electron window. 
    // CONSIDER: Not an asynchronous action, but a Promise could be more instructive
    // and readable here.
    makeServerWithWindow(createWindow()).listen(PORT, () => console.log(`Server started from Electron on port ${PORT}`))
  }

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', launchApp)

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow()
    }
  })

  return app

}