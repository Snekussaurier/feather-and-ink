import {useEffect, useState} from 'react';

const ProgressBar = (progress) => {

   const width = 50;

  return (
    <div className="p-1 w-full bg-background-very-dark">
        <div className="bg-cyan h-2" style={{width:  + '%'}}/>
    </div>
  )
}

export default ProgressBar;