import { waitForElementToBeRemoved } from '@testing-library/react';
import React from 'react'

export const FoodList = () => {
    //create a new array by filtering the original array
    const filteredData = props.weapons.filter((item) => {
        //if no input the return the original
        if (props.input === '') {
            return item;
        }
        //return the item which contains the user input
        else {
            return item.name.toLowerCase().includes(props.input)
        }
    })

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
                            <td className='flex justify-center'><ReactSVG src={require("../res/wpn_grps/weapon-group-" + weapon.weaponGroup + ".svg")} className='fill-red h-6 w-6'/></td>
                            <td className='text-left'>{ weapon.name }</td>
                            <td>{getPrefix(weapon.fightBonus)}</td>
                            <td>{getPrefix(weapon.initiative)}</td>
                            <td>{getPrefix(weapon.attackBonus)}</td>
                            <td>{getPrefix(weapon.defenseBonus)}</td>
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
