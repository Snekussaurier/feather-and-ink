import { ReactSVG } from "react-svg";

const getPrefix = (value) => {
    if(value > 0){
        return '+' + value;
    }    
    else{
        return value;
    }
}

function WeaponCard(params) {
    return(                
        <div className="min-w-[270px] flex-grow bg-background-very-dark border border-pink transition-all">
            <div className="bg-pink p-2">
                <h2 className="text-background-very-dark text-2xl">{params.weapon.name}</h2> 
            </div>
            <div className="bg-background p-2 flex flex-col relative overflow-hidden">
                <h2>{params.weapon.weapon_group}</h2> 
                <div className="h-5"/>
                <h3>
                    DMG
                </h3>
                <h2 className='text-4xl'>
                    {getPrefix(params.weapon.damage)}
                </h2>
                <ReactSVG src={require("../res/wpn_grps/weapon-group-" + params.weapon.weapon_group_id + ".svg")} className='fill-pink absolute h-36 w-36 -right-4 -bottom-8'/>
            </div>
            <div className="flex flex-col p-2 w-full">
                <div className="grid grid-cols-2 grid-flow-row-dense justify-between w-full">
                    <h3>Initiative</h3>
                    <h2 className="text-right"><span className="text-cyan">({getPrefix(params.weapon.initiative)})</span> {getPrefix(params.initiative + params.weapon.initiative)}</h2>
                    <h3>Kampfbonus</h3>
                    <h2 className="text-right">+3</h2>
                    <h3>Angriffsbonus</h3>
                    <h2 className="text-right">{getPrefix(params.weapon.atb)}</h2>
                    <h3>Defensivbonus</h3>
                    <h2 className="text-right">{getPrefix(params.weapon.dfb)}</h2>
                    
                </div>
                <hr className=" border-pink my-2"/>
                <h3 className="italic">
                    {params.weapon.description}
                </h3>
            </div>
        </div>
    );
}

export default WeaponCard;