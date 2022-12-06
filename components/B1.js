import { useState, useEffect } from "react";
import style from "../styles/Landing.module.css";

import B2 from "./B2";

const Layer01 = ({ delay }) => {
  const [index, setIndex] = useState(null);
  const [changed, setChanged] = useState(false);
  const colorArray = [
    "#f099cd",
    "#1d480f",
    "white",
    "#eb0000",
    "#50b8f9",
    "#ec4f27",
  ];

  const changeIndex = () => {
    setIndex(Math.floor(Math.random() * colorArray.length)), setChanged(true);
  };

  const changeColor = () => {
    setIndex(Math.floor(Math.random() * colorArray.length));
  };

  useEffect(() => {
    setIndex(Math.floor(Math.random() * colorArray.length));
  }, []);

  useEffect(() => {
    if (delay) {
      const interval = setInterval(() => {
        setIndex(Math.floor(Math.random() * colorArray.length));
      }, delay);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div
      className={style.B1}
      style={{ background: colorArray[index] }}
      onClick={!changed ? () => changeIndex() : null}
      onContextMenu={!changed ? () => changeColor() : null}
    >
      <B2 changed={changed} />
      <B2 changed={changed} />
    </div>
  );
};

export default Layer01;
