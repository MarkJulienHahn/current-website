import { useState } from "react";
import style from "../../styles/Landing.module.css";
import B7 from "../animation/B7";

const Layer06 = ({colorArray, indexB5, changedB5}) => {
  const [indexB6, setIndexB6] = useState(null);
  const [changedB6, setChanged] = useState(null);

  const changeIndex = () => {
    if (indexB5 +1 < colorArray.length) 
    {setIndexB6(indexB5 + 1), setChanged(true)}
    else setIndexB6(0), setChanged(true);
  };

  const changeColor = () => {
    setIndex(Math.floor(Math.random() * colorArray.length))
  }
  
  return (
    <div
      className={style.vertical}
      style={{ background: colorArray[indexB6], display: "flex", flexWrap: "wrap" }}
      onClick={!changedB6 && changedB5 ? () => changeIndex() : null}
      // onMouseEnter={changed && !changedCurrent ? () => changeColor() : null}
    >
      <B7 colorArray={colorArray} changedB6={changedB6} indexB6={indexB6}/>
      <B7 colorArray={colorArray} changedB6={changedB6} indexB6={indexB6}/>
    </div>
  );
};

export default Layer06;
