import { useState, useEffect } from "react";
import styles from "../styles/Landing.module.css";

import L02_L from "./L02_L";
import L02_R from "./L02_R";

const L01_T = () => {
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
      className={styles.flex1}
      // style={{ background: colorArray[index], gridColumnEnd: "17", gridRowEnd: "9", border: "2px solid black" }}
      onClick={!changed ? () => changeIndex() : null}
    >L01_T
      <L02_L changed={changed}/>
      <L02_R changed={changed}/>
    </div>
  );
};

export default L01_T;
