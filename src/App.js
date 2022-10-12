import './App.css';
import Sidenav from './comp/Sidenav';
import { ReactSVG } from "react-svg";
import { HashRouter, Route, Routes } from "react-router-dom";
import Dashboard from './comp/Dashboard';
import Backpack from './comp/Backpack';
import {useEffect, useState} from 'react';
import FeatherIcon from "./res/quill-ink.svg";
import CollapseIcon from "./res/caret-left.svg";
import Leveling from './comp/Leveling';

function App() {

  const defaultCharacter = {
    "id": "0",
    "name": "Schwanhild Heinrike",
    "race": "Mensch",
    "profession": "Barde",
    "weight": 70,
    "height": 180,
    "age": 20,
    "current_tp": 4,
    "current_mp": 4,
    "current_exp": 0
  };

  const [characterId, setCharacterId] = useState('a039e0b476ae4b8dba26ff246c808630')
  const [characters, setCharacters] = useState([])
  const [character, setCharacter] = useState(defaultCharacter)
  const [weapons, setWeapons] = useState([])

  useEffect(() => {
    const getCharacters = async () => {
      const charactersFromServer = await fetchCharacters()
      setCharacters(charactersFromServer);
    }
    const getCharacter = async () => {
      const characterFromServer = await fetchCharacter(characterId)
      setCharacter(characterFromServer);
    }
    const getWeapons= async () => {
      const weaponsFromServer = await fetchWeapons(characterId)
      setWeapons(weaponsFromServer);
    }

    getCharacters();
    getCharacter();
    getWeapons();
  }, [characterId]);

  const setWeaponInactive = (id) => {
    // loop over the weapons list and find the provided id.
    let updatedWeaponArray = weapons.map(weapon => 
      {
        if (weapon.id === id){
          return {...weapon, active: 0};
        }
        return weapon; // else return unmodified item 
      });
    setWeapons(updatedWeaponArray); // set state to new object with updated list
  }

  // Fetch Characters
  const fetchCharacters = async () => {
    const res = await window.api.getCharacters();
    return res;
  }

  // Fetch Character
  const fetchCharacter = async (id) => {
    const res = await window.api.getCharacter(id);
    return res;
  }

  // Fetch Weapons
  const fetchWeapons = async (id) => {
    const res = await window.api.getWeapons(id);
    return res;
  }

  const [isExpanded, setIsExpanded] = useState(true);
  const onExpand = () => setIsExpanded((expanded) => !expanded);

  let backgroundImage;
  if(character.character_background !== undefined) backgroundImage = require('./res/background-illustration-' + character.character_background + '.jpg');
  else backgroundImage = require('./res/background-illustration-' + 1 + '.jpg');

  return (
    <HashRouter>
      <div className={isExpanded ? "h-screen bg-background overflow-y-auto overflow-x-hidden scrollbar scrollbar-y flex flex-row ml-0 small:ml-0 transition-spacing duration-300" : "duration-300 h-screen bg-background overflow-y-auto overflow-x-hidden scrollbar scrollbar-y flex flex-row ml-0 small:ml-[320px] transition-spacing" }>
        <div className='absolute top-5 bg-[#0E0F21AA] backdrop-blur-md pl-[20px] pr-[10px] py-[10px] left-0 z-40 flex flex-row border-r border-y border-current-line cursor-pointer' onClick={onExpand}>
          <ReactSVG src={FeatherIcon} className='fill-foreground'/>
          <ReactSVG src={CollapseIcon} className='fill-foreground rotate-180'/>
        </div>
        <Sidenav characters={characters} character={character} isExpanded={isExpanded} onExpand={onExpand} setCharacterId={setCharacterId}/>
        <div className='max-w-full flex justify-center flex-grow relative'>
          <div className="absolute top-0 h-[calc(40vw+48px)] max-h-[calc(600px+48px)] min-h-[calc(500px+48px)] w-full left-0 bg-cover" style={{backgroundImage: `linear-gradient(to bottom, rgba(25, 27, 49, 0.1), rgba(25, 27, 49, 1)), url(${backgroundImage})`}}/>
          <Routes>
            <Route path="/" element={<Dashboard character={character} setCharacter={setCharacter} weapons={weapons}/>}/>
            <Route path="/backpack" element={<Backpack character={character} setCharacter={setCharacter}/>} />
            <Route path="/leveling" element={<Leveling/>}/>
            <Route path="/settings" component="" />
            <Route path="/grimoire" component="" />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
