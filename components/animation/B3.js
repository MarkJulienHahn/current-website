import { useState, useEffect } from "react";
import style from "../../styles/Landing.module.css";
import B4 from "../animation/B4";

const Layer03 = ({colorArray, indexB2, changedB2}) => {
  const [indexB3, setIndexB3] = useState(null);
  const [changedB3, setChanged] = useState(null);

  const changeIndex = () => {
    if (indexB2 +1 < colorArray.length) 
    {setIndexB3(indexB2 + 1), setChanged(true)}
    else setIndexB3(0), setChanged(true);
  };

  const changeColor = () => {
    setIndex(Math.floor(Math.random() * colorArray.length))
  }

  return (
    <div
      className={style.horizontal}
      style={{background: colorArray[indexB3] }}
      onClick={!changedB3 && changedB2 ? () => changeIndex() : null}
      // onMouseEnter={changed && !changedCurrent ? () => changeColor() : null}
    >
      <B4 colorArray={colorArray} changedB3={changedB3} indexB3={indexB3}/>
      <B4 colorArray={colorArray} changedB3={changedB3} indexB3={indexB3}/>
    </div>
  );
};

export default Layer03;
