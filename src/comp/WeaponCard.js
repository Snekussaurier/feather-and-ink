import WeaponTag from "./WeaponTag";

function WeaponCard(params) {
    return(                
        <div className="h-[370px] max-w-[260px] rounded-md bg-gradient-to-br p-[2px] from-yellow to-pink">
            <div className="flex flex-col justify-between h-full rounded-md bg-background-dark p-5 relative">
                <div className=" flex flex-row gap-3 items-center">
                    <div className=" bg-background flex items-center justify-center p-[3px] rounded-3xl min-h-[36px] min-w-[36px]">
                        <h3 className=" font-bold text-2xl bg-gradient-to-br from-yellow to-pink bg-clip-text text-transparent">
                            #
                        </h3>
                    </div>
                    <h3 className=" font-bold text-2xl bg-gradient-to-br from-yellow to-pink bg-clip-text text-transparent">
                            {params.character ? params.character.name : '{null}'}
                    </h3>
                </div>
                <p className="flex-grow text-foreground">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </p>    
                <div className=" flex flex-row items-start gap-2 flex-wrap">
                    <WeaponTag text={params.character ? params.character.weight + ' kg' : '{null}'}/>
                    <WeaponTag text={params.character ? params.character.height + ' cm' : '{null}'}/>
                    <WeaponTag text='Bard'/>
                    <WeaponTag text='Human'/>
                </div>
            </div>
        </div>
    );
}

export default WeaponCard;