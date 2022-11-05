import {React, useState} from "react";
import WeaponList from "../comp/WeaponList";
import ArmorList from "../comp/ArmorList";
import ItemList from "../comp/ItemList";
import ItemGroupButton from "./ItemGroupButton";
import CoinButton from "./CoinButton";

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
            <h1 className="text-5xl">Backpack</h1>
            <div className="flex-row flex w-full gap-4">
                <CoinButton name='Goldfalken' currency="goldfalken" character={params.character} setCharacter={params.setCharacter}/>
                <CoinButton name='Triontaler' currency="triontaler" character={params.character} setCharacter={params.setCharacter}/>
                <CoinButton name='Kupferlinge' currency="kupferlinge" character={params.character} setCharacter={params.setCharacter}/>
                <CoinButton name='Muena' currency="muena" character={params.character} setCharacter={params.setCharacter}/>
            </div>
            <h2>Inventory</h2>
            <div className="flex flex-row w-full gap-4">
                <div className="flex flex-col gap-4">
                    <form action="">
                        <input type="text" placeholder="search..." className="bg-background border border-current-line outline-none caret-foreground h-fit text-foreground rounded px-4 py-2 focus:border-foreground-highlight focus:bg-current-line  hover:bg-current-line transition-all" onChange={inputHandler}>
                        </input>
                    </form>
                    <div className="flex flex-col gap-2" onChange={event => setSelectedItemGroup(event.target.value)}>
                        <ItemGroupButton name="Weapons"/>
                        <ItemGroupButton name="Armor"/>
                        <ItemGroupButton name="Items"/>
                    </div>
                    <button className=" border border-foreground backdrop-blur-md px-4 py-2 rounded-full text-background-very-dark bg-foreground">
                        <h4 className=" font-semibold">
                            Add item +
                        </h4>
                    </button>   
                </div>
                <div className="max-h-full overflow-y-auto scrollbar scrollbar-y gap-4 flex-grow">
                    {(() => {
                            switch (selectedItemGroup) {
                                case "Weapons":
                                    return <WeaponList weapons={params.weapons} input={inputText}/>
                                case "Armor":
                                    return <ArmorList armor={params.armor} input={inputText}/>
                                case "Items":
                                    return <ItemList items={params.items} input={inputText}/>
                                case "Wallet":
                                    return <ItemList items={params.items} input={inputText}/>
                                default:
                                    return null
                            }
                        }
                    )()}
                </div>
            </div>
        </div>
    );
}

export default Backpack;