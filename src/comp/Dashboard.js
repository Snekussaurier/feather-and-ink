import WeaponCard from "./WeaponCard.js";
import ArmorCard from "./ArmorCard.js";
import { ReactSVG } from "react-svg";
import ArmorIcon from "../res/closed-barbute.svg";
import HealthIcon from "../res/health-normal.svg";
import ManaIcon from "../res/concentration-orb.svg";
import CollapseIcon from "../res/caret-left.svg"
import ProgressBar from "./ProgressBar.js";
import RaceIcon from "../res/wolf-head.svg"
import ProfessionIcon from "../res/drink-me.svg"
import HeightIcon from "../res/vertical-flip.svg"
import WeightIcon from "../res/weight.svg"
import AgeIcon from "../res/abstract-017.svg"

function Dashboard(params) {
    // Update health
    const incrementHealth = () => {
        if(params.character.current_tp < (getAttributeBonus(params.character.constitution) + params.tpProfessions[params.character.profession_id]) * levelCalculation())
            params.setCharacter({ ...params.character, current_tp: params.character.current_tp + 1 });
    }
    const decrementHealth = () => {
        if (params.character.current_tp > 0) {
            params.setCharacter({ ...params.character, current_tp: params.character.current_tp - 1 });
        }
    }

    // Update mana
    const incrementMana = () => {
        if(params.character.current_mp < calculateMaxManaPoints())
            params.setCharacter({ ...params.character, current_mp: params.character.current_mp + 1 });
    }
    const decrementMana = () => {
        if (params.character.current_mp > 0) {
            params.setCharacter({ ...params.character, current_mp: params.character.current_mp - 1 });
        }
    }

    const levelCalculation = () => {
        if (params.character.current_exp >= 1000) return Math.floor((-1000+Math.sqrt(8000*params.character.current_exp+17000000))/2000);
        return 1;
    }

    const xpToNextLevel = (level) => {
        if (params.character.current_exp >= 1000) return 500*(Math.pow(level,2) + (level) - 4);
        return 1000;
    }

    const calculateArmor = () => {
        let armorValue = 5;
        if (params.armor.length > 0) {
            params.armor.forEach(element => {
                armorValue += element.value;
            });
        }
        // Check if character profession is priest
        if (params.character.profession_id === 4){
            armorValue += 1;
        }
        // Check if character race is dwarf
        if (params.character.race_id === 3){
            armorValue += 1;
        }
        return armorValue;
    }

    const calculateMaxManaPoints = () => {
        if (params.character.profession_id === 4) return (getAttributeBonus(params.character.charisma) + 3) * params.character.develop_magic;
        else return (getAttributeBonus(params.character.intelligence) + 3) * params.character.develop_magic;
    }

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

    return (
        <div className="flex flex-col gap-4 h-fit px-8 pt-24 pb-12 small:pl-5 max-w-[1400px] w-full z-10">
            <div className="flex gap-10 z-10 justify-between">
                <div className="flex flex-col gap-4">
                    <div className="backdrop-blur bg-[#ffffff0a] h-28 w-64 border border-foreground-highlight p-5 flex flex-row items-center justify-between">
                        <ReactSVG src={HealthIcon} className="fill-foreground"/>
                        <div className=" flex flex-row items-end gap-1">
                            <h1 className=" text-foreground font-sans text-5xl">{params.character.current_tp}</h1>
                            <h1 className=" text-[#FFFFFFAA] font-sans text-2xl">/</h1>
                            <h1 className=" text-[#FFFFFFAA] font-sans text-2xl">{(getAttributeBonus(params.character.constitution) + params.tpProfessions[params.character.profession_id]) * levelCalculation()}</h1>
                        </div>
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
                    <div className=" backdrop-blur bg-[#ffffff0a] h-28 w-64 border border-foreground-highlight p-5 flex flex-row items-center justify-between">
                        <ReactSVG src={ManaIcon} className="fill-foreground w-[42px]"/>
                        <div className=" flex flex-row items-end gap-1">
                            <h1 className=" text-foreground font-sans text-5xl">{params.character.current_mp}</h1>
                            <h1 className=" text-[#FFFFFFAA] font-sans text-2xl">/</h1>
                            <h1 className=" text-[#FFFFFFAA] font-sans text-2xl">{calculateMaxManaPoints()}</h1>
                        </div>
                        <div className="flex flex-col gap-2">
                            <button className="h-7 w-7 bg-background-very-dark border border-current-line" onClick={incrementMana}>
                                <ReactSVG src={CollapseIcon} className='fill-foreground rotate-90'/>
                            </button>
                            <hr className=" w-full border-foreground-highlight"/>
                            <button className="h-7 w-7 bg-background-very-dark border border-current-line rounded-f" onClick={decrementMana}>
                                <ReactSVG src={CollapseIcon} className='fill-foreground -rotate-90'/>
                            </button>
                        </div>
                    </div>
                    <div className="backdrop-blur bg-[#ffffff0a] h-28 w-64 border border-foreground-highlight fill-foreground p-5 flex flex-row items-center justify-between">
                        <ReactSVG src={ArmorIcon} className="fill-foreground w-[42px]"/>
                        <h1 className=" text-foreground font-sans text-5xl">{calculateArmor()}</h1>
                        <div className=" w-7 h-7"/>
                    </div>
                </div>
                <div className="bg-cover flex-grow aspect-image max-w-[320px]">
                    <img src={`data:image/png;base64,${params.character.character_image}`} alt=""/>
                </div>
                <div className="flex flex-col min-w-[256px] max-w-[256px] flex-grow p-2">
                    <h1 className=" text-6xl">{params.character.name}</h1>
                    <div className="flex flex-row justify-between items-end">
                        <h2>Level {levelCalculation()}</h2>
                        <p className=" text-blue">{params.character.current_exp}/{xpToNextLevel(levelCalculation() + 1)}</p> 
                    </div>
                    <ProgressBar target={xpToNextLevel(levelCalculation() + 1) - xpToNextLevel(levelCalculation())} now={params.character.current_exp - xpToNextLevel(levelCalculation())}/>
                    <table className="table-fixed mt-4 backdrop-blur">
                        <tbody className="">
                            <tr className="odd:bg-[#ffffff0a]">
                            <td><div className="flex flex-row gap-2 items-center"><ReactSVG src={RaceIcon} className=" fill-[#FFFFFFAA] "/>Race</div></td>
                            <td className="text-right">{params.character.race}</td>
                            </tr>
                            <tr className="odd:bg-[#ffffff0a]">
                            <td><div className="flex flex-row gap-2 items-center"><ReactSVG src={ProfessionIcon} className='fill-[#FFFFFFAA] h-5 w-5'/>Profession</div></td>
                            <td className="text-right">{params.character.profession}</td>
                            </tr>
                            <tr className="odd:bg-[#ffffff0a]">
                            <td><div className="flex flex-row gap-2 items-center"><ReactSVG src={HeightIcon} className=" fill-[#FFFFFFAA]"/>Height</div></td>
                            <td className="text-right">{params.character.height} cm</td>
                            </tr>
                            <tr className="odd:bg-[#ffffff0a]">
                            <td><div className="flex flex-row gap-2 items-center"><ReactSVG src={WeightIcon} className=" fill-[#FFFFFFAA]"/>Weight</div></td>
                            <td className="text-right">{params.character.weight} kg</td>
                            </tr>
                            <tr className="odd:bg-[#ffffff0a]">
                            <td><div className="flex flex-row gap-2 items-center"><ReactSVG src={AgeIcon} className=" fill-[#FFFFFFAA]"/>Age</div></td>
                            <td className="text-right">{params.character.age}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <h1 className="text-foreground text-2xl">Weapons</h1>
            <div className="grid grid-cols-dashboard gap-4 justify-between">
                {params.weapons.length > 0 ? params.weapons.map((weapon) => <WeaponCard key={weapon.id} weapon={weapon}/>) : <h1 className=" text-current-line">No weapons</h1>}
            </div>
            <h1 className="text-foreground text-2xl">Armor</h1>
            <div className="grid grid-cols-dashboard gap-4 justify-between">
                {params.armor.length > 0 ? params.armor.map((armor) => <ArmorCard key={armor.id} armor={armor}/>) : <h1 className=" text-current-line">No armor</h1>}
            </div>
            {/*<h1 className="text-foreground text-2xl">Effects</h1>
            <div className="grid grid-cols-3 gap-4 justify-between">
                {params.character.race_id === 4 ? <EffectCard/> : <></>}
                {params.character.profession_id === 4 ? <EffectCard/> : <></>}
            </div>*/}
        </div>
    );
}

export default Dashboard;