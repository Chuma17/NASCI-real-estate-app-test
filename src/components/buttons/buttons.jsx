import React from "react";
// Pass color of text, border and background color as props
import "./buttons.css";

export function BtnComp(props) {
  return (
    <div>
      <button
        style={{ padding: `${props.padding}`, fontSize: `${props.fontSize}` }}
        className={`btn ${props.color}`}
      >
        {props.title}
      </button>
    </div>
  );
}
