import React from "react";
import { ReactSVG } from "react-svg";
import { NavLink } from "react-router-dom";
import SidenavButton from "./SidenavButton";
import BackpackIcon from "../res/clipboard-list.svg"
import LevelingIcon from "../res/bar-chart-alt.svg"
import SettingsIcon from "../res/settings.svg"
import FeatherIcon from "../res/quill-ink.svg"
import CollapseIcon from "../res/caret-left.svg"
import ProgressBar from "./ProgressBar";

function Sidenav(params) {

  const levelCalculation = () => {
    if(params.character){
        if (params.character.current_exp >= 1000) return Math.floor((-1000+Math.sqrt(8000*params.character.current_exp+17000000))/2000);
    }
    return 1;
  }

  return (
    <div className={'h-screen fixed left-[-300px] top-0 bg-background-very-dark w-[300px] flex flex-col items-center border-r border-current-line small:left-0 transition-position z-50'}>
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
            <ReactSVG src={SettingsIcon} className='fill-foreground'/>
          </button>
          <button onClick={params.onExpand()}>
            <ReactSVG src={CollapseIcon} className='fill-foreground'/>
          </button>
        </div>
        <NavLink className={({isActive}) => isActive ? 'w-full px-5 py-4 bg-background-dark relative transition-all grayscale-0' : 'w-full px-5 py-4 bg-background-very-dark relative hover:opacity-90 transition-all grayscale'} to="/">
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
          <SidenavButton icon={SettingsIcon} label="Grimoire" navigation="/grimoire"/>
        </div>
        <p className="text-xs text-foreground font-mono">v0.0.1</p>
    </div>
  );
}

export default Sidenav;