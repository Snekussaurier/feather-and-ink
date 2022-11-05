import {useState, React} from "react";
import { ReactSVG } from "react-svg";
import SidenavButton from "./SidenavButton";
import DashboardIcon from "../res/newspaper.svg";
import BackpackIcon from "../res/backpack.svg";
import LevelingIcon from "../res/analytics.svg";
import SettingsIcon from "../res/settings.svg";
import FeatherIcon from "../res/quill-ink.svg";
import CollapseIcon from "../res/caret-left.svg";
import CharacterIcon from "../res/users.svg";
import CloseIcon from "../res/close.svg";
import AddCharacterIcon from "../res/user-add.svg";
import CharacterSelect from "./CharacterSelect"
import BookIcon from "../res/book-open.svg"

function Sidenav(params) {

  const [characterMenuIsExpanded, setCharacterMenuIsExpanded] = useState(false);
  const onExpandCharacterMenu = () => setCharacterMenuIsExpanded((expanded) => !expanded);

  return (
    <div className={!params.isExpanded ? 'h-screen fixed left-[-320px] top-0 bg-background-dark w-[320px] flex flex-col items-center border-r border-current-line transition-position z-50 duration-300 p-5' : 'p-5 duration-300 h-screen fixed left-0 top-0 bg-background-dark w-[320px] flex flex-col items-center border-r border-current-line transition-position z-50'}>
        <div className="flex flex-row items-center justify-start self-stretch gap-2 pb-5">
          <ReactSVG src={FeatherIcon} className='fill-foreground'/>
          <h1 className="text-xl text-foreground">
              Feather&Ink
          </h1>
          <h1 className="text-base text-foreground opacity-10">
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
            <h1 className=" text-foreground mb-4">Characters</h1>
            <div className="overflow-y-auto flex flex-col gap-4 scrollbar scrollbar-y" onChange={event => params.setCharacterId(event.target.value)}>
                {params.characters ? params.characters.map((character) => <CharacterSelect key={character.id} character={character}/>) : <div/>}
            </div>
            <div className="flex-grow"/>
            <div className="bg-current-line border border-foreground-highlight p-4 hover:bg-background-very-dark cursor-pointer transition-all flex flex-row justify-center gap-4">
              <ReactSVG src={AddCharacterIcon} className='fill-foreground'/>
              <h2>New Character</h2>
            </div>
          </div>
          <div className=" flex flex-col grow items-center w-full gap-3">
            <SidenavButton icon={DashboardIcon} label="Dashbord" navigation="/"/>
            <SidenavButton icon={BackpackIcon} label="Backpack" navigation="/backpack"/>
            <SidenavButton icon={LevelingIcon} label="Leveling" navigation="/leveling"/>
            <SidenavButton icon={BookIcon} label="Grimoire" navigation="/grimoire"/>
          </div>
          <p className="opacity-10 text-center">Version 0.1.1-alpha</p>
        </div>
    </div>
  );
}

export default Sidenav;