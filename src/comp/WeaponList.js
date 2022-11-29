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
            <table className="w-full h-full table-fixed">
                <thead>
                    <tr className="text-right text-foreground-highlight leading-10 bg-background sticky top-0 z-10 border-spacing-2">
                        <th className='text-center w-10'>•</th>
                        <th className='text-left w-48'>Name</th>
                        <th className='w-12'>KMB</th>
                        <th className='w-12'>INI</th>
                        <th className='w-12'>ATB</th>
                        <th className='w-12'>DFB</th>
                        <th className='w-12'>DMG</th>
                        <th className='w-full'>Funktion</th>
                        <th className='text-center w-10'>•</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(weapon => {
                    return (
                        <tr key={weapon.id} className="text-right odd:bg-background-dark bg-background">
                            <td className='flex justify-center h-full items-center w-10'><ReactSVG src={require("../res/wpn_grps/weapon-group-" + weapon.weaponGroup + ".svg")} className='fill-red h-6 w-6'/></td>
                            <td className='text-left w-48'>{ weapon.name }</td>
                            <td className='w-12'>{ getPrefix(weapon.fightBonus) }</td>
                            <td className='w-12'>{ getPrefix(weapon.initiative) }</td>
                            <td className='w-12'>{ getPrefix(weapon.attackBonus) }</td>
                            <td className='w-12'>{ getPrefix(weapon.defenseBonus) }</td>
                            <td className='w-12'>{ getPrefix(weapon.damage) }</td>
                            <td className=' whitespace-nowrap overflow-hidden overflow-ellipsis'>{ weapon.description ? weapon.description : ' - ' }</td>
                            <td className='text-center w-10'><button><ReactSVG src={TrashIcon} className="fill-foreground rounded-sm h-6 w-6 hover:fill-red transition-colors" onClick={() => props.deleteWeapon(weapon.id)}/></button></td>
                        </tr>
                    );
                    })}
                </tbody>
            </table>
        );
        }       
        else {
            return (
                <div className='h-20 flex justify-center items-center w-full'>
                    <h1>
                        No Weapons
                    </h1>
                </div>
            )
            
        }
    }

export default WeaponList
