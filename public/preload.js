const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {
  // Invoke Methods

  // Character Methods
  getCharacters: (args) => ipcRenderer.invoke('get-characters', args),
  getCharacter: (args) => ipcRenderer.invoke('get-character', args),
  updateCharacter: (args) => ipcRenderer.invoke('update-character', args),
  updateWallet: (args) => ipcRenderer.invoke('update-wallet', args),

  // Skill Methods
  getCharacterWeaponSkills: (args) => ipcRenderer.invoke('get-character-weapon-skills', args),

  // Gear Methods
  getWeapons: (args) => ipcRenderer.invoke('get-weapons', args),
  updateWeapons: (args) => ipcRenderer.invoke('update-weapons-active', args),
  insertWeapon: (args) => ipcRenderer.invoke('insert-weapon', args),
  deleteWeapon: (args) => ipcRenderer.invoke('delete-weapon', args),
  getArmor: (args) => ipcRenderer.invoke('get-armor', args),
  getItems: (args) => ipcRenderer.invoke('get-items', args),
  getHealingItems: (args) => ipcRenderer.invoke('get-healing-items', args),
});