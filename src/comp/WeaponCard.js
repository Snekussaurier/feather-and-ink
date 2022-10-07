import WeaponTag from "./WeaponTag";

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
        <div className="h-[370px] min-w-[270px] flex-grow bg-background-very-dark border border-pink transition-all overflow-hidden">
            <div className="bg-pink p-2 select-none cursor-pointer">
                <h2 className="text-background-very-dark">{params.weapon.name}</h2> 
                <h3 className="text-background-very-dark">{params.weapon.weapon_group}</h3>
            </div>
                <div className="flex flex-col p-2 w-full">
                    <div className="grid grid-cols-2 grid-flow-row-dense justify-between w-full">
                        <h3>Initiative</h3>
                        <h2 className="text-right">+2</h2>
                        <h3>Kampfbonus</h3>
                        <h2 className="text-right">+3</h2>
                        <h3>Angriffsbonus</h3>
                        <h2 className="text-right">{getPrefix(params.weapon.atb)}</h2>
                        <h3>Defensivbonus</h3>
                        <h2 className="text-right">0</h2>
                        <h3>Schaden</h3>
                        <h2 className="text-right">{getPrefix(params.weapon.damage)}</h2>
                    </div>
                    <hr className=" border-pink my-2"/>
                    <h2>Info</h2>
                    <h3>
                        {params.weapon.description}
                    </h3>
                </div>
        </div>
    );
}

export default WeaponCard;