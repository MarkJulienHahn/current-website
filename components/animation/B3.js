import { useState, useEffect } from "react";
import style from "../../styles/Landing.module.css";
import B4 from "../animation/B4";

const Layer03 = ({changed, colorArray}) => {
  const [index, setIndex] = useState(null);
  const [changedCurrent, setChangedCurrent] = useState(null);

  const changeIndex = () => {
    setIndex(Math.floor(Math.random() * colorArray.length)), setChangedCurrent(true);
  };

  const changeColor = () => {
    setIndex(Math.floor(Math.random() * colorArray.length))
  }

  return (
    <div
      className={style.horizontal}
      style={{background: colorArray[index] }}
      onClick={changed && !changedCurrent ? () => changeIndex() : null}
      onMouseEnter={changed && !changedCurrent ? () => changeColor() : null}
    >
      <B4 colorArray={colorArray} changed={changedCurrent}/>
      <B4 colorArray={colorArray} changed={changedCurrent}/>
    </div>
  );
};

export default Layer03;
