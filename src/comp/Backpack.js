import {React, useState} from "react";
import CoinButton from "./CoinButton";
import WeaponList from "../comp/WeaponList"
import ArmorList from "../comp/ArmorList"
import ItemList from "../comp/ItemList"
import ItemGroupButton from "./ItemGroupButton";

function Backpack(params) {
    const [selectedItemGroup , setSelectedItemGroup] = useState("Weapons");
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (
        <div className="flex flex-col gap-4 h-fit pb-12 px-5 max-w-[1160px] min-w-[910px] w-full z-10 pt-24">
            <h1 className="text-5xl unde">Backpack</h1>
            <div className=" flex flex-row gap-4">
                <div className="flex flex-col gap-4 flex-grow">
                    <div className=" flex flex-row">
                        <h1 className="text-foreground">Inventory</h1>
                        <div className="flex-1"/>
                        <button className="px-4 py-1 gap-2 flex flex-row items-center justify-center bg-foreground rounded-full backdrop-blur-md hover:bg-foreground-highlight transition-all cursor-pointer text-background-very-dark">
                            <h4 className=" font-semibold text-xl">
                                +
                            </h4>
                            <h4>
                                Add item
                            </h4>
                        </button>
                    </div>
                    <div className="flex flex-row gap-4">
                        <div className="flex flex-col gap-2 h-fit" >
                            <h2>Search</h2>
                            <form action="">
                                <input type="text" placeholder="search..." className="bg-background border border-current-line outline-none caret-foreground h-fit text-foreground w-44 px-4 py-2 focus:border-foreground-highlight focus:bg-current-line  hover:bg-current-line rounded-none transition-all" onChange={inputHandler}>
                                </input>
                            </form>
                            <h2>Categories</h2>
                            <div className="flex flex-col gap-2 h-fit" onChange={event => setSelectedItemGroup(event.target.value)}>
                                <ItemGroupButton name="Weapons"/>
                                <ItemGroupButton name="Armor"/>
                                <ItemGroupButton name="Items"/>
                            </div>
                        </div>
                        {(() => {
                            switch (selectedItemGroup) {
                                case "Weapons":
                                    return <WeaponList weapons={params.weapons} input={inputText}/>
                                case "Armor":
                                    return <ArmorList armor={params.armor} input={inputText}/>
                                case "Items":
                                    return <ItemList items={params.items} input={inputText}/>
                                default:
                                    return null
                            }
                        }
                        )()}
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-1/5 h-fit sticky top-5">
                    <h1 className="text-foreground">Wallet</h1>
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