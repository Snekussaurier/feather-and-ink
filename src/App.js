import './App.css';
import Sidenav from './comp/Sidenav';
import { ReactSVG } from "react-svg";
import { HashRouter, Route, Routes } from "react-router-dom";
import Dashboard from './comp/Dashboard';
import Backpack from './comp/Backpack';
import {useEffect, useState} from 'react';
import FeatherIcon from "./res/quill-ink.svg";
import CollapseIcon from "./res/caret-left.svg";

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

  const [isExpanded, setIsExpanded] = useState(true);
  const onExpand = () => setIsExpanded((expanded) => !expanded);

  return (
    <HashRouter>
      <div className="h-screen bg-background overflow-y-auto overflow-x-hidden scrollbar scrollbar-y flex flex-row ml-0 small:ml-[300px] transition-spacing">
        <div className='absolute top-5 bg-background-very-dark pl-[20px] pr-[10px] py-[10px] left-0 z-40 flex flex-row border-r border-y border-current-line'>
          <ReactSVG src={FeatherIcon} className='fill-foreground'/>
          <ReactSVG src={CollapseIcon} className='fill-foreground rotate-180'/>
        </div>
        <Sidenav character={character} isExpanded={isExpanded} onExpand={onExpand}/>
        <div className='max-w-full flex justify-center flex-grow relative'>
          <Routes>
            <Route path="/" element={<Dashboard character={character} setCharacter={setCharacter} weapons={weapons} setWeaponInactive={setWeaponInactive}/>} />
            <Route path="/backpack" element={<Backpack/>} />
            <Route path="/leveling" component=""/>
            <Route path="/settings" component="" />
            <Route path="/grimoire" component="" />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
