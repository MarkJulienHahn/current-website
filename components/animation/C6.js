import { useState } from "react";
import style from "../../styles/Landing.module.css";
import B7 from "../animation/B7";

const Layer06 = ({colorArray, indexC5, changedC5}) => {
  const [indexC6, setIndexC6] = useState(null);
  const [changedC6, setChanged] = useState(null);

  const changeIndex = () => {
    if (indexC6 +2 < colorArray.length) 
    {setIndexC6(indexC6 + 2), setChanged(true)}
    else setIndexC6(0), setChanged(true);
  };

  const changeColor = () => {
    setIndex(Math.floor(Math.random() * colorArray.length))
  }

  return (
    <div
      className={style.horizontal}
      style={{ background: colorArray[indexC6], display: "flex", flexWrap: "wrap" }}
      onClick={changedC5? () => changeIndex() : null}
      // onMouseEnter={changed && !changedCurrent ? () => changeColor() : null}
    >

    </div>
  );
};

export default Layer06;
