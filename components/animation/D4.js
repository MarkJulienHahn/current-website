import { useState, useEffect } from "react";
import style from "../../styles/Landing.module.css";
import D5 from "../animation/D5";

const Layer04 = ({colorArray, indexD3, changedD3}) => {
  const [indexD4, setIndexD4] = useState(null);
  const [changedD4, setChanged] = useState(null);

  const changeIndex = () => {
    if (indexD4 +1 < colorArray.length) 
    {setIndexD4(indexD3 + 1), setChanged(true)}
    else setIndexD4(0), setChanged(true);
  };

  return (
    <div
      className={style.vertical}
      style={{ background: colorArray[indexD4]}}
      onClick={!changedD4 ? () => changeIndex() : null}
      // onMouseEnter={changed && !changedCurrent ? () => changeColor() : null}
    >
      <D5 colorArray={colorArray} changedD4={changedD4} indexD4={indexD4}/>
      <D5 colorArray={colorArray} changedD4={changedD4} indexD4={indexD4}/>
    </div>
  );
};

export default Layer04;
