import React from 'react'
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


    if(filteredData.length > 0){
        return (
            <table className="w-full backdrop-blur-md border-current-line h-fit">
                <thead className="h-10 border-b border-current-line">
                    <tr className="text-center bg-background text-foreground-highlight leading-10">
                        <th>Active</th>
                        <th>Name</th>
                        <th>Weapon Group</th>
                        <th>Weight</th>
                        <th>INI</th>
                        <th>ATB</th>
                        <th>DFB</th>
                        <th>DMG</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(weapon => {
                    return (
                        <tr key={weapon.id} className="text-center bg-background odd:bg-background-very-dark leading-10">
                            <td><input type="checkbox" value="" className='bg-current-line border-2 cursor-pointer border-current-line h-4 w-4 appearance-none checked:bg-purple shadow-2xl shadow-foreground transition-all' checked={Boolean(weapon.active)} onChange={() => console.log(weapon.id)}/></td>
                            <td>{ weapon.name }</td>
                            <td>{ weapon.weapon_group }</td>
                            <td>{ weapon.weight } kg</td>
                            <td>{ weapon.initiative }</td>
                            <td>{ weapon.atb }</td>
                            <td>{ weapon.dfb }</td>
                            <td>{ weapon.damage }</td>
                            <td><button><ReactSVG src={TrashIcon} className="fill-foreground rounded-sm h-6 w-6 hover:fill-red transition-colors"/></button></td>
                        </tr>
                    );
                    })}
                </tbody>
            </table>
        )
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
