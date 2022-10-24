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
                <CoinButton name='Goldfalken' currency="goldfalken" character={params.character} setCharacter={params.setCharacter}/>
                <CoinButton name='Triontaler' currency="triontaler" character={params.character} setCharacter={params.setCharacter}/>
                <CoinButton name='Kupferlinge' currency="kupferlinge" character={params.character} setCharacter={params.setCharacter}/>
                <CoinButton name='Muena' currency="muena" character={params.character} setCharacter={params.setCharacter}/>
            </div>
            <h1 className="text-foreground">Items</h1>
            <div className=" flex flex-row gap-2">
                <button className=" rounded py-1 px-3 bg-background-very-dark border border-current-line hover:border-pink transition-colors font-medium text-foreground">
                    weapons
                </button>
                <button className=" rounded py-1 px-3 bg-background-very-dark border border-current-line hover:border-green transition-colors font-medium text-foreground">
                    armor
                </button>
                <button className=" rounded py-1 px-3 bg-background-very-dark border border-current-line hover:border-foreground-highlight transition-colors font-medium text-foreground ">
                    items
                </button>
            </div>
        </div>
    );
}

export default Backpack;