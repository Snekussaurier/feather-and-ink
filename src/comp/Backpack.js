import React from "react";

function Backpack(params) {
    return (
        <div className="relative w-full">
            <div className="absolute top-0 h-[calc(40vw+48px)] max-h-[calc(600px+48px)] min-h-[calc(500px+48px)] w-full left-0 bg-cover z-10 bg-dashboard"/>
            <div className="h-fit p-4 backdrop-blur-md absolute z-30 w-full top-0 left-0 flex flex-col items-center bg-[#00000020]">
                <h1 className=" text-foreground">Backpack</h1>
                <div className=" flex flex-row">
                    
                </div>
            </div>
        </div>
    );
}

export default Backpack;