import {useEffect, useState, React} from "react";
import { ReactSVG } from "react-svg";
import { NavLink } from "react-router-dom";
import SidenavButton from "./SidenavButton";
import DashboardIcon from "../res/newspaper.svg";
import BackpackIcon from "../res/backpack.svg";
import LevelingIcon from "../res/analytics.svg";
import SettingsIcon from "../res/settings.svg";
import FeatherIcon from "../res/quill-ink.svg";
import CollapseIcon from "../res/caret-left.svg";
import BookIcon from "../res/book-open.svg";
import CharacterIcon from "../res/users.svg";
import CloseIcon from "../res/close.svg";
import AddCharacterIcon from "../res/user-add.svg";
import CharacterSelect from "./CharacterSelect"
import ProgressBar from "./ProgressBar";

function Sidenav(params) {

  let backgroundImage;
  if(params.character.character_background !== undefined) backgroundImage = require('../res/background-illustration-' + params.character.character_background + '.jpg');
  else backgroundImage = require('../res/background-illustration-' + 1 + '.jpg');

  const levelCalculation = () => {
    if (params.character.current_exp >= 1000) return Math.floor((-1000+Math.sqrt(8000*params.character.current_exp+17000000))/2000);
    return 1;
  }
  const xpToNextLevel = () => {
    if (params.character.current_exp >= 1000) return 500*(Math.pow(levelCalculation() + 1,2) + (levelCalculation() + 1) - 4);
    return 1000;
}

  const [characterMenuIsExpanded, setCharacterMenuIsExpanded] = useState(false);
  const onExpandCharacterMenu = () => setCharacterMenuIsExpanded((expanded) => !expanded);

  return (
    <div className={!params.isExpanded ? 'h-screen fixed left-[-320px] top-0 bg-background-dark w-[320px] flex flex-col items-center border-r border-current-line transition-position z-50 duration-300' : ' duration-300 h-screen fixed left-0 top-0 bg-background-dark w-[320px] flex flex-col items-center border-r border-current-line transition-position z-50'}>
        <div className="flex flex-row items-center justify-start self-stretch gap-2 p-5">
          <ReactSVG src={FeatherIcon} className='fill-foreground'/>
          <h1 className="text-xl text-foreground">
              Feather&Ink
          </h1>
          <h1 className="text-base text-rose">
            α
          </h1>
          <div className="flex-1"/>
          <button>
            <ReactSVG src={!characterMenuIsExpanded ? CharacterIcon : CloseIcon} className='fill-foreground' onClick={onExpandCharacterMenu}/>
          </button>
          <button>
            <ReactSVG src={SettingsIcon} className='fill-foreground'/>
          </button>
          <button onClick={params.onExpand}>
            <ReactSVG src={CollapseIcon} className='fill-foreground'/>
          </button>
        </div>
        <div className="w-full flex flex-col flex-grow relative">
          <div className={characterMenuIsExpanded ? "h-full bg-background-dark w-full absolute top-0 left-0 z-[60] transition-all flex flex-col duration-300" : "h-0 bg-background-dark w-full absolute top-0 left-0 z-[60] overflow-hidden transition-all flex flex-col duration-150"}>
            <h1 className=" text-foreground mx-4 mb-4">Characters</h1>
            <div className="overflow-y-auto flex flex-col gap-4 px-4 scrollbar scrollbar-y" onChange={event => params.setCharacterId(event.target.value)}>
                {params.characters ? params.characters.map((character) => <CharacterSelect key={character.id} character={character}/>) : <div/>}
            </div>
            <div className="flex-grow"/>
            <div className="bg-current-line border border-foreground-highlight m-4 p-4 hover:bg-background-very-dark cursor-pointer transition-all flex flex-row justify-center gap-4">
              <ReactSVG src={AddCharacterIcon} className='fill-foreground'/>
              <h2>New Character</h2>
            </div>
          </div>
          <div className='w-full px-4 py-4 items-center bg-cover bg-background-dark relative transition-all grayscale-0' style={{backgroundImage: `linear-gradient(to right, rgba(14, 15, 33, 0), rgba(14, 15, 33, 0.75)), url(${backgroundImage})`}}>
            <div className=" h-full w-full flex flex-col">
              <div className="flex flex-row items-center">
                <h1>
                  {params.character.name}
                </h1>
                <div className="flex-1"/>
                <h1>
                    {levelCalculation()}
                </h1>
              </div>
              <ProgressBar target={xpToNextLevel()} now={params.character.current_exp}/>
            </div>
          </div>
          <div className=" flex flex-col items-center grow w-full">
            <SidenavButton icon={DashboardIcon} label="Dashbord" navigation="/"/>
            <SidenavButton icon={BackpackIcon} label="Backpack" navigation="/backpack"/>
            <SidenavButton icon={LevelingIcon} label="Leveling" navigation="/leveling"/>
            <SidenavButton icon={BookIcon} label="Grimoire" navigation="/grimoire"/>
          </div>
        </div>

        <p className="text-s text-foreground m-2 font-bold font-mono">v0.0.1</p>
    </div>
  );
}

export default Sidenav;