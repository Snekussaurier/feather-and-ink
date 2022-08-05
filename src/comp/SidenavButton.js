import { NavLink } from "react-router-dom";

function SidenavButton(params) {
    return(
        <NavLink className={({isActive}) => isActive ? 'self-stretch rounded-lg text-background-dark h-9 flex-grow-0 w-full transition-all flex flex-row items-center px-4 gap-4 bg-green' : 'self-stretch rounded-lg hover:bg-background text-foreground fill-foreground h-9 flex-grow-0 w-full transition-all flex flex-row items-center px-4 gap-4'} to={params.navigation}>
            <img src={params.icon} alt="icon"/>
            <h3 className="font-mono text-sm font-medium flex items-center">{params.label}</h3>
        </NavLink>
    );
}
export default SidenavButton;