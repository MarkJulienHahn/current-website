import { useState } from "react";
import style from "../../styles/Landing.module.css";
import B6 from "../animation/B6";

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
      className={style.horizontal}
      style={{ background: colorArray[index] }}
      onClick={changed && !changedCurrent ? () => changeIndex() : null}
      onMouseEnter={changed && !changedCurrent ? () => changeColor() : null}
    >
      <B6 colorArray={colorArray} changed={changedCurrent} />
      <B6 colorArray={colorArray} changed={changedCurrent} />
    </div>
  );
};

export default Layer05;
