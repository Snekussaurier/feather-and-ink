import {React, useState} from "react";
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
        <div className="flex flex-col pr-5 pl-24 py-8 w-full z-10 max-w-[1160px] small:pl-5 gap-4">
            <div className="w-full h-8 flex items-center">
                <h1>Backpack / {selectedItemGroup}</h1>
                <div className="flex-1"/>
                <div className="flex flex-row gap-2 h-fit" onChange={event => setSelectedItemGroup(event.target.value)}>
                    <ItemGroupButton name="Weapons"/>
                    <ItemGroupButton name="Armor"/>
                    <ItemGroupButton name="Items"/>
                    <ItemGroupButton name="Wallet"/>
                </div>
            </div>
            <div className="flex flex-row mt-4">
                <form action="">
                    <input type="text" placeholder="search..." className="bg-background border border-current-line outline-none caret-foreground h-fit text-foreground rounded px-4 py-2 focus:border-foreground-highlight focus:bg-current-line  hover:bg-current-line transition-all" onChange={inputHandler}>
                    </input>
                </form>
                <div className="flex-1"/>
                <button className=" border border-foreground backdrop-blur-md px-4 py-2 rounded-full text-background-very-dark bg-foreground">
                    <h4 className=" font-semibold">
                        Add item +
                    </h4>
                </button>
            </div>
            <div className="max-h-full w-full flex flex-col overflow-y-auto scrollbar scrollbar-y">
                <div className="flex-grow">
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