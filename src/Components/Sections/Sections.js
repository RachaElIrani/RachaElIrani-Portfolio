import React from 'react';
import './style.css';
// import { Link } from "react-router-dom";
function Sections(props) {
  return (
    <div className={props.style} onClick={props.onClick}>
   <span> {props.text}</span>
    </div>
  );
}

export default Sections;