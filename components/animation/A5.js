import { useState } from "react";
import style from "../../styles/Landing.module.css";
import A6 from "../animation/A6";

const A5 = ({changed, configuration}) => {
  const [index, setIndex] = useState(null);
  const [changedCurrent, setChanged] = useState(null);
  const colorArray = [
    "#f099cd",
    "#1d480f",
    "white",
    "#eb0000",
    "#50b8f9",
    "#ec4f27",
  ];

  const changeIndex = () => {
    setIndex(Math.floor(Math.random() * colorArray.length)), setChanged(true);
  };

  const changeColor = () => {
    setIndex(Math.floor(Math.random() * colorArray.length));
  };
  return (
    <div
      className={style.horizontal}
      style={{ background: colorArray[index] }}
      onClick={changed && !changedCurrent ? () => changeIndex() : null}
      onMouseEnter={changedCurrent ? () => changeColor() : null}
    >
      <A6 changed={changedCurrent} />
      <A6 changed={changedCurrent} />
    </div>
  );
};

export default A5;
