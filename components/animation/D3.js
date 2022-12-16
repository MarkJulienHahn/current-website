import { useState, useEffect } from "react";
import style from "../../styles/Landing.module.css";
import D4 from "../animation/D4";

const Layer03 = ({changed, colorArray}) => {
  const [indexD3, setIndexD3] = useState(null);
  const [changedD3, setChanged] = useState(true);

  const changeIndex = () => {
    setIndex(Math.floor(Math.random() * colorArray.length)), setChangedCurrent(true);
  };

  const changeColor = () => {
    setIndex(Math.floor(Math.random() * colorArray.length))
  }

  useEffect(() => {
    setIndexD3(Math.floor(Math.random() * colorArray.length));
  }, []);

  return (
    <div
      className={style.vertical}
      style={{ background: colorArray[indexD3], display: "flex"  }}
      // onClick={changed && !changedCurrent ? () => changeIndex() : null}
      // onMouseEnter={!changedCurrent ? () => changeColor() : null}
    >
      <D4 colorArray={colorArray} changedD3={changedD3} indexD3={indexD3}/>
      <D4 colorArray={colorArray} changedD3={changedD3} indexD3={indexD3}/>
    </div>
  );
};

export default Layer03;
