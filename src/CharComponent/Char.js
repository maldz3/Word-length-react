import React from 'react';
import Char from './Char.css';

const char = (props) => {
  return (
    <div className="Char">
      <p onClick={props.clicked}>{props.char}</p>
    </div>
  )
}

export default char;
