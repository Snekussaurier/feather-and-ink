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

  const config = require('./conf/config.json')

  const attributeBonus = {
    1: -3,
    2: -2,
    3: -1,
    4: -1,
    5: 0,
    6: 1,
    7: 1,
    8: 2,
    9: 2,
    10: 3 
  }

  const tpProfessions = {
    1: 6,
    2: 6,
    3: 10,
    4: 8,
    5: 6,
    6: 8,
    7: 4
  }

  const [characterId, setCharacterId] = useState(config.currentCharacter);
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState(defaultCharacter);
  const [weapons, setWeapons] = useState([]);
  const [armor, setArmor] = useState([]);

  // Get character from db
  useEffect(() => {
    const getCharacters = async () => {
      const charactersFromServer = await fetchCharacters()
      setCharacters(charactersFromServer);
    }
    const getCharacter = async () => {
      const characterFromServer = await fetchCharacter(characterId)
      setCharacter(characterFromServer);
    }
    const getWeapons = async () => {
      const weaponsFromServer = await fetchWeapons(characterId)
      setWeapons(weaponsFromServer);
    }
    const getArmor = async () => {
      const armorFromServer = await fetchArmor(characterId)
      setArmor(armorFromServer)
    }

    getCharacters();
    getCharacter();
    getWeapons();
    getArmor();
  }, [characterId]);

  // Update character in db
  useEffect(() => {
    const postCharacter = async () => {
      await window.api.updateCharacter(character);
    }

    postCharacter();
  }, [character]);

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

  // Fetch Armor
  const fetchArmor = async (id) => {
    const res = await window.api.getArmor(id);
    return res;
  }

  const [isExpanded, setIsExpanded] = useState(true);
  const onExpand = () => setIsExpanded((expanded) => !expanded);

  let backgroundImage;
  if(character.character_background !== undefined) backgroundImage = require('./res/background-illustration-' + character.character_background + '.jpg');
  else backgroundImage = require('./res/background-illustration-' + 1 + '.jpg');

  return (
    <HashRouter>
      <div className={!isExpanded ? "h-screen bg-background overflow-y-auto overflow-x-hidden scrollbar scrollbar-y flex flex-row ml-0 small:ml-0 transition-spacing duration-300" : "duration-300 h-screen bg-background overflow-y-auto overflow-x-hidden scrollbar scrollbar-y flex flex-row ml-0 small:ml-[320px] transition-spacing" }>
        <div className='absolute top-5 bg-[#0E0F21AA] backdrop-blur-md pl-[20px] pr-[10px] py-[10px] left-0 z-40 flex flex-row border-r border-y border-current-line cursor-pointer' onClick={onExpand}>
          <ReactSVG src={FeatherIcon} className='fill-foreground'/>
          <ReactSVG src={CollapseIcon} className='fill-foreground rotate-180'/>
        </div>
        <Sidenav characters={characters} character={character} isExpanded={isExpanded} onExpand={onExpand} setCharacterId={setCharacterId}/>
        <div className='max-w-full flex justify-center flex-grow relative'>
          <div className="absolute top-0 h-[calc(40vw+48px)] max-h-[calc(600px+48px)] min-h-[calc(500px+48px)] w-full left-0 bg-cover" style={{backgroundImage: `linear-gradient(to bottom, rgba(25, 27, 49, 0.1), rgba(25, 27, 49, 1)), url(${backgroundImage})`}}/>
          <Routes>
            <Route path="/" element={<Dashboard character={character} setCharacter={setCharacter} weapons={weapons} armor={armor} attributeBonus={attributeBonus} tpProfessions={tpProfessions}/>} />
            <Route path="/backpack" element={<Backpack character={character} setCharacter={setCharacter}/>} />
            <Route path="/leveling" element={<Leveling/>}/>
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
