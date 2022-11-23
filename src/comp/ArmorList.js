import React from 'react'
import { ReactSVG } from "react-svg";
import TrashIcon from "../res/trash-alt.svg"
import ArmorIcon from "../res/closed-barbute.svg";

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
            <table className="w-full h-full">
                <thead>
                    <tr className="text-right text-foreground-highlight leading-10 bg-background sticky top-0 z-10">
                        <th className='text-center w-10'>•</th>
                        <th className='text-left'>Name</th>
                        <th>Rüstung</th>
                        <th className='text-center w-10'>•</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(armor => {
                    return (
                        <tr key={armor.id} className="text-right odd:bg-background-dark bg-background">
                            <td className='flex justify-center w-10'><ReactSVG src={ArmorIcon} className='fill-green h-6 w-6'/></td>
                            <td className='text-left'>{ armor.name }</td>
                            <td>{armor.value}</td>
                            <td className='text-center w-10'><button><ReactSVG src={TrashIcon} className="fill-foreground rounded-sm h-6 w-6 hover:fill-red transition-colors"/></button></td>
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
