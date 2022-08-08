const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {
  // Invoke Methods
  getCharacter: (args) => ipcRenderer.invoke('get-character', args),
  updateCharacter: (args) => ipcRenderer.invoke('update-character', args),
});