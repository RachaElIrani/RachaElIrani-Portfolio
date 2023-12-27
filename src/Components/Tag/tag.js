import React from 'react';
import './style.css';

function Tag(props) {
  return (
    <div className={props.style}>
   <span> {props.text}</span>
    </div>
  );
}

export default Tag;