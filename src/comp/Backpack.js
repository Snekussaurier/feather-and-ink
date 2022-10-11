import React from "react";
import CoinButton from "./CoinButton";

function Backpack(params) {
    return (
        <div className="flex flex-col gap-4 h-fit pt-24 pb-12 px-5 max-w-[960px] min-w-[910px] w-full z-10">
            <div className="absolute top-0 h-[calc(40vw+48px)] max-h-[calc(600px+48px)] min-h-[calc(500px+48px)] w-full left-0 bg-cover -z-10 bg-dashboard"/>
            <h1 className="text-5xl">Backpack</h1>
            <h1 className="text-foreground">Wallet</h1>
            <div className="flex flex-row gap-4">
                <CoinButton name='Goldfalken' value='5'/>
                <CoinButton name='Triontaler' value='2'/>
                <CoinButton name='Kupferlinge' value='12'/>
                <CoinButton name='Muena' value='18'/>
            </div>
            <h1 className="text-foreground">Items</h1>
        </div>
    );
}

export default Backpack;