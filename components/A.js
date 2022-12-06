import { useState, useEffect } from "react";
import style from "../styles/Landing.module.css";

import A2 from "./A2";

const Layer01 = ({ configuration, indexA }) => {
  const [index, setIndex] = useState(null);
  const [changed, setChanged] = useState(false);
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
    setIndex(Math.floor(Math.random() * colorArray.length))
  }

  useEffect(() => {
    setIndex(index);
  }, []);

  return (
    <div
      className={style.A}
      style={{ background: colorArray[indexA]}}
      onClick={!changed ? () => changeIndex() : null}
      onContextMenu={!changed ? () => changeColor() : null}
    >
      <div
        style={{ background: colorArray[index], width: "100%", height: "100%" }}
      >
        <A2
          changed={changed}
        />
        <A2
          changed={changed}
        />
      </div>
    </div>
  );
};

export default Layer01;
