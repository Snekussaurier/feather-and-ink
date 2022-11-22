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
            <table className="w-full h-full">
                <thead>
                    <tr className="text-right text-foreground-highlight leading-10 bg-background sticky top-0 z-10">
                        <th className='text-center'>•</th>
                        <th className='text-left'>Name</th>
                        <th>Gewicht</th>
                        <th>Preis</th>
                        <th>Funktion</th>
                        <th>Anzahl</th>
                        <th className='text-center'>•</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(item => {
                    return (
                        <tr key={item.id} className="text-right odd:bg-background-dark bg-background">
                            <td className='flex justify-center h-full items-center'><div className='h-5 w-5 bg-purple rounded-sm'></div></td>
                            <td className='text-left'>{ item.name }</td>
                            <td>{item.weight} Kg</td>
                            <td>{ item.value }</td>
                            <td>{ item.description ? item.description : ' - ' }</td>
                            <td>{ item.ammount }</td>
                            <td className='text-center'><button><ReactSVG src={TrashIcon} className="fill-foreground rounded-sm h-6 w-6 hover:fill-red transition-colors"/></button></td>
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
