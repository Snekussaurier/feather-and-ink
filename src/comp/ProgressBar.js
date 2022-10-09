import {useEffect, useState} from 'react';

const ProgressBar = (props) => {

  const target = props.target;
  const now = props.now;
  const width = (now/target) * 100;

  return (
    <div className="p-1 w-full bg-background-very-dark">
        <div className="bg-cyan h-2" style={{width: width + '%'}}/>
    </div>
  )
}

export default ProgressBar;