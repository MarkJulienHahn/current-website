import { useState, useEffect } from "react";
import style from "../../styles/Landing.module.css";
import C3 from "../animation/C3";

const C2 = ({changed, delay, colorArray}) => {
  const [index, setIndex] = useState(null);
  const [changedCurrent, setChanged] = useState(null);

  const changeIndex = () => {
    setIndex(Math.floor(Math.random() * colorArray.length)), setChanged(true);
  };

  const changeColor = () => {
    setIndex(Math.floor(Math.random() * colorArray.length))
  }

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
      className={style.horizontal_frst}
      style={{ background: colorArray[index] }}
      onClick={changed && !changedCurrent ? () => changeIndex() : null}
      onMouseEnter={!changedCurrent ? () => changeColor() : null}
    >
      <C3 colorArray={colorArray} changed={changedCurrent} />
      <C3 colorArray={colorArray} changed={changedCurrent} />
    </div>
  );
};

export default C2;
