import WeaponCard from "./WeaponCard.js";
import EffectCard from "./EffectCard.js";
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

    const xpToNextLevel = () => {
        if (params.character.current_exp >= 1000) return 500*(Math.pow(levelCalculation() + 1,2) + (levelCalculation() + 1) - 4);
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

    const getAttributeBonus = (attributeValue) => {
        return params.attributeBonus[attributeValue]
    }

    return (
        <div className="flex flex-col gap-4 h-fit pt-24 pb-12 px-5 max-w-[960px] min-w-[910px] w-full z-10">
            <div className="flex scrollbar gap-10 z-10">
                <div className="flex flex-col gap-4">
                    <div className="backdrop-blur-md bg-[#ffffff0a] h-28 w-64 border border-foreground-highlight p-5 flex flex-row items-center justify-between">
                        <ReactSVG src={HealthIcon}/>
                        <h1 className=" text-foreground font-sans text-5xl">{params.character.current_tp}</h1>
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
                    <div className=" backdrop-blur-md bg-[#ffffff0a] h-28 w-64 border border-foreground-highlight p-5 flex flex-row items-center justify-between">
                        <ReactSVG src={ManaIcon}/>
                        <h1 className=" text-foreground font-sans text-5xl">{params.character.current_mp}</h1>
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
                    <div className="backdrop-blur-md bg-[#ffffff0a] h-28 w-64 border border-foreground-highlight fill-foreground p-5 flex flex-row items-center justify-between">
                        <ReactSVG src={ArmorIcon}/>
                        <h1 className=" text-foreground font-sans text-5xl">{calculateArmor()}</h1>
                        <div className=" w-7 h-7"/>
                    </div>
                </div>
                <div className="bg-cover flex-grow aspect-image">
                    <img src={`data:image/png;base64,${params.character.character_image}`} alt=""/>
                </div>
                <div className="flex flex-col min-w-[256px] flex-grow p-2">
                    <h1 className=" text-6xl">{params.character.name}</h1>
                    <div className="flex flex-row justify-between items-end">
                        <h2>Level {levelCalculation()}</h2>
                        <p className=" text-cyan">{params.character.current_exp}/{xpToNextLevel()}</p> 
                    </div>
                    <ProgressBar target={xpToNextLevel()} now={params.character.current_exp}/>
                    <table className="table-fixed mt-4 backdrop-blur-md bg-[#ffffff0a]">
                        <tbody className="">
                            <tr>
                            <td><div className="flex flex-row gap-2 items-center"><ReactSVG src={RaceIcon} className=" fill-[#FFFFFFAA]"/>Race</div></td>
                            <td className="text-right">{params.character.race}</td>
                            </tr>
                            <tr>
                            <td><div className="flex flex-row gap-2 items-center h-5 w-5"><ReactSVG src={ProfessionIcon} className=" fill-[#FFFFFFAA]"/>Profession</div></td>
                            <td className="text-right">{params.character.profession}</td>
                            </tr>
                            <tr>
                            <td><div className="flex flex-row gap-2 items-center"><ReactSVG src={HeightIcon} className=" fill-[#FFFFFFAA]"/>Height</div></td>
                            <td className="text-right">{params.character.height} cm</td>
                            </tr>
                            <tr>
                            <td><div className="flex flex-row gap-2 items-center"><ReactSVG src={WeightIcon} className=" fill-[#FFFFFFAA]"/>Weight</div></td>
                            <td className="text-right">{params.character.weight} kg</td>
                            </tr>
                            <tr>
                            <td><div className="flex flex-row gap-2 items-center"><ReactSVG src={AgeIcon} className=" fill-[#FFFFFFAA]"/>Age</div></td>
                            <td className="text-right">{params.character.age}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <h1 className="text-foreground text-2xl">Weapons</h1>
            <div className="grid grid-cols-3 gap-4 justify-between">
                {params.weapons.length > 0 ? params.weapons.map((weapon) => <WeaponCard key={weapon.id} weapon={weapon} initiative={getAttributeBonus(params.character.dexterity)}/>) : <h1 className=" text-current-line">No weapons</h1>}
            </div>
            <h1 className="text-foreground text-2xl">Armor</h1>
            <div className="grid grid-cols-3 gap-4 justify-between">
                {params.armor.length > 0 ? params.armor.map((armor) => <ArmorCard key={armor.id} armor={armor}/>) : <h1 className=" text-background-dark">No armor</h1>}
            </div>
            <h1 className="text-foreground text-2xl">Effects</h1>
            <div className="grid grid-cols-3 gap-4 justify-between">
                {params.character.race_id === 4 ? <EffectCard/> : <></>}
                {params.character.profession_id === 4 ? <EffectCard/> : <></>}
            </div>
        </div>
    );
}

export default Dashboard;