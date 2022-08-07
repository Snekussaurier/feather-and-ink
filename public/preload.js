const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {
  // Invoke Methods
  getCharacter: (args) => ipcRenderer.invoke('get-character', args)
});