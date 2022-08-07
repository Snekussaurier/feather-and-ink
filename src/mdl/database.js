const sqlite3 = require('sqlite3');
const isDev = require('electron-is-dev');
const path = require('path');

// Initializing a new database
const db = new sqlite3.Database(
    isDev
    ? path.join(__dirname, '../../db/data.db') // my root folder if in dev mode
    : path.join(process.resourcesPath, 'db/data.db'), // the resources path if in production build
  (err) => {
    if (err) {
      console.log(`Database Error: ${err}`);
    } else {
      console.log('Database Loaded');
    }
  }
);

exports.db = db;