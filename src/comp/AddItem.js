import React from 'react'
import CloseIcon from '../res/close.svg'
import { ReactSVG } from 'react-svg'

export const AddItem = (props) => {
  return (
    <div className={props.addItemActive ? 'absolute left-0 top-0 z-[49] flex justify-center items-center w-full h-full visible' : 'absolute left-0 top-0 z-[49] justify-center items-center w-full h-full hidden'}>
        <div className='add-item-container bg-background w-full h-full z-50 flex flex-row relative'>
            <div className='h-full flex flex-col flex-grow'>
                <div className='flex items-center border-b border-current-line h-16 pt-[30px] pb-5 px-5'>
                    <h2 className='text-lg text-foreground-highlight'>Add New</h2>
                    <select className='text-lg font-medium bg-current-line dropdown text-foreground-highlight ml-1 h-8 outline-none after:border-none'>
                        <option className='rounded'>Weapon</option>
                        <option>Armor</option>
                        <option>Potions</option>
                        <option>Food</option>
                    </select>
                </div>
                <div className='flex-1'/>
                <div className='flex items-center border-t border-current-line py-5 px-5 justify-end gap-5'>
                    <button className="bg-background text-foreground-highlight px-4 py-2 transition-all hover:bg-current-line border border-foreground-highlight">
                        Add Item
                    </button>
                    <button className="bg-background text-red px-4 py-2 transition-all hover:bg-current-line border border-red">
                        Dismiss
                    </button>
                </div>
            </div>
            <button className='absolute right-5 top-5 z-10'>
                <ReactSVG src={CloseIcon} className="fill-foreground h-8 w-8" onClick={props.onAddItem}/>
            </button>
        </div>
        <div className='fixed z-[48] h-full w-full left-0 bg-background-very-dark opacity-70 top-0 cursor-pointer' onClick={props.onAddItem}/>
    </div>
  )
}
