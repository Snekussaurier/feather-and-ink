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
            <div className=' flex flex-row flex-grow'>
                <div className="grid grid-cols-dashboard gap-4 flex-grow">
                    {filteredData.map(armor => {
                    return (
                            <div key={armor.id} className="h-56 w-44 bg-background flex flex-col transition-all relative duration-300 border border-green">
                                {/*<input type="checkbox" value="" className='bg-current-line absolute -top-1 -right-1 checked:bg-foreground hover:bg-current-line hover:border-foreground border-2 cursor-pointer border-foreground checked:border-current-line h-6 w-6 appearance-none transition-all rounded-full'  checked={Boolean(weapon.active)} onChange={() => console.log("checked")}/>*/}
                                <div className='p-2 relative overflow-hidden h-full flex flex-col'>
                                    <ReactSVG src={ArmorIcon} className='fill-green absolute h-36 w-36 -right-4 -bottom-8 opacity-20'/>
                                    <div className='flex flex-row-reverse'>
                                        <button className='fill-foreground hover:fill-red transition-colors'>
                                            <ReactSVG src={TrashIcon} className='h-6 w-6'/>
                                        </button>
                                    </div>
                                    <div className='flex-grow'/>
                                    <h2 className='mt-2'>
                                        {armor.name}
                                    </h2>
                                    <h3>
                                        Value
                                    </h3>
                                    <h2 className='text-2xl'>
                                        {armor.value}
                                    </h2>
                                </div>
                                <div className='flex justify-center items-center bg-green py-1'>
                                    <h2 className=' text-base text-background-very-dark'>{armor.armor_group}</h2>
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
