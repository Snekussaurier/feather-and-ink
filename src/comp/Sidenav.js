import {useEffect, useState, React} from "react";
import { ReactSVG } from "react-svg";
import { NavLink } from "react-router-dom";
import SidenavButton from "./SidenavButton";
import BackpackIcon from "../res/clipboard-list.svg";
import LevelingIcon from "../res/bar-chart-alt.svg";
import SettingsIcon from "../res/settings.svg";
import FeatherIcon from "../res/quill-ink.svg";
import CollapseIcon from "../res/caret-left.svg";
import BookIcon from "../res/book.svg";
import MapsIcon from "../res/map.svg";
import CharacterIcon from "../res/users.svg";
import CloseIcon from "../res/close.svg";
import AddCharacterIcon from "../res/user-add.svg";
import ProgressBar from "./ProgressBar";
import CharacterSelect from "./CharacterSelect"

function Sidenav(params) {

  const levelCalculation = () => {
    if(params.character){
        if (params.character.current_exp >= 1000) return Math.floor((-1000+Math.sqrt(8000*params.character.current_exp+17000000))/2000);
    }
    return 1;
  }

  const [characterMenuIsExpanded, setCharacterMenuIsExpanded] = useState(false);
  const onExpandCharacterMenu = () => setCharacterMenuIsExpanded((expanded) => !expanded);

  return (
    <div className={params.isExpanded ? 'h-screen fixed left-[-320px] top-0 bg-background-dark w-[320px] flex flex-col items-center border-r border-current-line transition-position z-50 duration-300' : ' duration-300 h-screen fixed left-0 top-0 bg-background-dark w-[320px] flex flex-col items-center border-r border-current-line transition-position z-50'}>
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
            <div className="overflow-y-auto flex flex-col gap-4 px-4 scrollbar scrollbar-y">
              {params.characters ? params.characters.map((character) => <CharacterSelect character={character}/>) : <div/>}
            </div>
            <div className="flex-grow"/>
            <div className="bg-current-line border border-foreground-highlight m-4 p-4 hover:bg-background-very-dark cursor-pointer transition-all flex flex-row justify-center gap-4">
              <ReactSVG src={AddCharacterIcon} className='fill-foreground'/>
              <h2>New Character</h2>
            </div>
          </div>
          <NavLink className={({isActive}) => isActive ? 'w-full px-5 py-4 bg-background-dark relative transition-all grayscale-0' : 'w-full px-5 py-4 bg-background-dark relative hover:opacity-90 transition-all grayscale'} to="/">
            <div className=" h-full w-full bg-landscape bg-cover bg-no-repeat absolute top-0 left-0 z-0"/>
            <div className="z-10 relative">
              <div className="flex">
                <h1 className="text-base text-foreground-highlight">
                  {params.character ? params.character.name : '{null}'}
                </h1>
                <div className="flex-1"/>
                <h1 className="text-base text-foreground-highlight">
                  {levelCalculation()}
                </h1>
              </div>
              <ProgressBar progress={50}/>
            </div>
          </NavLink>
          <div className=" flex flex-col items-center grow w-full">
            <SidenavButton icon={BackpackIcon} label="Backpack" navigation="/backpack"/>
            <SidenavButton icon={LevelingIcon} label="Leveling" navigation="/leveling"/>
            <SidenavButton icon={BookIcon} label="Grimoire" navigation="/grimoire"/>
            <SidenavButton icon={MapsIcon} label="Karten" navigation="/maps"/>
          </div>
        </div>

        <p className="text-s text-foreground m-2 font-bold font-mono">v0.0.1</p>
    </div>
  );
}

export default Sidenav;