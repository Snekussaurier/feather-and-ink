import ScrollContainer from "react-indiana-drag-scroll";
import AddWeaponForm from "./AddWeaponForm.js";
import Tag from "./Tag.js";
import WeaponCard from "./WeaponCard.js";

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

    const activeWeapons = () => {
        let activeWeaponsArr;
        if(params.weapons){
            activeWeaponsArr = params.weapons.filter((weapon) => weapon.active === 1)
        }
        return activeWeaponsArr;
    }

    return (
        <div className="flex flex-col gap-5 p-9 items-start relative">
            <div className="border-b-4 border-purple pb-2">
                <h1 className=" text-4xl text-foreground font-semibold">Dashboard</h1>
            </div>
            <h3 className=" text-foreground font-medium">CHARACTER CARDS</h3>
            <ScrollContainer className="overflow-x-scroll overflow-y-hidden w-[calc(100%+72px)] flex flex-row items-start gap-4 mx-[-36px] px-9">
                <div className="h-[370px] min-w-[260px] rounded-md bg-gradient-to-br p-[2px] from-purple to-cyan relative">
                    <div className="flex flex-col justify-between h-full rounded-md bg-background-dark p-5 relative">
                        <div className=" flex flex-row gap-3 items-center">
                            <div className=" bg-background flex items-center justify-center p-[3px] rounded-3xl min-h-[36px] min-w-[36px]">
                                <h3 className=" font-bold text-2xl bg-gradient-to-br from-purple to-cyan bg-clip-text text-transparent">
                                    {levelCalculation()}
                                </h3>
                            </div>
                            <h3 className=" font-bold text-2xl bg-gradient-to-br from-purple to-cyan bg-clip-text text-transparent">
                                    {params.character ? params.character.name : '{null}'}
                            </h3>
                        </div>
                        <div className=" flex flex-row items-start gap-2 flex-wrap">
                         <Tag text={params.character ? params.character.weight + ' kg' : '{null}'}/>
                         <Tag text={params.character ? params.character.height + ' cm' : '{null}'}/>
                         <Tag text='Bard'/>
                         <Tag text='Human'/>
                        </div>
                    </div>
                    <div  className="absolute bg-[#00000020] h-[calc(100%-4px)] w-[calc(100%-4px)] top-0 left-0 rounded-md p-5 opacity-0 hover:opacity-100 transition-opacity flex justify-end backdrop-blur-sm m-[2px]" >
                        <button className=" h-9 text-base font-medium rounded-full text-foreground bg-[#ffffff40] hover:bg-foreground hover:text-background-dark transition-colors px-3">
                            Edit
                        </button>
                    </div>
                </div>
                <div className="h-[370px] min-w-[260px] flex flex-col gap-4">
                    <div className="rounded-md bg-gradient-to-br p-[2px] from-[#45B649] to-[#DCE35B] flex-grow">
                        <div className="flex flex-col justify-between h-full rounded-md bg-background-dark p-5 relative gap-3">
                            <div className=" flex flex-row gap-3 items-center">
                                <div className=" bg-background flex items-center justify-center p-[3px] rounded-3xl min-h-[36px] min-w-[36px]">
                                    <h3 className=" font-bold text-2xl bg-gradient-to-br from-[#45B649] to-[#DCE35B] bg-clip-text text-transparent">
                                        +
                                    </h3>
                                </div>
                                <h3 className=" font-bold text-2xl bg-gradient-to-br from-[#45B649] to-[#DCE35B] bg-clip-text text-transparent">
                                        Health
                                </h3>
                            </div>
                            <div className="flex flex-row justify-center items-center flex-grow">
                                <button className=" bg-gradient-to-br from-[#45B649] to-[#DCE35B] p-2 rounded-md w-9 h-9 flex justify-center items-center font-medium text-base" onClick={decrementHealth}>
                                    {'<'}
                                </button>
                                <h1 className="font-medium text-4xl text-foreground flex-grow text-center">
                                    {params.character ? params.character.current_tp + ' / 40' : '{null}'}
                                </h1>
                                <button className=" bg-gradient-to-br from-[#45B649] to-[#DCE35B] p-2 rounded-md w-9 h-9 flex justify-center items-center font-medium text-base" onClick={incrementHealth}>
                                    {'>'}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-md bg-gradient-to-br p-[2px] from-[#E100FF] to-[#7F00FF] flex-grow">
                        <div className="flex flex-col justify-between h-full rounded-md bg-background-dark p-5 relative gap-3">
                            <div className=" flex flex-row gap-3 items-center">
                                <div className=" bg-background flex items-center justify-center p-[3px] rounded-3xl min-h-[36px] min-w-[36px]">
                                    <h3 className=" font-bold text-2xl bg-gradient-to-br from-[#E100FF] to-[#7F00FF] bg-clip-text text-transparent">
                                        ~
                                    </h3>
                                </div>
                                <h3 className=" font-bold text-2xl bg-gradient-to-br from-[#E100FF] to-[#7F00FF] bg-clip-text text-transparent">
                                        Mana
                                </h3>
                            </div>
                            <div className="flex flex-row justify-center items-center flex-grow">
                                <button className=" bg-gradient-to-br from-[#E100FF] to-[#7F00FF] p-2 rounded-md w-9 h-9 flex justify-center items-center font-medium text-base" onClick={decrementMana}>
                                    {'<'}
                                </button>
                                <h1 className="font-medium text-4xl text-foreground flex-grow text-center">
                                    {params.character ? params.character.current_mp + ' / 5' : '{null}'}
                                </h1>
                                <button className=" bg-gradient-to-br from-[#E100FF] to-[#7F00FF] p-2 rounded-md w-9 h-9 flex justify-center items-center font-medium text-base" onClick={incrementMana}>
                                    {'>'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[370px] flex flex-col gap-4">
                    <div className="flex flex-col justify-between rounded-md bg-background-dark p-5 relative gap-3 border-current-line border-2 flex-grow">
                        <div className=" flex flex-row gap-3 items-center">
                            <div className=" bg-background flex items-center justify-center p-[3px] rounded-3xl min-h-[36px] min-w-[36px]">
                                <h3 className=" font-bold text-2xl text-current-line">
                                    +
                                </h3>
                            </div>
                            <h3 className=" font-bold text-2xl text-current-line">
                                    DMG
                            </h3>
                        </div>
                        <div className="flex flex-row gap-7 justify-center items-center flex-grow">
                            <h1 className="font-medium text-5xl text-foreground flex-grow text-center">
                                1
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between flex-grow rounded-md bg-background-dark border-current-line border-2 p-5 relative gap-3">
                        <div className=" flex flex-row gap-3 items-center">
                            <div className=" bg-background flex items-center justify-center p-[3px] rounded-3xl min-h-[36px] min-w-[36px]">
                                <h3 className=" font-bold text-2xl text-current-line">
                                    ~
                                </h3>
                            </div>
                            <h3 className=" font-bold text-2xl text-current-line">
                                    ARM
                            </h3>
                        </div>
                        <div className="flex flex-row gap-7 justify-center items-center flex-grow">
                            <h1 className="font-medium text-5xl text-foreground flex-grow text-center">
                                1
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="h-[370px] flex flex-col gap-4">
                    <div className="flex flex-col justify-between flex-grow rounded-md bg-background-dark border-current-line border-2 p-5 relative gap-3">
                        <div className=" flex flex-row gap-3 items-center">
                            <div className=" bg-background flex items-center justify-center p-[3px] rounded-3xl min-h-[36px] min-w-[36px]">
                                <h3 className=" font-bold text-2xl text-current-line">
                                    +
                                </h3>
                            </div>
                            <h3 className=" font-bold text-2xl text-current-line">
                                    INI
                            </h3>
                        </div>
                        <div className="flex flex-row gap-7 justify-center items-center flex-grow">
                            <h1 className="font-medium text-5xl text-foreground flex-grow text-center">
                                1
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between flex-grow rounded-md bg-background-dark border-current-line border-2 p-5 relative gap-3">
                        <div className=" flex flex-row gap-3 items-center">
                            <div className=" bg-background flex items-center justify-center p-[3px] rounded-3xl min-h-[36px] min-w-[36px]">
                                <h3 className=" font-bold text-2xl bg-gradient-to-br text-current-line">
                                    ~
                                </h3>
                            </div>
                            <h3 className=" font-bold text-2xl bg-gradient-to-br text-current-line">
                                    ATB
                            </h3>
                        </div>
                        <div className="flex flex-row gap-7 justify-center items-center flex-grow">
                            <h1 className="font-medium text-5xl text-foreground flex-grow text-center">
                                1
                            </h1>
                        </div>
                    </div>
                </div>
            </ScrollContainer>
            <h3 className=" text-foreground font-medium">EQUIPPED GEAR CARDS</h3>
            <ScrollContainer className="overflow-x-scroll h-[370px] overflow-y-hidden w-[calc(100%+72px)] flex flex-row items-start gap-4 mx-[-36px] px-9">
                {activeWeapons().map((weapon) => <WeaponCard key={weapon.id} weapon={weapon} setWeaponInactive={params.setWeaponInactive}/>)}

                <div className="h-[370px] w-[260px] min-w-[260px] flex items-center justify-center flex-col gap-2">
                    <div className="rounded-full bg-gradient-to-br p-[2px] from-yellow to-pink">
                        <button className=" bg-background-dark ho hover:bg-background h-9 text-base font-medium rounded-full px-3 text-foreground transition-color">
                            Equip weapon
                        </button>
                    </div>
                </div>
                <div className="min-w-[1px] h-full bg-current-line"/>
                <div className="h-[370px] w-[260px] min-w-[260px] flex items-center justify-center flex-col gap-2">
                    <div className="rounded-full bg-gradient-to-br p-[2px] from-cyan to-green">
                        <button className=" bg-background-dark ho hover:bg-background h-9 text-base font-medium rounded-full px-3 text-foreground transition-colors">
                            Equip armor
                        </button>
                    </div>
                </div>
            </ScrollContainer>
        </div>
    );
}

export default Dashboard;