import React from "react";
// Pass color of text, border and background color as props
import "./search-comp.css";
import { BtnComp } from "../buttons/buttons";
import { ReactSVG } from "react-svg";
import SearchSVG from "./search-normal.svg";
// import FilterSVG from "./sort.svg";

export function SearchComp(props) {
  return (
    <div className="search-comp">
      <ReactSVG
        beforeInjection={(svg) => {
          svg.classList.add("search-svg");
        }}
        src={SearchSVG}
      />
      {/* <ReactSVG src={FilterSVG} /> */}
      <input
        className="search_input"
        type="text"
        placeholder={props.placeholder}
        name=""
        id=" "
      ></input>
      <BtnComp
        padding=".75rem"
        fontSize=".75rem"
        title={props.title}
        color="btn-black"
      />
    </div>
  );
}
