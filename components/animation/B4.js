import { useState, useEffect } from "react";
import style from "../../styles/Landing.module.css";
import B5 from "../animation/B5";

const Layer04 = ({colorArray, indexB3, changedB3}) => {
  const [indexB4, setIndexB4] = useState(null);
  const [changedB4, setChanged] = useState(null);

  const changeIndex = () => {
    if (indexB3 +1 < colorArray.length) 
    {setIndexB4(indexB3 + 1), setChanged(true)}
    else setIndexB4(0), setChanged(true);
  };

  const changeColor = () => {
    setIndex(Math.floor(Math.random() * colorArray.length))
  }

  return (
    <div
      className={style.vertical}
      style={{ background: colorArray[indexB4] }}
      onClick={!changedB4 && changedB3 ? () => changeIndex() : null}
      // onMouseEnter={changed && !changedCurrent ? () => changeColor() : null}
    >
      <B5 colorArray={colorArray} changedB4={changedB4} indexB4={indexB4}/>
      <B5 colorArray={colorArray} changedB4={changedB4} indexB4={indexB4}/>
    </div>
  );
};

export default Layer04;
