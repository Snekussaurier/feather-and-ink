import React from 'react'

function ArmorCard(params) {
  return (
    <div className="h-[210px] min-w-[270px] flex-grow bg-background-very-dark border border-green">
        <div className="bg-green p-2">
            <h2 className="text-background-very-dark">{params.armor.name}</h2>
            <h3 className="text-background-very-dark">{params.armor.armor_group}</h3>
        </div>
        <div className="flex flex-col p-2 w-full">
            <div className="grid grid-cols-2 grid-flow-row-dense justify-between w-full">
                <h3>Rüstungswert</h3>
                <h2 className="text-right">{params.armor.value}</h2>
            </div>
            <hr className=" border-green my-2"/>
            <h2>Info</h2>
            <h3>
                {params.armor.description}
            </h3>
        </div>
    </div>
  )
}

export default ArmorCard