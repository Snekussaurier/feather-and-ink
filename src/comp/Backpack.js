import React from "react";
import CoinButton from "./CoinButton";
import { ReactSVG } from "react-svg";
import TrashIcon from "../res/trash-alt.svg"

function Backpack(params) {

    return (
        <div className="flex flex-col gap-4 h-fit pb-12 px-5 max-w-[1160px] min-w-[910px] w-full z-10 pt-24">
            <h1 className="text-5xl unde">Backpack</h1>
            <div className=" flex flex-row gap-4">
                <div className="flex flex-col gap-4 flex-grow">
                    <h1>Inventory</h1>
                    <div className="flex flex-row gap-2">
                        <div>
                            <input type="radio" id="weapons" name="selected_item_group" value="weapons" className="peer hidden" defaultChecked/>
                            <label htmlFor="weapons" className="px-4 py-2 flex flex-row items-center bg-background gap-4 backdrop-blur-md peer-checked:border-foreground-highlight peer-checked:text-foreground-highlight hover:bg-background-very-dark hover:text-foreground transition-all border border-transparent cursor-pointer rounded-full text-[#FFFFFFAA]">
                                <h4 className=" font-medium">
                                    Weapons
                                </h4>
                            </label>
                        </div>
                        <div>
                            <input type="radio" id="armor" name="selected_item_group" value="armor" className="peer hidden"/>
                            <label htmlFor="armor" className="px-4 py-2 flex flex-row items-center bg-background gap-4 backdrop-blur-md peer-checked:border-foreground-highlight peer-checked:text-foreground-highlight hover:bg-background-very-dark hover:text-foreground transition-all border border-transparent cursor-pointer rounded-full text-[#FFFFFFAA]">
                                <h4 className=" font-medium">
                                    Armor
                                </h4>
                            </label>
                        </div>
                        <div>
                            <input type="radio" id="items" name="selected_item_group" value="items" className="peer hidden"/>
                            <label htmlFor="items" className="px-4 py-2 flex flex-row items-center bg-background gap-4 backdrop-blur-md peer-checked:border-foreground-highlight peer-checked:text-foreground-highlight hover:bg-background-very-dark hover:text-foreground transition-all border border-transparent cursor-pointer rounded-full text-[#FFFFFFAA]">
                                <h4 className=" font-medium">
                                    Items
                                </h4>
                            </label>
                        </div>
                        <div className="flex-1"/>
                        <div className="border border-transparent bg-background hover:bg-background-dark transition-colors w-56 rounded-full"/>
                    </div>
                    <table className="w-full backdrop-blur-md">
                        <thead className="h-10 border-b border-current-line">
                            <tr className="text-center bg-background-dark text-foreground-highlight">
                                <th>Name</th>
                                <th>Weapon Group</th>
                                <th>Weight</th>
                                <th>INI</th>
                                <th>ATB</th>
                                <th>DFB</th>
                                <th>DMG</th>
                                <th>Active</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {params.weapons.map(weapon => {
                            return (
                                <tr key={weapon.id} className="text-center bg-background-dark odd:bg-background-very-dark">
                                    <td>{ weapon.name }</td>
                                    <td>{ weapon.weapon_group }</td>
                                    <td>{ weapon.weight } kg</td>
                                    <td>{ weapon.initiative }</td>
                                    <td>{ weapon.atb }</td>
                                    <td>{ weapon.dfb }</td>
                                    <td>{ weapon.damage }</td>
                                    <td><button><ReactSVG src={TrashIcon} className="fill-foreground rounded-sm h-6 w-6 hover:fill-red transition-colors"/></button></td>
                                    <td><button><ReactSVG src={TrashIcon} className="fill-foreground rounded-sm h-6 w-6 hover:fill-red transition-colors"/></button></td>
                                </tr>
                            );
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-col gap-4 w-1/5 h-fit sticky top-5">
                    <h1>Wallet</h1>
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