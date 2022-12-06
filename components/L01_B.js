import { useState, useEffect } from "react";
import styles from "../styles/Landing.module.css";

import SquareTL from "./L02_L";
import SquareTR from "./L02_R";

const L01_B = () => {
  const [index, setIndex] = useState(null);
  const [changed, setChanged] = useState(null);
  const colorArray = [
    "red",
    "blue",
    "yellow",
    "green",
    "brown",
    "purple",
    "orange",
  ];

  const changeIndex = () => {
    setIndex(Math.floor(Math.random() * colorArray.length)), setChanged(true);
  };
  return (
    <div
      className={styles.item1}
      style={{ background: colorArray[index], gridColumnEnd: "17", gridRowStart: "9", gridRowEnd: "17", border: "2px solid blue" }}
      onClick={!changed ? () => changeIndex() : null}
    >L01_B
      <SquareTL changed={changed}/>
      <SquareTR changed={changed}/>
    </div>
  );
};

export default L01_B;
