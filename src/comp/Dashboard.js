import WeaponCard from "./WeaponCard.js";
import EffectCard from "./EffectCard.js";
import { ReactSVG } from "react-svg";
import ArmorIcon from "../res/closed-barbute.svg";
import HealthIcon from "../res/health-normal.svg";
import ManaIcon from "../res/concentration-orb.svg";
import CollapseIcon from "../res/caret-left.svg"
import ProgressBar from "./ProgressBar.js";

function Dashboard(params) { 
    console.log(params)

    // Update health
    const incrementHealth = () => {
        params.setCharacter({ ...params.character, current_tp: params.character.current_tp + 1 });
    }
    const decrementHealth = () => {
        if (params.character.current_tp > 0) {
            params.setCharacter({ ...params.character, current_tp: params.character.current_tp - 1 });
        }
    }

    // Update mana
    const incrementMana = () => {
        params.setCharacter({ ...params.character, current_mp: params.character.current_mp + 1 });
    }
    const decrementMana = () => {
        if (params.character.current_mp > 0) {
            params.setCharacter({ ...params.character, current_mp: params.character.current_mp - 1 });
        }
    }

    const levelCalculation = () => {
        if(params.character){
            if (params.character.current_exp >= 1000) return Math.floor((-1000+Math.sqrt(8000*params.character.current_exp+17000000))/2000);
            else return 1;
        }
        return 1;
    }

    const xpToNextLevel = () => {
        if(params.character){
            if (params.character.current_exp >= 1000) return 500*(Math.pow(levelCalculation() + 1,2) + (levelCalculation() + 1) - 4);
        }
        return 1000;
    }

    return (
        <div className="flex flex-col gap-4 h-fit pt-24 pb-12 px-5 max-w-[960px] min-w-[910px] w-full z-10">
            <div className="absolute top-0 h-[calc(40vw+48px)] max-h-[calc(600px+48px)] min-h-[calc(500px+48px)] w-full left-0 bg-dashboard bg-cover -z-10"/>
            <div className="flex scrollbar gap-10 z-10">
                <div className="flex flex-col gap-4">
                    <div className="backdrop-blur-md h-28 w-64 border border-foreground-highlight p-5 flex flex-row items-center justify-between">
                        <ReactSVG src={HealthIcon}/>
                        <h1 className=" text-foreground font-sans text-5xl">{params.character ? params.character.current_tp : '{null}'}</h1>
                        <div className="flex flex-col gap-2">
                            <button className="h-7 w-7 bg-background-very-dark border border-current-line" onClick={incrementHealth}>
                                <ReactSVG src={CollapseIcon} className='fill-foreground rotate-90'/>
                            </button>
                            <hr className=" w-full border-foreground-highlight"/>
                            <button className="h-7 w-7 bg-background-very-dark border border-current-line" onClick={decrementHealth}>
                                <ReactSVG src={CollapseIcon} className='fill-foreground -rotate-90'/>
                            </button>
                        </div>
                    </div>
                    <div className=" backdrop-blur-md h-28 w-64 border border-foreground-highlight p-5 flex flex-row items-center justify-between">
                        <ReactSVG src={ManaIcon}/>
                        <h1 className=" text-foreground font-sans text-5xl">{params.character ? params.character.current_mp : '{null}'}</h1>
                        <div className="flex flex-col gap-2">
                            <button className="h-7 w-7 bg-background-very-dark border border-current-line" onClick={incrementMana}>
                                <ReactSVG src={CollapseIcon} className='fill-foreground rotate-90'/>
                            </button>
                            <hr className=" w-full border-foreground-highlight"/>
                            <button className="h-7 w-7 bg-background-very-dark border border-current-line" onClick={decrementMana}>
                                <ReactSVG src={CollapseIcon} className='fill-foreground -rotate-90'/>
                            </button>
                        </div>
                    </div>
                    <div className="backdrop-blur-md h-28 w-64 border border-foreground-highlight p-5 flex flex-row items-center justify-between">
                        <ReactSVG src={ArmorIcon}/>
                        <h1 className=" text-foreground font-sans text-5xl">7.25</h1>
                        <div className=" w-7 h-7"/>
                    </div>
                </div>
                <div className="bg-[url('../src/res/FancyFirion.png')] bg-cover flex-grow aspect-image"/>
                <div className="flex flex-col w-64 max-h-[368px] p-2">
                        <h1 className=" text-6xl">{params.character ? params.character.name : '{null}'}</h1>
                        <div className="flex flex-row justify-between items-end">
                            <h2>Level {levelCalculation()}</h2>
                            <p className=" text-cyan">{params.character ? params.character.current_exp : '{null}'}/{xpToNextLevel()}</p> 
                        </div>
                        <ProgressBar/>
                        <table className="table-fixed mt-4 backdrop-blur-md">
                            <tbody>
                                <tr>
                                <td>Race</td>
                                <td className="text-right">{params.character ? params.character.race : '{null}'}</td>
                                </tr>
                                <tr>
                                <td>Profession</td>
                                <td className="text-right">{params.character ? params.character.profession : '{null}'}</td>
                                </tr>
                                <tr>
                                <td>Height</td>
                                <td className="text-right">{params.character ? params.character.height + ' cm' : '{null}'}</td>
                                </tr>
                                <tr>
                                <td>Weight</td>
                                <td className="text-right">{params.character ? params.character.weight + ' kg' : '{null}'}</td>
                                </tr>
                                <tr>
                                <td>Age</td>
                                <td className="text-right">171</td>
                                </tr>
                            </tbody>
                        </table>
                </div>
            </div>
            <h1 className="text-foreground text-2xl">Weapons</h1>
            <div className="grid grid-cols-3 gap-4 justify-between">
                {params.weapons ? params.weapons.map((weapon) => <WeaponCard key={weapon.id} weapon={weapon}/>) : <h1>HELLO</h1>}
            </div>
            <h1 className="text-foreground text-2xl">Effects</h1>
            <div className="grid grid-cols-3 gap-4 justify-between">
                <EffectCard/>
            </div>
            <h1 className="text-foreground text-2xl">Armor</h1>
            <div className="grid grid-cols-3 gap-4 justify-between">
                <div className="h-[370px] min-w-[270px] flex-grow bg-background-very-dark border border-green">
                    <div className="bg-green p-2"><h2 className="text-background-very-dark">Test</h2></div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;