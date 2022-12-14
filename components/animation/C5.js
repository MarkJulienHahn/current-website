import { useState } from "react";
import style from "../../styles/Landing.module.css";
import C6 from "../animation/C6";

const Layer05 = ({changed, colorArray}) => {
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
      style={{ background: colorArray[index] }}
      onClick={changed && !changedCurrent ? () => changeIndex() : null}
      onMouseEnter={changed && !changedCurrent ? () => changeColor() : null}
    >
      <C6 colorArray={colorArray} changed={changedCurrent} />
      <C6 colorArray={colorArray} changed={changedCurrent} />
    </div>
  );
};

export default Layer05;
