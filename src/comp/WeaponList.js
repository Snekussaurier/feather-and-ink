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
            <div className='flex-col'>
                <div className='table-header'>
                    <h5 className='text-center w-10'>•</h5>
                    <h5 className='text-left w-48'>Name</h5>
                    <h5 className='w-12'>KMB</h5>
                    <h5 className='w-12'>INI</h5>
                    <h5 className='w-12'>ATB</h5>
                    <h5 className='w-12'>DFB</h5>
                    <h5 className='w-12'>DMG</h5>
                    <h5 className='w-full'>Funktion</h5>
                    <h5 className='text-center w-10'>•</h5>
                </div>
                {filteredData.map(weapon => {
                return (
                    <div key={weapon.id} className="table-row">
                        <div className='flex justify-center w-10'><ReactSVG src={require("../res/wpn_grps/weapon-group-" + weapon.weaponGroup + ".svg")} className='fill-red h-6 w-6'/></div>
                        <div className='text-left w-48'>{ weapon.name }</div>
                        <div className='w-14'>{getPrefix(weapon.fightBonus)}</div>
                        <div className='w-14'>{getPrefix(weapon.initiative)}</div>
                        <div className='w-14'>{getPrefix(weapon.attackBonus)}</div>
                        <div className='w-14'>{getPrefix(weapon.defenseBonus)}</div>
                        <div className='w-14'>{getPrefix(weapon.damage)}</div>
                        <div className='flex-grow'>{ weapon.description ? weapon.description : ' - ' }</div>
                        <div className='text-center w-10'><button><ReactSVG src={TrashIcon} className="fill-foreground rounded-sm h-6 w-6 hover:fill-red transition-colors"/></button></div>
                    </div>
                );
                })}
            </div>
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
