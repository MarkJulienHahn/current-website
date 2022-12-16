import { useState } from "react";
import style from "../../styles/Landing.module.css";
import C6 from "../animation/C6";

const Layer05 = ({colorArray, indexC4, changedC4}) => {
  const [indexC5, setIndexC5] = useState(null);
  const [changedC5, setChanged] = useState(null);

  const changeIndex = () => {
    if (indexC4 +1 < colorArray.length) 
    {setIndexC5(indexC4 + 1), setChanged(true)}
    else setIndexC5(0), setChanged(true);
  };

  const changeColor = () => {
    setIndex(Math.floor(Math.random() * colorArray.length))
  }

  return (
    <div
      className={style.vertical}
      style={{ background: colorArray[indexC5] }}
      onClick={changedC4 && !changedC5 ? () => changeIndex() : null}
      // onMouseEnter={changed && !changedCurrent ? () => changeColor() : null}
    >
      <C6 colorArray={colorArray} changedC5={changedC5} indexC5={indexC5}/>
      <C6 colorArray={colorArray} changedC5={changedC5} indexC5={indexC5}/>
    </div>
  );
};

export default Layer05;
