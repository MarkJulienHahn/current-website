import { useState } from "react";
import style from "../../styles/Landing.module.css";
import A8 from "../animation/A8";

const A7 = ({ changed, configuration }) => {
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
      <A8 changed={changedCurrent} />
      <A8 changed={changedCurrent} />
    </div>
  );
};

export default A7;
