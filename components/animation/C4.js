import { useState, useEffect } from "react";
import style from "../../styles/Landing.module.css";
import C5 from "../animation/C5";

const Layer04 = ({colorArray, indexC3, changedC3}) => {
  const [indexC4, setIndexC4] = useState(null);
  const [changedC4, setChanged] = useState(null);

  const changeIndex = () => {
    if (indexC3 +1 < colorArray.length) 
    {setIndexC4(indexC3 + 1), setChanged(true)}
    else setIndexC4(0), setChanged(true);
  };


  const changeColor = () => {
    setIndex(Math.floor(Math.random() * colorArray.length))
  }

  return (
    <div
      className={style.horizontal}
      style={{ background: colorArray[indexC4] }}
      onClick={changedC3 && !changedC4 ? () => changeIndex() : null}
      // onMouseEnter={changed && !changedCurrent ? () => changeColor() : null}
    >
      <C5 colorArray={colorArray} changedC4={changedC4} indexC4={indexC4}/>
      <C5 colorArray={colorArray} changedC4={changedC4} indexC4={indexC4}/>
    </div>
  );
};

export default Layer04;
