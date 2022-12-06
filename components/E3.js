import { useState, useEffect } from "react";
import style from "../styles/Landing.module.css";
import D4 from "./D4";

const Layer03 = ({ changed, configuration, color }) => {
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

  const changeColor = () => {
    setIndex(Math.floor(Math.random() * colorArray.length))
  }

  useEffect(() => {
    setIndex(Math.floor(Math.random() * colorArray.length));
  }, []);

  return (
    <div
      className={style.vertical}
      style={
        color
          ? { background: colorArray[color] }
          : { background: colorArray[index] }
      }
      onClick={() => changeColor()}
      onContextMenu={() => changeColor()}
    ></div>
  );
};

export default Layer03;
