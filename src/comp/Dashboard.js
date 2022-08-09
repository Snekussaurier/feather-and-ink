import ScrollContainer from "react-indiana-drag-scroll";
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

    return (
        <div className="flex flex-col gap-5 p-9 items-start">
            <div className="border-b-4 border-purple pb-2">
                <h1 className=" text-4xl text-foreground font-semibold">Dashboard</h1>
            </div>
            <h3 className=" text-foreground font-medium">CHARACTER CARDS</h3>
            <ScrollContainer className="overflow-x-scroll overflow-y-hidden w-[calc(100%+72px)] flex flex-row items-start gap-4 mx-[-36px] px-9">
                <div className="h-[370px] min-w-[260px] rounded-md bg-gradient-to-br p-[2px] from-purple to-cyan">
                    <div className="flex flex-col justify-between h-full rounded-md bg-background-dark p-5 relative">
                        <div className=" flex flex-row gap-3 items-center">
                            <div className=" bg-background flex items-center justify-center p-[3px] rounded-3xl min-h-[36px] min-w-[36px]">
                                <h3 className=" font-bold text-2xl bg-gradient-to-br from-purple to-cyan bg-clip-text text-transparent">
                                    {params.character ? params.character.level : '{null}'}
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
                </div>
                <div className="h-[370px] min-w-[260px] flex flex-col gap-4">
                    <div className="rounded-md bg-gradient-to-br p-[2px] from-purple to-cyan flex-grow">
                        <div className="flex flex-col justify-between h-full rounded-md bg-background-dark p-5 relative gap-3">
                            <div className=" flex flex-row gap-3 items-center">
                                <div className=" bg-background flex items-center justify-center p-[3px] rounded-3xl min-h-[36px] min-w-[36px]">
                                    <h3 className=" font-bold text-2xl bg-gradient-to-br from-purple to-cyan bg-clip-text text-transparent">
                                        +
                                    </h3>
                                </div>
                                <h3 className=" font-bold text-2xl bg-gradient-to-br from-purple to-cyan bg-clip-text text-transparent">
                                        Health
                                </h3>
                            </div>
                            <div className="flex flex-row gap-7 justify-center items-center flex-grow">
                                <button className=" bg-purple p-2 rounded-md w-9 h-9 flex justify-center items-center font-medium text-base" onClick={decrementHealth}>
                                    {'<'}
                                </button>
                                <h1 className="font-medium text-5xl text-foreground flex-grow text-center">
                                    {params.character ? params.character.current_tp : '{null}'}
                                </h1>
                                <button className=" bg-purple p-2 rounded-md w-9 h-9 flex justify-center items-center font-medium text-base" onClick={incrementHealth}>
                                    {'>'}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-md bg-gradient-to-br p-[2px] from-purple to-cyan flex-grow">
                        <div className="flex flex-col justify-between h-full rounded-md bg-background-dark p-5 relative gap-3">
                            <div className=" flex flex-row gap-3 items-center">
                                <div className=" bg-background flex items-center justify-center p-[3px] rounded-3xl min-h-[36px] min-w-[36px]">
                                    <h3 className=" font-bold text-2xl bg-gradient-to-br from-purple to-cyan bg-clip-text text-transparent">
                                        ~
                                    </h3>
                                </div>
                                <h3 className=" font-bold text-2xl bg-gradient-to-br from-purple to-cyan bg-clip-text text-transparent">
                                        Mana
                                </h3>
                            </div>
                            <div className="flex flex-row gap-7 justify-center items-center flex-grow">
                                <button className=" bg-purple p-2 rounded-md w-9 h-9 flex justify-center items-center font-medium text-base" onClick={decrementMana}>
                                    {'<'}
                                </button>
                                <h1 className="font-medium text-5xl text-foreground flex-grow text-center">
                                    {params.character ? params.character.current_mp : '{null}'}
                                </h1>
                                <button className=" bg-purple p-2 rounded-md w-9 h-9 flex justify-center items-center font-medium text-base" onClick={incrementMana}>
                                    {'>'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[370px] min-w-[260px] flex flex-col gap-4">
                    <div className="rounded-md bg-gradient-to-br p-[2px] from-purple to-cyan flex-grow">
                        <div className="flex flex-col justify-between h-full rounded-md bg-background-dark p-5 relative gap-3">
                            <div className=" flex flex-row gap-3 items-center">
                                <div className=" bg-background flex items-center justify-center p-[3px] rounded-3xl min-h-[36px] min-w-[36px]">
                                    <h3 className=" font-bold text-2xl bg-gradient-to-br from-purple to-cyan bg-clip-text text-transparent">
                                        +
                                    </h3>
                                </div>
                                <h3 className=" font-bold text-2xl bg-gradient-to-br from-purple to-cyan bg-clip-text text-transparent">
                                        DMG
                                </h3>
                            </div>
                            <div className="flex flex-row gap-7 justify-center items-center flex-grow">
                                <h1 className="font-medium text-5xl text-foreground flex-grow text-center">
                                    1
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-md bg-gradient-to-br p-[2px] from-purple to-cyan flex-grow">
                        <div className="flex flex-col justify-between h-full rounded-md bg-background-dark p-5 relative gap-3">
                            <div className=" flex flex-row gap-3 items-center">
                                <div className=" bg-background flex items-center justify-center p-[3px] rounded-3xl min-h-[36px] min-w-[36px]">
                                    <h3 className=" font-bold text-2xl bg-gradient-to-br from-purple to-cyan bg-clip-text text-transparent">
                                        ~
                                    </h3>
                                </div>
                                <h3 className=" font-bold text-2xl bg-gradient-to-br from-purple to-cyan bg-clip-text text-transparent">
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
                </div>
                <div className="h-[370px] min-w-[260px] flex flex-col gap-4">
                    <div className="rounded-md bg-gradient-to-br p-[2px] from-purple to-cyan flex-grow">
                        <div className="flex flex-col justify-between h-full rounded-md bg-background-dark p-5 relative gap-3">
                            <div className=" flex flex-row gap-3 items-center">
                                <div className=" bg-background flex items-center justify-center p-[3px] rounded-3xl min-h-[36px] min-w-[36px]">
                                    <h3 className=" font-bold text-2xl bg-gradient-to-br from-purple to-cyan bg-clip-text text-transparent">
                                        +
                                    </h3>
                                </div>
                                <h3 className=" font-bold text-2xl bg-gradient-to-br from-purple to-cyan bg-clip-text text-transparent">
                                        INI
                                </h3>
                            </div>
                            <div className="flex flex-row gap-7 justify-center items-center flex-grow">
                                <h1 className="font-medium text-5xl text-foreground flex-grow text-center">
                                    1
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-md bg-gradient-to-br p-[2px] from-purple to-cyan flex-grow">
                        <div className="flex flex-col justify-between h-full rounded-md bg-background-dark p-5 relative gap-3">
                            <div className=" flex flex-row gap-3 items-center">
                                <div className=" bg-background flex items-center justify-center p-[3px] rounded-3xl min-h-[36px] min-w-[36px]">
                                    <h3 className=" font-bold text-2xl bg-gradient-to-br from-purple to-cyan bg-clip-text text-transparent">
                                        ~
                                    </h3>
                                </div>
                                <h3 className=" font-bold text-2xl bg-gradient-to-br from-purple to-cyan bg-clip-text text-transparent">
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
                </div>
            </ScrollContainer>
            <h3 className=" text-foreground font-medium">GEAR CARDS</h3>
            <ScrollContainer className="overflow-x-scroll overflow-y-hidden w-[calc(100%+72px)] flex flex-row items-start gap-4 mx-[-36px] px-9">
                <WeaponCard/>
            </ScrollContainer>
        </div>
    );
}

export default Dashboard;