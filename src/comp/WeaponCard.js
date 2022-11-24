import { ReactSVG } from "react-svg";

function WeaponCard(params) {

    const getPrefix = (value) => {
        if(value > 0){
            return '+' + value;
        }    
        else{
            return value;
        }
    }

    return(                
        <div className="min-w-[300px] max-w-[380px] flex-grow bg-current-line border-2 border-current-line transition-all flex flex-col">
            <div className="bg-current-line p-2">
                <h2 className="text-foreground-highlight text-2xl">{params.weapon.name}</h2> 
            </div>
            <div className="bg-background p-2 flex flex-col relative overflow-hidden">
                <h2>{params.weapon.weaponGroupName}</h2> 
                <div className="h-5"/>
                <h3>
                    Kampfbonus
                </h3>
                <h2 className='text-4xl text-red'>
                    {getPrefix(params.weapon.fightBonus)}
                </h2>
                <ReactSVG src={require("../res/wpn_grps/weapon-group-" + params.weapon.weaponGroup + ".svg")} className='fill-red absolute h-36 w-36 -right-4 -bottom-8'/>
            </div>
            <div className="flex flex-col p-2 w-full bg-background-very-dark flex-grow">
                <div className="grid grid-cols-2 grid-flow-row-dense justify-between w-full">
                    <h3>Initiative</h3>
                    <h2 className="text-right"><span className="text-cyan">({getPrefix(params.weapon.coreInitiative)})</span> {getPrefix(params.weapon.initiative)}</h2>
                    <h3>Schaden</h3>
                    <h2 className="text-right">{getPrefix(params.weapon.damage)}</h2>
                    <h3>Angriffsbonus</h3>
                    <h2 className="text-right">{getPrefix(params.weapon.attackBonus)}</h2>
                    <h3>Defensivbonus</h3>
                    <h2 className="text-right">{getPrefix(params.weapon.defenseBonus)}</h2>   
                </div>
                <hr className=" border-current-line my-2"/>
                <h3 className="italic">
                    {params.weapon.description}
                </h3>
            </div>
        </div>
    );
}

export default WeaponCard;