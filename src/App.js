import './App.css';
import Sidenav from './comp/Sidenav';
import { HashRouter, Route, Routes } from "react-router-dom";
import Dashboard from './comp/Dashboard';
import Backpack from './comp/Backpack';
import {useEffect, useState} from 'react'

function App() {

  const [character, setCharacter] = useState()
  const [weapons, setWeapons] = useState([])

  useEffect(() => {
    const getCharacter = async () => {
      const characterFromServer = await fetchCharacter()
      setCharacter(characterFromServer);
    }
    const getWeapons= async () => {
      const weaponsFromServer = await fetchWeapons()
      setWeapons(weaponsFromServer);
    }

    getCharacter();
    getWeapons();
  }, []);

  const setWeaponInactive = (id) => {
    // loop over the todos list and find the provided id.
    let updatedWeaponArray = weapons.map(weapon => 
      {
        if (weapon.id === id){
          return {...weapon, active: 0};
        }
        return weapon; // else return unmodified item 
      });
    setWeapons(updatedWeaponArray); // set state to new object with updated list
  }

  // Fetch Character
  const fetchCharacter = async () => {
    const res = await window.api.getCharacter();
    return res;
  }

  // Fetch Weapons
  const fetchWeapons = async () => {
    const res = await window.api.getWeapons();
    return res;
  }

  return (
    <HashRouter>
      <div className="h-screen bg-background">
          <div className=' ml-[260px] overflow-y-auto overflow-x-hidden h-screen scrollbar'>
            <Routes>
              <Route path="/" element={<Dashboard character={character} setCharacter={setCharacter} weapons={weapons} setWeaponInactive={setWeaponInactive}/>} />
              <Route path="/backpack" element={<Backpack/>} />
              <Route path="/leveling" component=""/>
              <Route path="/settings" component="" />
              <Route path="/grimoire" component="" />
            </Routes>
          </div>
          <Sidenav/>
      </div>
    </HashRouter>
  );
}

export default App;
