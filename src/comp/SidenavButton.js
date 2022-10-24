import { NavLink } from "react-router-dom";
import { ReactSVG } from "react-svg";

function SidenavButton(params) {
    return(
        <NavLink className={({isActive}) => isActive ? 'text-foreground-highlight fill-foreground-highlight h-14 flex-grow-0 w-full transition-all flex flex-row items-center px-4 gap-4 bg-background border border-foreground-highlight' : 'hover:bg-background-very-dark bg-current-line opacity-80 hover:opacity-100 text-foreground fill-foreground h-14 flex-grow-0 w-full transition-all flex flex-row items-center px-4 gap-4 border-current-line border hover:border-background-very-dark'} to={params.navigation}>
            <ReactSVG src={params.icon}/>
            <h4 className="text-sm font-medium flex items-center">{params.label}</h4>
        </NavLink>
    );
}
export default SidenavButton;