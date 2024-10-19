import React, { useState } from "react";
import "./counter.css";

export default function Counter() {
  const [number, setNumber] = useState(0);
  const handleMinus = () => {
    if (number === 0) return;
    setNumber(number - 1);
  };
  const handlePlus = () => {
    setNumber(number + 1);
  };
  return (
    <div className="counter-component">
      <button type="button" onClick={handleMinus} className="counter-plus">
        -
      </button>
      <p className="counter-plus">{number}</p>
      <button type="button" onClick={handlePlus} className="counter-plus">
        +
      </button>
    </div>
  );
}
