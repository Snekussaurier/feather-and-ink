import React from "react";
import CoinButton from "./CoinButton";
import { ReactSVG } from "react-svg";
import TrashIcon from "../res/trash-alt.svg"

function Backpack(params) {

    return (
        <div className="flex flex-col gap-4 h-fit pt-24 pb-12 px-5 max-w-[960px] min-w-[910px] w-full z-10">
            <h1 className="text-5xl">Backpack</h1>
            <div className=" flex flex-row gap-4">
                <div className="flex flex-col gap-4 flex-grow">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-foreground">Items</h1>
                        <div className=" flex flex-row gap-4">
                            <div className=" bg-foreground h-12 w-12 rounded-full">

                            </div>
                            <div className=" bg-foreground h-12 w-12 rounded-full">

                            </div>
                            <div className=" bg-foreground h-12 w-12 rounded-full">

                            </div>
                        </div>
                    </div>
                    <table className="w-full backdrop-blur-md">
                        <thead className=" h-10 border-b border-[#FFFFFFAA]">
                            <tr>
                                <th>Name</th>
                                <th>Weapon Group</th>
                                <th>Weight</th>
                                <th>INI</th>
                                <th>ATB</th>
                                <th>DFB</th>
                                <th>DMG</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {params.weapons.map(weapon => {
                            return (
                                <tr key={weapon.id}>
                                    <td>{ weapon.name }</td>
                                    <td>{ weapon.weapon_group }</td>
                                    <td>{ weapon.weight } kg</td>
                                    <td>{ weapon.initiative }</td>
                                    <td>{ weapon.atb }</td>
                                    <td>{ weapon.dfb }</td>
                                    <td>{ weapon.damage }</td>
                                    <td><button><ReactSVG src={TrashIcon} className="fill-foreground rounded-sm h-6 w-6 hover:fill-red transition-colors"/></button></td>
                                </tr>
                            );
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-col gap-4 w-1/5 sticky top-4 left-0 h-fit">
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