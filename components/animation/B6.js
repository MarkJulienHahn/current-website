import { useState } from "react";
import style from "../../styles/Landing.module.css";
import B7 from "../animation/B7";

const Layer06 = ({changed, colorArray}) => {
  const [index, setIndex] = useState(null);
  const [changedCurrent, setChanged] = useState(null);

  const changeIndex = () => {
    setIndex(Math.floor(Math.random() * colorArray.length)), setChanged(true);
  };

  const changeColor = () => {
    setIndex(Math.floor(Math.random() * colorArray.length))
  }
  
  return (
    <div
      className={style.vertical}
      style={{ background: colorArray[index], display: "flex", flexWrap: "wrap" }}
      onClick={changed && !changedCurrent ? () => changeIndex() : null}
      onMouseEnter={changed && !changedCurrent ? () => changeColor() : null}
    >
      <B7 colorArray={colorArray} changed={changedCurrent} />
      <B7 colorArray={colorArray} changed={changedCurrent} />
    </div>
  );
};

export default Layer06;
