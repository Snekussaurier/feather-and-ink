import React from 'react'
import { ReactSVG } from "react-svg";
import TrashIcon from "../res/trash-alt.svg"

function ItemList(props) {
    //create a new array by filtering the original array
    const filteredData = props.items.filter((item) => {
        //if no input the return the original
        if(item.item_id === props.itemId){
            if (props.input === '') {
                return item;
            }
            //return the item which contains the user input
            else {
                return item.name.toLowerCase().includes(props.input)
            }
        }
        return undefined;
    });

    const itemGroup = {
        0: "Miscellaneous",
        1: "Healing Items",
        2: "Food"
    }

    if(filteredData.length > 0){
        return (
            <table className="w-full h-full table-fixed">
                <thead>
                    <tr className="text-right text-foreground-highlight leading-10 bg-background sticky top-0 z-10 border-spacing-2">
                        <th className='text-center w-10'>•</th>
                        <th className='text-left w-48'>Name</th>
                        <th className='w-16'>Gewicht</th>
                        <th className='w-16'>Preis</th>
                        <th className='w-full'>Funktion</th>
                        <th className='w-16'>Anzahl</th>
                        <th className='text-center w-10'>•</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(item => {
                    return (
                        <tr key={item.id} className="text-right odd:bg-background-dark bg-background">
                            <td className='flex justify-center h-full items-center w-10'><div className='h-5 w-5 bg-purple rounded-sm'></div></td>
                            <td className='text-left w-48'>{ item.name }</td>
                            <td className='w-16'>{item.weight} Kg</td>
                            <td className='w-16'>{ item.value }</td>
                            <td className=' whitespace-nowrap overflow-hidden overflow-ellipsis'>{ item.description ? item.description : ' - ' }</td>
                            <td className='w-16'>x { item.ammount }</td>
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
                    No {itemGroup[props.itemId]}
                </h1>
            </div>
        )
    }
}

export default ItemList
