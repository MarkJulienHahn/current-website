import { useState, useEffect } from "react";
import style from "../../styles/Landing.module.css";
import C4 from "../animation/C4";

const Layer03 = ({colorArray, indexC2, changedC2}) => {
  const [indexC3, setIndexC3] = useState(null);
  const [changedC3, setChanged] = useState(null);

  const changeIndex = () => {
    if (indexC2 +1 < colorArray.length) 
    {setIndexC3(indexC2 + 1), setChanged(true)}
    else setIndexC3(0), setChanged(true);
  };

  const changeColor = () => {
    setIndex(Math.floor(Math.random() * colorArray.length))
  }

  return (
    <div
      className={style.vertical}
      style={{background: colorArray[indexC3]}}
      onClick={!changedC3 ? () => changeIndex() : null}
      // onMouseEnter={changed && !changedCurrent ? () => changeColor() : null}
    >
      <C4 colorArray={colorArray} changedC3={changedC3} indexC3={indexC3}/>
      <C4 colorArray={colorArray} changedC3={changedC3} indexC3={indexC3}/>
    </div>
  );
};

export default Layer03;
