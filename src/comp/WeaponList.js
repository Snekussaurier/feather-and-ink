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
            <div className=' flex flex-row flex-grow'>
                <div className="grid grid-cols-dashboard gap-4 flex-grow">
                {filteredData.map(weapon => {
                return (
                        <div key={weapon.id} className="h-56 w-44 bg-background-dark flex flex-col transition-all relative duration-300 border border-red">
                            <div className='p-2 relative overflow-hidden h-full flex flex-col'>
                                <ReactSVG src={require("../res/wpn_grps/weapon-group-" + weapon.weapon_group_id + ".svg")} className='fill-red absolute h-36 w-36 -right-4 -bottom-8 opacity-20'/>
                                <div className='flex flex-row-reverse gap-1'>
                                    <button className='fill-foreground hover:fill-red transition-colors'>
                                        <ReactSVG src={TrashIcon} className='h-6 w-6'/>
                                    </button>
                                    <div className='flex-grow'/>
                                    <input type="checkbox" value="" className='h-4 w-4 appearance-none' onChange={() => console.log("checked")}/>
                                </div>
                                <div className='flex-grow'/>
                                <h2>
                                    {weapon.name}
                                </h2>
                                <h3>
                                    DMG
                                </h3>
                                <h2 className='text-2xl'>
                                    {getPrefix(weapon.damage)}
                                </h2>
                                <table>
                                    <tr className="text-center">
                                        <th><h3>INI</h3></th>
                                        <th><h3>KMB</h3></th>
                                        <th><h3>ATB</h3></th>
                                        <th><h3>DFB</h3></th>
                                    </tr>
                                    <tr className="text-center">
                                        <td><h2>{getPrefix(weapon.initiative)}</h2></td>
                                        <td><h2>+3</h2></td>
                                        <td><h2>{getPrefix(weapon.atb)}</h2></td>
                                        <td><h2>{getPrefix(weapon.dfb)}</h2></td>
                                    </tr>
                                </table>
                            </div>
                            <div className='flex justify-center items-center bg-red py-1'>
                                <h2 className=' text-base text-background-very-dark'>{weapon.weapon_group}</h2>
                            </div>
                        </div>
                );
                })}       
            </div>
        </div>
        )}
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
