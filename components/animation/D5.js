import { useState, useEffect } from "react";
import style from "../../styles/Landing.module.css";

const Layer05 = ({ colorArray, indexD4, changedD4 }) => {
  const [indexD5, setIndexD5] = useState(null);
  const [changedD5, setChanged] = useState(null);

  const changeIndex = () => {
    if (indexD5 + 1 < colorArray.length) {
      setIndexD5(indexD5 + 1), setChanged(true);
    } else setIndexD5(0), setChanged(true);
  };

  const changeColor = () => {
    setIndex(Math.floor(Math.random() * colorArray.length));
  };

  return (
    <div
      className={style.horizontal}
      style={{ background: colorArray[indexD5] }}
      // onMouseEnter={changed && !changedCurrent ? () => changeColor() : null}
      onClick={changedD4 ? () => changeIndex() : null}
    ></div>
  );
};

export default Layer05;
