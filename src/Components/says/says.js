import React from "react";
import "./style.css";
function Says(props) {
  return (
    <div>
      {props.left ? (
        <div className="saysContainer">
          <div className="syasPerson">
            <img
              src={props.image}
              alt={props.image}
              width="56px"
              height="56px"
              className="saysimage"
            />

            <span className="syasPersonName">{props.name}</span>
            <span className="syasPersonDesc">{props.desc}</span>
          </div>
          <span className="syasText">{props.text}</span>
        </div>
      ) : (
        <div className="saysrightContainer">
         <span className="syasTextright">{props.text}</span>
          <div className="syasPerson">
          <img
              src={props.image}
              alt={props.image}
              width="56px"
              height="56px"
              className="saysimage"
            />
            <span className="syasPersonName">{props.name}</span>
            <span className="syasPersonDesc">{props.desc}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Says;
