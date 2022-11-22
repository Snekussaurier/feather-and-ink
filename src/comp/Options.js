import React from 'react'
import CloseIcon from '../res/close.svg'
import SettingsIcon from '../res/settings.svg'
import { ReactSVG } from 'react-svg'

export default function Options(params) {
  return (
    <div className='options-container bg-background w-full h-full z-50 flex flex-row relative'>
        <div className='h-full w-[210px] bg-background-dark flex flex-col'>
            <div className='flex items-center pt-[30px] pr-[10px] pb-[20px] pl-[30px] h-16 border-b border-background'>
                <ReactSVG src={SettingsIcon} className="fill-cyan mr-3 mb-px"/>
                <h2 className='text-lg'>User Settings</h2>
            </div>
        </div>
        <div className='h-full flex flex-col flex-grow'>
            <div className='flex items-center border-b border-current-line h-16 pt-[30px] pb-5 px-5'>
                <h2 className='text-lg text-foreground-highlight'>Settings Category</h2>
            </div>
        </div>
        <button className='absolute right-5 top-5 z-10'>
            <ReactSVG src={CloseIcon} className="fill-foreground h-8 w-8" onClick={params.onActiveOptions}/>
        </button>
    </div>
  )
}
