import React from "react";
import { NavLink } from "react-router-dom";

function Sidenav() {
  return (
    <div className="h-screen absolute bg-background-dark w-[260px] px-9 py-6 flex flex-col items-center gap-9">
        <div className="flex flex-row items-start gap-5">
            <div className=" min-w-[62px] min-h-[62px] bg-gradient-to-br from-purple to-cyan rounded-lg"/>
            <h1 className=" text-2xl font-mono font-bold bg-gradient-to-br from-purple to-cyan bg-clip-text text-transparent">
                Feather<br/>and Ink
            </h1>
        </div>
        <hr className="border-1 border-current-line w-full"/>
    </div>
  );
}

export default Sidenav;
