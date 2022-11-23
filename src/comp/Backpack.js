import {React, useState} from "react";
import WeaponList from "../comp/WeaponList";
import ArmorList from "../comp/ArmorList";
import ItemList from "../comp/ItemList";
import ItemGroupButton from "./ItemGroupButton";
import CoinButton from "./CoinButton";
import WeaponsIcon from "../res/crossed-swords.svg"
import ArmorIcon from "../res/closed-barbute.svg"
import HealingIcon from "../res/drink-me.svg"
import FoodIcon from "../res/shiny-apple.svg"
import ItemsIcon from "../res/swap-bag.svg"

function Backpack(params) {
    const [selectedItemGroup , setSelectedItemGroup] = useState("Weapons");
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (   
        <div className="flex flex-col px-8 pt-24 pb-12 w-full z-10 max-w-[1160px] gap-4">
            <div className="flex flex-row max-w-full gap-4 h-full max-h-full">
                <div className="flex flex-col gap-2">
                    <h1>{selectedItemGroup}</h1>
                    <div className="flex flex-row w-full border-b border-foreground-highlight items-center pb-2 mb-2 gap-2">
                        <div className="flex flex-row gap-3" onChange={event => setSelectedItemGroup(event.target.value)}>
                            <ItemGroupButton name="Weapons"icon={WeaponsIcon}/>
                            <ItemGroupButton name="Armor" icon={ArmorIcon}/>
                            <ItemGroupButton name="Healing" icon={HealingIcon}/>
                            <ItemGroupButton name="Food" icon={FoodIcon}/>
                            <ItemGroupButton name="Miscellaneous" icon={ItemsIcon}/>
                        </div>
                        <div className="flex-1"/>
                        <form action="">
                            <input type="text" placeholder="search..." className="bg-background border border-current-line outline-none caret-foreground h-fit text-foreground rounded px-4 py-2 focus:border-foreground-highlight focus:bg-current-line  hover:bg-current-line transition-all" onChange={inputHandler}>
                            </input>
                        </form>
                        <button className="bg-background text-foreground-highlight px-4 py-2 transition-all hover:bg-current-line">
                            + Add item
                        </button>
                    </div>
                    <div className="max-h-full overflow-y-auto scrollbar scrollbar-y gap-4 max-w-full">
                        {(() => {
                                switch (selectedItemGroup) {
                                    case "Weapons":
                                        return <WeaponList weapons={params.weapons} input={inputText}/>
                                    case "Armor":
                                        return <ArmorList armor={params.armor} input={inputText}/>
                                    case "Miscellaneous":
                                        return <ItemList items={params.items} itemId={0} input={inputText}/>
                                    case "Healing":
                                        return <ItemList items={params.items} itemId={1} input={inputText}/>
                                    case "Food":
                                        return <ItemList items={params.items} itemId={2} input={inputText}/>
                                    default:
                                        return null
                                }
                            }
                        )()}
                    </div>
                </div>
                <div className="flex-col flex gap-4 mt-12">
                    <CoinButton name='Goldfalken' currency="goldfalken" character={params.character} setCharacter={params.setCharacter}/>
                    <CoinButton name='Triontaler' currency="triontaler" character={params.character} setCharacter={params.setCharacter}/>
                    <CoinButton name='Kupferlinge' currency="kupferlinge" character={params.character} setCharacter={params.setCharacter}/>
                    <CoinButton name='Muena' currency="muena" character={params.character} setCharacter={params.setCharacter}/>
                </div>
            </div>
        </div>
    );
}

export default Backpack;