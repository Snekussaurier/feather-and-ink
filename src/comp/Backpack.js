import React from "react";

function Backpack(params) {

    let character = window.api.getCharacter();

    console.log(character);

    return (
        <div className="flex flex-col gap-5 py-9 items-start">
            <div className="border-b-4 border-purple pb-2 ml-9">
                <h1 className=" text-4xl text-foreground font-mono font-semibold">Backpack</h1>
            </div>
        </div>
    );
}

export default Backpack;