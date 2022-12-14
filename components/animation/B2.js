import { useState, useEffect } from "react";
import style from "../../styles/Landing.module.css";
import B3 from "../animation/B3";

const Layer02 = ({colorArray, changed}) => {
  const [index, setIndex] = useState(null);
  const [changedCurrent, setChanged] = useState(null);

  const changeIndex = () => {
    setIndex(Math.floor(Math.random() * colorArray.length)), setChanged(true);
  };

  const changeColor = () => {
    setIndex(Math.floor(Math.random() * colorArray.length))
  }

  return (
    <div
      className={style.vertical}
      style={{ background: colorArray[index] }}
      onClick={() => setChanged(true)}
      onMouseEnter={changed && !changedCurrent ? () => changeColor() : null}
    >
      <B3 colorArray={colorArray} changed={changedCurrent} />
      <B3 colorArray={colorArray} changed={changedCurrent} />
    </div>
  );
};

export default Layer02;
