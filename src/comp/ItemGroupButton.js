import React from 'react';
import { ReactSVG } from 'react-svg';

function ItemGroupButton(props) {
    return (
        <div>
            <input type="radio" id={props.name} name="selected_item_group" value={props.name} className="peer hidden" defaultChecked={props.name === "Weapons"}/>
            <label htmlFor={props.name} className="rounded-full px-2 py-2 flex flex-row items-center gap-4 peer-checked:fill-foreground-highlight transition-all hover:fill-foreground fill-[#FFFFFFAA] cursor-pointer text-[#FFFFFFAA]">
                <ReactSVG src={props.icon} className='h-8 w-8'/>
            </label>
        </div>
    );
}

export default ItemGroupButton;