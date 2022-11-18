import React from 'react';
import ProgressBar from './ProgressBar';

export default function Leveling() {
  return (
    <div className="flex flex-col gap-4 h-fit pt-24 pb-12 px-8 max-w-[1160px] min-w-[910px] w-full z-10">
        <h1 className="text-5xl">Leveling</h1>
        <ProgressBar target={1000} now={100}/>
    </div>
  )
}
