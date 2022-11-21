import React from 'react';

export const OptionsButton = (props) => {
  return (
    <div>
        <input type="radio" id={params.character.id} name="selected_character" value={params.character.id} className="peer hidden"/>
        <label htmlFor={params.character.id} className="w-full px-4 h-20 peer-checked:h-24 bg-cover flex flex-row items-center gap-4 peer-checked:grayscale-0 peer-hover:grayscale-0 grayscale transition-all cursor-pointer duration-300 overflow-hidden" style={{backgroundImage: `linear-gradient(to bottom, rgba(14, 15, 33, 0), rgba(14, 15, 33, 0.75)), url(${backgroundImage})`}}>
            <div className="h-full object-top aspect-square bg-cover">
                <img src={`data:image/png;base64,${params.character.character_image}`} className=" scale-150 origin-top" alt=""/>
            </div>
            <h1>
                {params.character.name}
            </h1>
        </label>
    </div>
  )
}