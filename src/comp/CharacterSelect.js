import { NavLink } from "react-router-dom";

function SidenavButton(params) {
    return(
        <NavLink className={({isActive}) => isActive ? "w-full px-3 bg-[url('../src/res/background-illustration-1.jpg')] h-16 bg-cover flex flex-row items-center gap-4 border border-foreground-highlight" : "w-full px-3 bg-[url('../src/res/background-illustration-1.jpg')] h-16 bg-cover flex flex-row items-center gap-4 border border-foreground-highlight grayscale"} to='#'>
            <div className="bg-[url('../src/res/FancyFirion.png')] h-full object-top aspect-square"/>
                <h1>
                    {params.character.name}
                </h1>
        </NavLink>
    );
}
export default SidenavButton;