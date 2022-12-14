import { useState, useEffect } from "react";
import style from "../../styles/Landing.module.css";
import D5 from "../animation/D5";

const Layer04 = ({changed, colorArray}) => {
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
      style={{ background: colorArray[index]}}
      onClick={changed && !changedCurrent ? () => changeIndex() : null}
      onMouseEnter={changed && !changedCurrent ? () => changeColor() : null}
    >
      <D5 colorArray={colorArray} changed={changedCurrent} />
      <D5 colorArray={colorArray} changed={changedCurrent} />
    </div>
  );
};

export default Layer04;
