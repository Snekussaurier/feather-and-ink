const { app, BrowserWindow, ipcMain } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const database = require('../src/mdl/database');

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    minWidth: 925,
    minHeight: 720,
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
  
  // Get weapon details
  ipcMain.handle('get-weapons', (event, args) => {
    var db = database.db;
    return new Promise((resolve, reject) => {
      db.all('SELECT * FROM weapons WHERE character_id = \'a039e0b476ae4b8dba26ff246c808630\'', (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      })
    })
  });

  // Get character details
  ipcMain.handle('get-character', (event, args) => {
    var db = database.db;
    return new Promise((resolve, reject) => {
      db.get('SELECT * FROM view_character WHERE id = \'a039e0b476ae4b8dba26ff246c808630\'', (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      })
    })
  });

  // Get all characters
  ipcMain.handle('get-characters', (event, args) => {
    var db = database.db;
    return new Promise((resolve, reject) => {
      db.all('SELECT id, name FROM character',[],(err, rows) => {
        if (err) reject(err);
        resolve(rows);
      })
    })
  });

  // Update character details
  ipcMain.handle('update-character', (event, args) => {
    const sql = 'UPDATE character SET strength = ?, dexterity = ?, constitution = ?, intelligence = ?, charisma = ?, current_tp = ?, current_mp = ?, current_exp = ? WHERE id = \'a039e0b476ae4b8dba26ff246c808630\'';

    var db = database.db;
    db.run(sql, [args.strength, args.dexterity, args.constitution, args.intelligence, args.charisma, args.current_tp, args.current_mp, args.current_exp], function(err) {
      if (err) return console.error(err.message);
    });
  });

  //remove menu
  win.removeMenu();
  win.webContents.openDevTools()
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
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.