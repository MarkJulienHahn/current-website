import { useState, useEffect } from "react";
import style from "../../styles/Landing.module.css";
import C4 from "../animation/C4";

const Layer03 = ({changed, colorArray, color}) => {
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
      className={style.vertical}
      style={color ? { background: colorArray[color] } : { background: colorArray[index] }}
      onClick={changed && !changedCurrent ? () => changeIndex() : null}
      onMouseEnter={changed && !changedCurrent ? () => changeColor() : null}
    >
      <C4 colorArray={colorArray} changed={changedCurrent}/>
      <C4 colorArray={colorArray} changed={changedCurrent}/>
    </div>
  );
};

export default Layer03;
