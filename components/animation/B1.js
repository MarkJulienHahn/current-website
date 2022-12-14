import { useState, useEffect } from "react";
import style from "../../styles/Landing.module.css";

import B2 from "../animation/B2";

const Layer01 = ({ colorArray, delay }) => {
  const [index, setIndex] = useState(null);
  const [changed, setChanged] = useState(false);

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
      onMouseEnter={!changed ? () => changeColor() : null}
    >
      <B2 colorArray={colorArray} changed={changed} />
      <B2 colorArray={colorArray} changed={changed} />
    </div>
  );
};

export default Layer01;
