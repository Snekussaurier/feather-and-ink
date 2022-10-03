import ScrollContainer from "react-indiana-drag-scroll";
import Tag from "./Tag.js";
import WeaponCard from "./WeaponCard.js";
import { ReactSVG } from "react-svg";
import ArmorIcon from "../res/closed-barbute.svg";
import HealthIcon from "../res/health-normal.svg";
import ManaIcon from "../res/concentration-orb.svg";
import CollapseIcon from "../res/caret-left.svg"

function Dashboard(params) {

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

    const activeWeapons = () => {
        let activeWeaponsArr;
        if(params.weapons){
            activeWeaponsArr = params.weapons.filter((weapon) => weapon.active === 1)
        }
        return activeWeaponsArr;
    }

    return (
        <div className="flex flex-col gap-4 h-fit w-fit max-w-full pt-24 pb-12 px-5">
            <div className="absolute top-0 h-[calc(40vw+48px)] max-h-[calc(800px+48px)] min-h-[calc(500px+48px)] w-full left-0 bg-dashboard bg-cover">

            </div>
            <div className="flex flex-nowrap overflow-x-hidden scrollbar scrollbar-x gap-12 z-10">
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
                <div className="bg-cover h-[40vw] w-[25vw] min-w-[313px] min-h-[500px] max-h-[800px] max-w-[500px] relative">
                    <div className="bg-[url('../src/res/FancyFirion.png')] bg-cover h-full"/>
                </div>
                <div className="flex flex-col w-64 max-h-[368px] p-2">
                        <h1 className=" text-6xl">{params.character ? params.character.name : '{null}'}</h1>
                        <div className="flex flex-row justify-between items-end">
                            <h2>Level {levelCalculation()}</h2>
                            <p className=" text-cyan">{params.character ? params.character.current_exp : '{null}'}/{xpToNextLevel()}</p> 
                        </div>
                        <div className=" flex p-1 w-full bg-background-very-dark">
                            <div className=" flex h-2 w-7/12 bg-cyan">
                            </div>
                        </div>
                        <table className="table-fixed mt-4 backdrop-blur-md">
                            <tbody>
                                <tr>
                                <td>Race</td>
                                <td>{params.character ? params.character.race : '{null}'}</td>
                                </tr>
                                <tr>
                                <td>Profession</td>
                                <td>{params.character ? params.character.profession : '{null}'}</td>
                                </tr>
                                <tr>
                                <td>Height</td>
                                <td>{params.character ? params.character.height + ' cm' : '{null}'}</td>
                                </tr>
                                <tr>
                                <td>Weight</td>
                                <td>{params.character ? params.character.weight + ' kg' : '{null}'}</td>
                                </tr>
                                <tr>
                                <td>Age</td>
                                <td>171</td>
                                </tr>
                            </tbody>
                        </table>
                </div>
            </div>
            <h1 className="text-foreground-highlight text-2xl">Weapons</h1>
            <div className="flex flex-nowrap flex-none overflow-x-auto gap-4 scrollbar scrollbar-x">
                <div className=" bg-background-very-dark bg-cover flex-none h-[400px] w-72 border-2 border-current-line"/>
                <div className=" bg-background-very-dark bg-cover flex-none h-[400px] w-72 border-2 border-current-line"/>
            </div>
        </div>
    );
}

export default Dashboard;