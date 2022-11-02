import React from 'react'
import { ReactSVG } from "react-svg";
import TrashIcon from "../res/trash-alt.svg"

function ItemList(props) {
    //create a new array by filtering the original array
    const filteredData = props.items.filter((item) => {
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
            <table className="w-full backdrop-blur-md">
                <thead className="h-10 border-b border-current-line">
                    <tr className="text-center bg-background text-foreground-highlight">
                        <th>Name</th>
                        <th>Position</th>
                        <th>Weight</th>
                        <th>Value</th>
                        <th>Ammount</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(item => {
                    return (
                        <tr key={item.id} className="text-center bg-background odd:bg-background-very-dark">
                            <td>{ item.name }</td>
                            <td>{ item.position }</td>
                            <td>{ item.weight } kg</td>
                            <td>{ item.value }</td>
                            <td>{ item.ammount }</td>
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
            <div className=' h-20 flex justify-center items-center'>
                <h1>
                    No Items
                </h1>
            </div>
        )
    }
}

export default ItemList
