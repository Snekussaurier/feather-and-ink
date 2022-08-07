const { app, BrowserWindow, ipcMain } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const database = require('../src/mdl/database');

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      // The preload file where we will perform our app communication
      preload: isDev 
        ? path.resolve(path.join(__dirname, '/preload.js')) // Loading it from the public folder for dev
        : path.join(app.getAppPath(), './build/preload.js'),
         // Loading it from the build folder for production
      contextIsolation: true, // Isolating context so our app is not exposed to random javascript executions making it safer.
    },
  })

  win.loadURL(
    isDev
      ? 'http://localhost:3000' // Loading localhost if dev mode
      : `file://${path.join(__dirname, '../build/index.html')}` // Loading build file if in production
  );

  //remove menu
  win.removeMenu();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// Get character details
ipcMain.handle('get-character', (event, args) => {
  var db = database.db;
  db.get('SELECT * FROM sqlite_master')
});
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.