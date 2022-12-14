import React from 'react'
import { ReactSVG } from "react-svg";
import TrashIcon from "../res/trash-alt.svg"

const HealingList = (props) => {
    //create a new array by filtering the original array
    const filteredData = props.healing.filter((item) => {
        //if no input the return the original
        if (props.input === '') {
            return item;
        }
        //return the item which contains the user input
        else {
            return item.name.toLowerCase().includes(props.input)
        }
    });

    if(filteredData.length > 0){
        return (
            <table className="w-full h-full">
                <thead>
                    <tr className="text-right text-foreground-highlight leading-10 bg-background sticky top-0 z-10">
                        <th className='text-center'>•</th>
                        <th className='text-left'>Name</th>
                        <th>Gewicht</th>
                        <th>Preis</th>
                        <th>Funktion</th>
                        <th className='text-center'>•</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(item => {
                    return (
                        <tr key={item.id} className="text-right odd:bg-background-dark bg-background">
                            <td className='flex justify-center'><div className='fill-orange h-6 w-6 rounded'/></td>
                            <td className='text-left'>{ item.name }</td>
                            <td>{item.weight} Kg</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
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
                    No Healing Items
                </h1>
            </div>
        );
    }
}

export default HealingList