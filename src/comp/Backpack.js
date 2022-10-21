import React from "react";
import CoinButton from "./CoinButton";

function Backpack(params) {

    return (
        <div className="flex flex-col gap-4 h-fit pt-24 pb-12 px-5 max-w-[960px] min-w-[910px] w-full z-10">
            <div className="flex flex-row items-center">
                <h1 className="text-5xl">Backpack</h1>
            </div>
            <h1 className="text-foreground">Wallet</h1>
            <div className="flex flex-row gap-4">
                <CoinButton name='Goldfalken' value={params.character.goldfalken} currency="goldfalken"/>
                <CoinButton name='Triontaler' value={params.character.triontaler} currency="Triontaler"/>
                <CoinButton name='Kupferlinge' value={params.character.kupferlinge} currency="Kupferlinge"/>
                <CoinButton name='Muena' value={params.character.muena} currency="Muena"/>
            </div>
            <h1 className="text-foreground">Items</h1>
            <div className=" flex flex-row gap-2">
                <button className=" rounded-full py-1 px-3 bg-background-very-dark border border-background-very-dark hover:border-pink transition-colors font-medium text-foreground">
                    weapons
                </button>
                <button className=" rounded-full py-1 px-3 bg-background-very-dark border border-background-very-dark hover:border-green transition-colors font-medium text-foreground">
                    armor
                </button>
                <button className=" rounded-full py-1 px-3 bg-background-very-dark border border-background-very-dark hover:border-foreground-highlight transition-colors font-medium text-foreground ">
                    items
                </button>
            </div>
            <table>
                <th>
                    <td>name</td>
                    <td>name</td>
                    <td>name</td>
                </th>
                <tr>
                    <td>name</td>
                    <td>name</td>
                    <td>name</td>
                </tr>
            </table>
        </div>
    );
}

export default Backpack;