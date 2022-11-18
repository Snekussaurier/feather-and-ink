import {React} from 'react'
import { ReactSVG } from "react-svg";
import TrashIcon from "../res/trash-alt.svg"

function WeaponList(props) {
    //create a new array by filtering the original array
    const filteredData = props.weapons.filter((weapon) => {
        //if no input the return the original
        if (props.input === '') {
            return weapon;
        }
        //return the item which contains the user input
        else {
            return weapon.name.toLowerCase().includes(props.input)
        }
    })

    const getPrefix = (value) => {
        if(value > 0){
            return '+' + value;
        }    
        else{
            return value;
        }
    }

    if(filteredData.length > 0){
        return (
            <table className="w-full h-full">
                <thead>
                    <tr className="text-right text-foreground-highlight leading-10 bg-background sticky top-0 z-10">
                        <th className='text-center'>•</th>
                        <th className='text-left'>Name</th>
                        <th>KMB</th>
                        <th>INI</th>
                        <th>ATB</th>
                        <th>DFB</th>
                        <th>DMG</th>
                        <th className='text-center'>•</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(weapon => {
                    return (
                        <tr key={weapon.id} className="text-right odd:bg-background-dark bg-background">
                            <td className='flex justify-center'><ReactSVG src={require("../res/wpn_grps/weapon-group-" + weapon.weapon_group_id + ".svg")} className='fill-red h-6 w-6'/></td>
                            <td className='text-left'>{ weapon.name }</td>
                            <td>+3</td>
                            <td>{getPrefix(weapon.initiative)}</td>
                            <td>{getPrefix(weapon.atb)}</td>
                            <td>{getPrefix(weapon.dfb)}</td>
                            <td>{getPrefix(weapon.damage)}</td>
                            <td className='text-center'><button><ReactSVG src={TrashIcon} className="fill-foreground rounded-sm h-6 w-6 hover:fill-red transition-colors"/></button></td>
                        </tr>
                    );
                    })}
                </tbody>
            </table>
        );
        }       
        else {
            return (
                <div className=' h-20 flex justify-center items-center w-full'>
                    <h1>
                        No Weapons
                    </h1>
                </div>
            )
        }
    }

export default WeaponList
