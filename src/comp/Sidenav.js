import React from "react";
import SidenavButton from "./SidenavButton";
import DashboardIcon from "../res/layout.svg"
import BackpackIcon from "../res/clipboard-list.svg"
import LevelingIcon from "../res/bar-chart-alt.svg"
import SettingsIcon from "../res/settings.svg"

function Sidenav() {
  return (
    <div className="h-screen absolute left-0 top-0 bg-background-dark w-[260px] px-6 py-9 flex flex-col items-center gap-9 border-r border-current-line">
        <div className="flex flex-row items-start gap-5 self-stretch">
            <div className=" min-w-[62px] min-h-[62px] bg-gradient-to-br from-purple to-cyan rounded-lg"/>
            <h1 className=" text-2xl font-mono font-bold bg-gradient-to-br from-purple to-cyan bg-clip-text text-transparent">
                Feather<br/>and Ink
            </h1>
        </div>
        <hr className="border-1 border-current-line w-full"/>
        <div className=" flex flex-col items-center gap-3 grow w-full">
          <SidenavButton icon={DashboardIcon} label="Dashboard" navigation="/"/>
          <SidenavButton icon={BackpackIcon} label="Backpack" navigation="/backpack"/>
          <SidenavButton icon={LevelingIcon} label="Leveling" navigation="/leveling"/>
          <hr className="border-1 border-current-line w-full" />
          <SidenavButton icon={SettingsIcon} label="Settings" navigation="/settings"/>
        </div>
        <hr className="border-1 border-current-line w-full"/>
        <p className="text-xs text-foreground font-mono">v0.0.1</p>
    </div>
  );
}

export default Sidenav;
