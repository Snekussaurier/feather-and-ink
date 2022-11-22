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
import Grimoire from './comp/Grimoire';
import Options from './comp/Options';
import Weapon from './mdl/weapon'

function App() {

  const defaultCharacter = require('./conf/defaultChar.json')

  const config = require('./conf/config.json')

  const tpProfessions = {
    1: 6,
    2: 6,
    3: 10,
    4: 8,
    5: 6,
    6: 8,
    7: 4
  }

  const skillLevel = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 5,
    7: 6,
    8: 6,
    9: 7,
    10: 7,
    11: 8,
    12: 8,
    13: 9,
    14: 9
  }

  const [characterId, setCharacterId] = useState(config.currentCharacter);
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState(defaultCharacter.characterDetails);
  const [characterWeaponSkills, setCharacterWeaponSkills] = useState([]);
  const [weapons, setWeapons] = useState([]);
  const [armor, setArmor] = useState(defaultCharacter.armor);
  const [items, setItems] = useState(defaultCharacter.items);
  const [healingItems, setHealingItems] = useState([])

  // Get character from db
  useEffect(() => {
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

    const getAttributeBonus = (attributeValue) => {
      return attributeBonus[attributeValue]
    }

    const getCharacters = async () => {
      const charactersFromServer = await fetchCharacters()
      setCharacters(charactersFromServer);
    }
    const getCharacter = async () => {
      // Fetch Character
      const characterFromServer = await fetchCharacter(characterId)
      setCharacter(characterFromServer);

      // Fetch Weapon Skills
      const characterWeaponSkillsFromServer = await fetchCharacterWeaponSkills(characterId);
      setCharacterWeaponSkills(characterWeaponSkillsFromServer);

      // Fetch Weapons
      const calculateFightBonus = (skillLevel, attribute) => {
        if(skillLevel === 0) return -2;
        switch (attribute) {
          case 1:
            return getAttributeBonus(characterFromServer.dexterity) + skillLevel;
          case 2:
            return getAttributeBonus(characterFromServer.strength) + skillLevel;
          default:
            return getAttributeBonus(Math.max(characterFromServer.dexterity, characterFromServer.strength)) + skillLevel;
        }
      }

      const weaponsFromServer = await fetchWeapons(characterId)

      let weaponArr = [];
      weaponsFromServer.forEach(weapon => {
        // Find Skill Level
        let weaponSkillLevel = 
            characterWeaponSkillsFromServer.find((object) => 
            object.weapon_group === weapon.weapon_group_id);
        try {
          weaponSkillLevel = weaponSkillLevel.weapon_skills;
        } catch (e) {
          weaponSkillLevel = 0;
        }
        weaponArr.push(new Weapon(weapon.id, weapon.name, weapon.weapon_group_id, weapon.weapon_group,calculateFightBonus(weaponSkillLevel, weapon.attribute), getAttributeBonus(characterFromServer.dexterity) + weapon.initiative, weapon.initiative, weapon.atb, weapon.dfb, weapon.damage, weapon.description));
      });
      setWeapons(weaponArr);
    }
    const getArmor = async () => {
      const armorFromServer = await fetchArmor(characterId);
      setArmor(armorFromServer);
    }
    const getItems = async () => {
      const itemsFromServer = await fetchItems(characterId);
      setItems(itemsFromServer);
    }
    const getHealingItems = async () => {
      const healingItemsFromServer = await fetchHealingItems(characterId);
      setHealingItems(healingItemsFromServer);
    }
    
    getCharacters();
    getCharacter();
    getArmor();
    getItems();
    getHealingItems();
  }, [characterId]);

  // Update character in db
  useEffect(() => {
    const postCharacter = async () => {
      await window.api.updateCharacter(character);
    }
    const postWallet = async () => {
      await window.api.updateWallet(character);
    }

    postCharacter();
    postWallet();
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

  // Fetch Character Weapon Details
  const fetchCharacterWeaponSkills = async (id) => {
    const res = await window.api.getCharacterWeaponSkills(id);
    return res
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

  // Fetch Items
  const fetchItems = async (id) => {
    const res = await window.api.getItems(id);
    return res;
  }

  const fetchHealingItems = async (id) => {
    const res = await window.api.getHealingItems(id);
    return res;
  }

  const [isExpanded, setIsExpanded] = useState(true);
  const onExpand = () => setIsExpanded((expanded) => !expanded);

  const [optionsActive, setOptionsActive] = useState(false);
  const onActiveOptions = () => setOptionsActive((active) => !active);

  let backgroundImage;
  if(character.character_background !== undefined) backgroundImage = require('./res/background-illustration-' + character.character_background + '.jpg');
  else backgroundImage = require('./res/background-illustration-' + 1 + '.jpg');

  return (
    <HashRouter>
      <div className={!isExpanded ? "h-screen overflow-y-auto overflow-x-hidden scrollbar scrollbar-y flex flex-row ml-0 small:ml-0 transition-spacing duration-300" : "duration-300 h-screen overflow-y-auto overflow-x-hidden scrollbar scrollbar-y flex flex-row ml-0 small:ml-[330px] transition-spacing" }>
        <div className='absolute top-[25px] bg-background-dark backdrop-blur-md pl-[20px] pr-[10px] py-[10px] left-0 z-40 flex flex-row border-r border-y border-current-line cursor-pointer' onClick={onExpand}>
          <ReactSVG src={FeatherIcon} className='fill-cyan h-6 w-6'/>
          <ReactSVG src={CollapseIcon} className='fill-foreground rotate-180'/>
        </div>
        <Sidenav characters={characters} character={character} isExpanded={isExpanded} onExpand={onExpand} setCharacterId={setCharacterId} onActiveOptions={onActiveOptions}/>
        <div className='max-w-full flex justify-center flex-grow relative'>
          <div className={optionsActive ? 'fixed left-0 top-0 z-[49] flex justify-center items-center w-full h-full visible' : 'fixed left-0 top-0 z-[49] justify-center items-center w-full h-full hidden'}>
            <Options onActiveOptions={onActiveOptions}/>
            <div className='fixed z-[48] h-full w-full left-0 bg-background-very-dark opacity-70 top-0 cursor-pointer' onClick={onActiveOptions}/>
          </div>
          <div className="w-screen h-screen bg-cover fixed top-0 -z-10 right-0" style={{backgroundImage: `linear-gradient(to bottom, rgba(25, 27, 49, 0.4), rgba(25, 27, 49, 1)), url(${backgroundImage})`}}/>
          <Routes>
            <Route path="/" element={<Dashboard character={character} setCharacter={setCharacter} weapons={weapons} armor={armor} tpProfessions={tpProfessions} skillLevel={skillLevel}/>}/>
            <Route path="/backpack" element={<Backpack character={character} setCharacter={setCharacter} weapons={weapons} armor={armor} items={items} healingItems={healingItems}/>}/>
            <Route path="/leveling" element={<Leveling/>}/>
            <Route path="/grimoire" element={<Grimoire/>}/>
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
