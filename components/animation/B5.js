import { useState } from "react";
import style from "../../styles/Landing.module.css";
import B6 from "../animation/B6";

const Layer05 = ({colorArray, indexB4, changedB4}) => {
  const [indexB5, setIndexB5] = useState(null);
  const [changedB5, setChanged] = useState(null);

  const changeIndex = () => {
    if (indexB4 +1 < colorArray.length) 
    {setIndexB5(indexB4 + 1), setChanged(true)}
    else setIndexB5(0), setChanged(true);
  };

  const changeColor = () => {
    setIndex(Math.floor(Math.random() * colorArray.length))
  }

  return (
    <div
      className={style.horizontal}
      style={{ background: colorArray[indexB5] }}
      onClick={!changedB5 && changedB4 ? () => changeIndex() : null}
      // onMouseEnter={changed && !changedCurrent ? () => changeColor() : null}
    >
      <B6 colorArray={colorArray} changedB5={changedB5} indexB5={indexB5}/>
      <B6 colorArray={colorArray} changedB5={changedB5} indexB5={indexB5}/>
    </div>
  );
};

export default Layer05;
