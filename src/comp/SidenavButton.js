import { NavLink } from "react-router-dom";
import { ReactSVG } from "react-svg";

function SidenavButton(params) {
    return(
        <NavLink className={({isActive}) => isActive ? 'text-foreground-highlight fill-foreground-highlight h-14 flex-grow-0 w-full transition-all flex flex-row items-center px-4 gap-4 bg-current-line' : 'hover:bg-current-line bg-background-dark opacity-80 hover:opacity-100 text-foreground fill-foreground h-14 flex-grow-0 w-full transition-all flex flex-row items-center px-4 gap-4'} to={params.navigation} end>
            <ReactSVG src={params.icon} className="h-6 w-6"/>
            <h4 className="text-sm font-medium flex items-center">{params.label}</h4>
        </NavLink>
    );
}
export default SidenavButton;