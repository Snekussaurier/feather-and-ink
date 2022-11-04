import React from 'react';

function ItemGroupButton(props) {
    return (
        <div>
            <input type="radio" id={props.name} name="selected_item_group" value={props.name} className="peer hidden"/>
            <label htmlFor={props.name} className="px-4 py-2 flex flex-row items-center bg-background gap-4 peer-checked:border-foreground-highlight peer-checked:text-foreground-highlight peer-checked:bg-current-line hover:bg-current-line hover:text-foreground transition-all border border-current-line cursor-pointer text-[#FFFFFFAA]">
                <h4 className="font-medium">
                    {props.name}
                </h4>
            </label>
        </div>
    );
}

export default ItemGroupButton;