import React from "react";
import "./style.css";
import Tag from "../Tag/tag";
import Button from "../Button/Button";
import bluearrow from "../../images/Work/blueArrow.svg";
function Project(props) {
  return (
    <div className="ProjectCointainer">
       <img
              src={props.image}
              alt={props.image}
              width="100%"
              height="auto"
            />
      <div className="ProjectTextCointainer">
        <div style={{ display:"flex", flexDirection:"column" ,gap: "16px" }}>
          <span className="ProjectTitle">{props.title}</span>
          <span className="ProjectDesc">{props.desc}</span>
          {props.style === "dev" ?<div></div>: <></>}
        </div>

        <div className="ProjectTag">
          <Tag
            text={props.style === "dev" ? "Development" : "Design"}
            style={props.style}
          />
          <Tag text="Case Study" style="default" />
        </div>
        <Button
            name="Read More"
            style="ghost"
            icon={bluearrow}
          />
      </div>
    </div>
  );
}

export default Project;
