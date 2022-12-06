import { useState, useEffect } from "react";
import style from "../styles/Landing.module.css";
import A4 from "./A4";

const A3 = ({ changed, configuration, color }) => {
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
    setIndex(Math.floor(Math.random() * colorArray.length)),
      setChangedCurrent(true);
  };

  const changeColor = () => {
    setIndex(Math.floor(Math.random() * colorArray.length));
  };

  return (
    <div
      className={style.vertical}
      style={
        color
          ? { background: colorArray[color] }
          : { background: colorArray[index] }
      }
      onClick={changed && !changedCurrent ? () => changeIndex() : null}
      onContextMenu={changed && !changedCurrent ? () => changeColor() : null}
    >
      <A4 changed={changedCurrent} />
      <A4 changed={changedCurrent} />
    </div>
  );
};

export default A3;
