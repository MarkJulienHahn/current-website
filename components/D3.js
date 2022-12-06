import { useState, useEffect } from "react";
import style from "../styles/Landing.module.css";
import D4 from "./D4";

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

  useEffect(() => {
    setIndex(Math.floor(Math.random() * colorArray.length));
  }, []);

  return (
    <div
      className={style.vertical}
      style={{ background: colorArray[index], display: "flex"  }}
      onClick={changed && !changedCurrent ? () => changeIndex() : null}
      onContextMenu={!changedCurrent ? () => changeColor() : null}
    >
      <D4 changed={changedCurrent}/>
      <D4 changed={changedCurrent}/>
    </div>
  );
};

export default Layer03;
