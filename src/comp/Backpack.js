import React from "react";
import { ReactSVG } from "react-svg";
import CoinButton from "./CoinButton";

function Backpack(params) {

    const incrementCurrency = (currency) => {
        params.setCharacter({ ...params.character, current_mp: params.character.current_mp + 1 });
    }

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
        </div>
    );
}

export default Backpack;