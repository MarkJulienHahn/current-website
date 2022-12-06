import { useState, useEffect } from "react";
import style from "../styles/Landing.module.css";
import B4 from "./B4";

const Layer03 = ({changed, configuration, color}) => {
  const [index, setIndex] = useState(null);
  const [changedCurrent, setChangedCurrent] = useState(null);
  const colorArray = [
    "#f099cd",
    "#1d480f",
    "white",
    "#eb0000",
    "#50b8f9",
    "#ec4f27",
  ];

  const changeIndex = () => {
    setIndex(Math.floor(Math.random() * colorArray.length)), setChangedCurrent(true);
  };

  const changeColor = () => {
    setIndex(Math.floor(Math.random() * colorArray.length))
  }

  return (
    <div
      className={style.horizontal}
      style={{background: colorArray[index] }}
      onClick={changed && !changedCurrent ? () => changeIndex() : null}
      onContextMenu={changed && !changedCurrent ? () => changeColor() : null}
    >
      <B4 changed={changedCurrent}/>
      <B4 changed={changedCurrent}/>
    </div>
  );
};

export default Layer03;
