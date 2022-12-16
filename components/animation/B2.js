import { useState, useEffect } from "react";
import style from "../../styles/Landing.module.css";
import B3 from "../animation/B3";

const B2 = ({colorArray, indexB1, changedB1}) => {
  const [indexB2, setIndexB2] = useState(null);
  const [changedB2, setChanged] = useState(null);

  const changeIndex = () => {
    if (indexB1 +1 < colorArray.length) 
    {setIndexB2(indexB1 + 1), setChanged(true)}
    else setIndexB2(0), setChanged(true);
  };

  const changeColor = () => {
    if (index < colorArray.length) 
    {setIndex(index + 1)}
    else setIndex(0);
  }

  return (
    <div
      className={style.vertical}
      style={{ background: colorArray[indexB2] }}
      onClick={!changedB2 ? () => changeIndex() : null}
      // onMouseEnter={index != null ? () => changeColor() : null}
    >
      <B3 colorArray={colorArray} changedB2={changedB2} indexB2={indexB2}/>
      <B3 colorArray={colorArray} changedB2={changedB2} indexB2={indexB2}/>
    </div>
  );
};

export default B2;
