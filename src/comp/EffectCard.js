import EffectTag from "./EffectTag";

function EffectCard(params) {
    return(                
        <div className="h-[370px] w-[260px] min-w-[260px] rounded-md bg-gradient-to-br p-[2px] from-yellow to-pink relative">
            <div className="flex flex-col justify-between h-full rounded-md bg-background-dark p-5 relative gap-2">
                <div className=" flex flex-row gap-3 items-center">
                    <div className=" bg-background flex items-center justify-center p-[3px] rounded-3xl min-h-[36px] min-w-[36px]">
                        <h3 className=" font-bold text-2xl bg-gradient-to-br from-yellow to-pink bg-clip-text text-transparent">
                            #
                        </h3>
                    </div>
                    <h3 className=" font-bold text-2xl bg-gradient-to-br from-yellow to-pink bg-clip-text text-transparent">
                        {params.weapon.name}
                    </h3>
                </div>
                <p className="flex-grow text-foreground">
                    {params.weapon.description}
                </p>    
                <div className=" flex flex-row items-start gap-2 flex-wrap">
                    <EffectTag text={'DMG: ' + params.weapon.damage}/>
                </div>
            </div>
            <div  className="absolute bg-[#00000020] h-[calc(100%-8px)] w-[calc(100%-8px)] top-0 left-0 rounded-md p-5 opacity-0 hover:opacity-100 transition-opacity flex justify-end backdrop-blur-sm m-1">
                <button className=" h-9 text-base font-medium rounded-full text-foreground bg-[#ffffff40] hover:bg-red hover:text-background-dark transition-colors px-3" onClick={() => params.setWeaponInactive(params.weapon.id)}>
                    remove
                </button>
            </div>
        </div>
    );
}

export default EffectCard;