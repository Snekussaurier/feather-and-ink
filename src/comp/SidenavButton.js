import { NavLink } from "react-router-dom";
import { ReactSVG } from "react-svg";

function SidenavButton(params) {
    return(
        <NavLink className={({isActive}) => isActive ? 'text-foreground-highlight fill-foreground-highlight h-12 flex-grow-0 w-full transition-all flex flex-row items-center px-4 gap-4 bg-background' : 'hover:bg-background-hover text-foreground fill-foreground h-12 flex-grow-0 w-full transition-all flex flex-row items-center px-4 gap-4'} to={params.navigation}>
            <ReactSVG src={params.icon}/>
            <h3 className="text-sm font-medium flex items-center">{params.label}</h3>
        </NavLink>
    );
}
export default SidenavButton;