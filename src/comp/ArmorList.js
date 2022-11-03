import React from 'react'
import { ReactSVG } from "react-svg";
import TrashIcon from "../res/trash-alt.svg"

function ArmorList(props) {
    //create a new array by filtering the original array
    const filteredData = props.armor.filter((armorPiece) => {
        //if no input the return the original
        if (props.input === '') {
            return armorPiece;
        }
        //return the item which contains the user input
        else {
            return armorPiece.name.toLowerCase().includes(props.input)
        }
    })
    if(filteredData.length > 0){
        return (
            <table className="w-full backdrop-blur-md border-current-line h-fit">
                <thead className="h-10 border-b border-current-line">
                    <tr className="text-center bg-background text-foreground-highlight leading-10">
                        <th>Active</th>
                        <th>Name</th>
                        <th>Armor Group</th>
                        <th>Armor Value</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(armor => {
                    return (
                        <tr key={armor.id} className="text-center bg-background odd:bg-background-very-dark leading-10">
                            <td><input type="checkbox" value="" className='bg-current-line border-2 cursor-pointer border-current-line h-4 w-4 appearance-none checked:bg-cyan transition-all'  checked={Boolean(armor.active)} onChange={() => console.log("checked")}/></td>
                            <td>{ armor.name }</td>
                            <td>{ armor.armor_group }</td>
                            <td>{ armor.value }</td>
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
                    No Armor
                </h1>
            </div>
        )
    }
}

export default ArmorList
