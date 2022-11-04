import {React, useState} from 'react'
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
    const [selectedItem, setSelectedItem] = useState(null)

        return (
            <div className=' flex flex-row flex-grow'>
                <div className="grid grid-cols-dashboard gap-4 flex-grow">
                {filteredData.map(weapon => {
                return (
                        <div key={weapon.id} className="h-56 w-44 bg-background flex flex-col transition-all cursor-pointer rounded relative duration-300" onClick={() => setSelectedItem(weapon)}>
                            {/*<input type="checkbox" value="" className='bg-current-line absolute -top-1 -right-1 checked:bg-foreground hover:bg-current-line hover:border-foreground border-2 cursor-pointer border-foreground checked:border-current-line h-6 w-6 appearance-none transition-all rounded-full'  checked={Boolean(weapon.active)} onChange={() => console.log("checked")}/>*/}
                            <div className='flex-1'/>
                            <div className='flex justify-center items-center bg-pink py-1 rounded-b'>
                                <h2 className=' text-base text-background-very-dark'>{weapon.name}</h2>
                            </div>
                        </div>
                );
                })}       
            </div>
                {selectedItem !== null ?                
                    <div className="h-fit w-[300px] bg-background-very-dark transition-all overflow-hidden border border-pink">
                        <div className="bg-pink p-2">
                            <h2 className="text-background-very-dark text-2xl">{selectedItem.name}</h2> 
                        </div>
                        <div className="bg-background p-2 flex flex-col">
                            <h2>{selectedItem.weapon_group}</h2> 
                            <div className="h-5"/>
                            <h3>
                                DMG
                            </h3>
                            <h2 className='text-4xl'>
                                {selectedItem.damage}
                            </h2>
                        </div>
                        <div className="flex flex-col p-2 w-full">
                            <div className="grid grid-cols-2 grid-flow-row-dense justify-between w-full">
                                <h3>Initiative</h3>
                                <h2 className="text-right"><span className="text-cyan">({selectedItem.initiative}) </span>{selectedItem.initiative}</h2>
                                <h3>Kampfbonus</h3>
                                <h2 className="text-right">+3</h2>
                                <h3>Angriffsbonus</h3>
                                <h2 className="text-right">{selectedItem.atb}</h2>
                                <h3>Defensivbonus</h3>
                                <h2 className="text-right">{selectedItem.dfb}</h2>
                            </div>
                            <hr className=" border-pink my-2"/>
                            <h3 className="italic">
                                {selectedItem.description}
                            </h3>
                        </div>
                    </div> : 
                    null}
            </div>
        )
    }

export default WeaponList
