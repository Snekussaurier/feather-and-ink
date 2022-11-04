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
            <div className=' flex flex-row flex-grow'>
                <div className="grid grid-cols-dashboard gap-4 flex-grow">
                    {filteredData.map(armor => {
                    return (
                            <div key={armor.id} className="h-56 w-44 bg-background flex flex-col transition-all cursor-pointer rounded relative duration-300">
                                {/*<input type="checkbox" value="" className='bg-current-line absolute -top-1 -right-1 checked:bg-foreground hover:bg-current-line hover:border-foreground border-2 cursor-pointer border-foreground checked:border-current-line h-6 w-6 appearance-none transition-all rounded-full'  checked={Boolean(weapon.active)} onChange={() => console.log("checked")}/>*/}
                                <div className='flex-1'/>
                                <div className='flex justify-center items-center bg-green py-1 rounded-b'>
                                    <h2 className=' text-base text-background-very-dark'>{armor.name}</h2>
                                </div>
                            </div>
                    );
                    })}       
                </div>
            </div>
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
