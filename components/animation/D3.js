import { useState, useEffect } from "react";
import style from "../../styles/Landing.module.css";
import D4 from "../animation/D4";

const Layer03 = ({changed, colorArray}) => {
  const [index, setIndex] = useState(null);
  const [changedCurrent, setChangedCurrent] = useState(null);

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
      onMouseEnter={!changedCurrent ? () => changeColor() : null}
    >
      <D4 colorArray={colorArray} changed={changedCurrent}/>
      <D4 colorArray={colorArray} changed={changedCurrent}/>
    </div>
  );
};

export default Layer03;
